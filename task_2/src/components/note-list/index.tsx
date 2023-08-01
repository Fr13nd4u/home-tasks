import React from "react";
import { useDispatch } from "react-redux";

import { INote } from "../../types";
import {
  archiveNote,
  removeNote,
  unarchiveNotes,
} from "../../redux/slices/notes";
import { Table, TableColumn } from "../table";
import { Button } from "../shared";

interface NoteListProps {
  notes: INote[];
}

export const NoteList: React.FC<NoteListProps> = ({ notes }) => {
  const noArchivedNotes = notes.filter((note) => !note.archived);
  const dispatch = useDispatch();

  const handleRemoveNote = (id: string) => {
    dispatch(removeNote(id));
  };

  const handleArchiveNote = (id: string) => {
    dispatch(archiveNote(id));
  };

  const handleEditNote = (id: string) => {
    // dispatch(archiveNote(id));
  };

  const handleUnarchiveNote = () => {
    dispatch(unarchiveNotes());
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns: TableColumn<INote | any>[] = [
    { label: "Time", key: "time" },
    { label: "Content", key: "content" },
    { label: "Category", key: "category" },
    {
      label: "Dates",
      key: "dates",
      render: (value: string[]) => value.join(", "),
    },
    {
      label: "Actions",
      key: "id",
      render: (id: string) => (
        <>
          <Button onClick={() => handleEditNote(id)}>Edit</Button>
          <Button onClick={() => handleArchiveNote(id)}>Archive</Button>
          <Button onClick={() => handleRemoveNote(id)}>Remove</Button>
        </>
      ),
    },
  ];

  return (
    <>
      <Table data={noArchivedNotes} columns={columns} />
      <Button onClick={() => handleUnarchiveNote()}>Unarchive All</Button>
    </>
  );
};
