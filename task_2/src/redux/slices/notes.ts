import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INote, notes } from "../../types";

interface IState {
  notes: INote[];
}

const initialState: IState = {
  notes: notes,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<INote>) => {
      state.notes.push(action.payload);
    },
    removeNote: (state, action: PayloadAction<number>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    editNote: (state, action: PayloadAction<INote>) => {
      const editedNote = action.payload;
      const index = state.notes.findIndex((note) => note.id === editedNote.id);
      if (index !== -1) {
        state.notes[index] = editedNote;
      }
    },
    // archiveNote: (state, action: PayloadAction<number>) => {
    //   const editedNote = action.payload;
    //   const index = state.notes.findIndex((note) => note.id === action.payload);
    //   if (index !== -1) {
    //     state.notes[index] = editedNote;
    //   }
    // }
  },
});

const { reducer, actions } = notesSlice;
export const { addNote, removeNote, editNote } = actions;
export default reducer;