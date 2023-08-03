import React from "react";
import { useDispatch } from "react-redux";

import { INote } from "../../types";
import {
  archiveNote,
  removeNote,
  unarchiveAllNotes,
  unarchiveNote,
} from "../../redux/slices/notes";
import { Table, TableColumn } from "../table";
import { Button, Modal } from "../shared";
import NoteForm from "../note-form";
import { formatDate } from "../../utils/utils";

interface NoteListProps {
  notes: INote[];
}

export const NoteList: React.FC<NoteListProps> = ({ notes }) => {
  const [modalActive, setModalActive] = React.useState(false);
  const [showArchived, setShowArchived] = React.useState(false); // New state variable to track archived items

  const dispatch = useDispatch();

  const filteredNotes = showArchived
    ? notes.filter((note) => note.archived)
    : notes.filter((note) => !note.archived);

  const handleRemoveNote = (id: string) => {
    dispatch(removeNote(id));
  };

  const handleArchiveNote = (id: string) => {
    dispatch(archiveNote(id));
  };

  const handleUnrchiveNote = (id: string) => {
    dispatch(unarchiveNote(id));
  };

  const handleEditNote = () => {
    setModalActive(true);
  };

  const handleUnarchiveAllNotes = () => {
    dispatch(unarchiveAllNotes());
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns: TableColumn<INote | any>[] = [
    {
      label: "Time",
      key: "time",
      render: (value: string) => formatDate(value),
    },
    { label: "Content", key: "content" },
    { label: "Category", key: "category" },
    {
      label: "Dates",
      key: "dates",
      render: (value: string) => formatDate(value),
    },
    {
      label: "Actions",
      key: "id",
      render: (id: string) => (
        <>
          <Button onClick={() => handleEditNote()}>Edit</Button>

          {showArchived ? (
            <Button onClick={() => handleUnrchiveNote(id)}>Unarchive</Button>
          ) : (
            <Button onClick={() => handleArchiveNote(id)}>Archive</Button>
          )}

          <Button onClick={() => handleRemoveNote(id)}>Remove</Button>
          <Modal
            title="Edit Note"
            active={modalActive}
            setActive={setModalActive}
          >
            <NoteForm
              note={notes.find((note) => note.id === id)}
              setModalActive={setModalActive}
            />
          </Modal>
        </>
      ),
    },
  ];

  return (
    <>
      <Table data={filteredNotes} columns={columns} />
      <Button onClick={() => handleUnarchiveAllNotes()}>Unarchive All</Button>

      <Button onClick={() => setShowArchived(!showArchived)}>
        {showArchived ? "Hide Archived" : "Show Archived"}
      </Button>
    </>
  );
};
