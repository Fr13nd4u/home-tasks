import * as NotesRepository from '../repositories/notes';
import { NoteBody, Note } from '../types';
import { validateNote } from '../validators/noteSchema';

export const getAllNotes = (): Note[] => NotesRepository.getAllNotes();

export const getNoteById = (id: string): Note | undefined =>
  NotesRepository.getNoteById(id);

export const createNote = async (note: NoteBody): Promise<NoteBody> => {
  await validateNote(note);
  return NotesRepository.createNote(note);
};

export const updateNote = async (id: string, updatedNote: NoteBody): Promise<Note | undefined> => {
  await validateNote(updatedNote);
  return NotesRepository.updateNote(id, updatedNote);
};

export const deleteNote = (id: string): boolean => NotesRepository.deleteNote(id);
