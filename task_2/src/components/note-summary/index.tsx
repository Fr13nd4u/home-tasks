import React from "react";
import { INote } from "../../types";
import { Table, TableColumn } from "../table";

interface NoteListProps {
  notes: INote[];
}
export const NoteSummary: React.FC<NoteListProps> = ({ notes }) => {
  const notesCategories = notes
    .map((item) => item.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  const summaryData = notesCategories.map((category) => {
    const activeNotesCount = notes.filter(
      (note) => note.category === category && !note.archived
    ).length;
    const archivedNotesCount = notes.filter(
      (note) => note.category === category && note.archived
    ).length;

    return {
      category,
      active: activeNotesCount,
      archived: archivedNotesCount,
    };
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns: TableColumn<any>[] = [
    { label: "Note Category", key: "category" },
    {
      label: "Active",
      key: "active",
    },
    {
      label: "Archived",
      key: "archived",
    },
  ];
  return (
    <>
      <Table data={summaryData} columns={columns} />
    </>
  );
};
