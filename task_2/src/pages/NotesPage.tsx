import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import { NoteSummary } from "../components/note-summary";
import { NoteList } from "../components/note-list";
import { NoteForm } from "../components/note-form";
import { Container } from "../components/shared";

export const NotesPage: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notes.notes);

  return (
    <Container>
      <NoteForm />
      <NoteList notes={notes} />
      <NoteSummary notes={notes} />
    </Container>
  );
};
