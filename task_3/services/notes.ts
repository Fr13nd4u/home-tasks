import * as NotesRepository from '../repositories/notes';
import { NoteBody, Note, Static } from '../types';

export const getAllNotes = (): Note[] => NotesRepository.getAllNotes();

export const getNoteById = (id: string): Note | undefined =>
  NotesRepository.getNoteById(id);

export const createNote = async (note: NoteBody): Promise<NoteBody> => {
  return NotesRepository.createNote(note);
};

export const updateNote = async (id: string, updatedNote: NoteBody): Promise<Note | undefined> => {
  return NotesRepository.updateNote(id, updatedNote);
};

export const deleteNote = (id: string): boolean => NotesRepository.deleteNote(id);

export const getStats = (): Static[] => NotesRepository.getStats();
