import { Note } from '../types';

let notes: Note[] = [
  {
    id: '1',
    time: '2023-07-26T09:00:00',
    content: 'Buy groceries',
    category: 'Task',
    dates: '2023-07-26T09:00:00',
    archived: false,
  },
  {
    id: '2',
    time: '2023-07-26T12:30:00',
    content: 'Call Mom',
    category: 'Task',
    dates: '2023-07-26T12:30:00',
    archived: false,
  },
  {
    id: '3',
    time: '2023-07-26T15:15:00',
    content: 'Write a blog post',
    category: 'Task',
    dates: '2023-07-26T15:15:00',
    archived: false,
  },
  {
    id: '4',
    time: '2023-07-25T18:45:00',
    content: 'Idea: Start a side project',
    category: 'Idea',
    dates: '',
    archived: false,
  },
  {
    id: '5',
    time: '2023-07-24T14:00:00',
    content: 'Random Thought: Life is short',
    category: 'Random Thought',
    dates: '',
    archived: false,
  },
  {
    id: '6',
    time: '2023-07-23T11:10:00',
    content: 'Idea: Travel to Japan',
    category: 'Idea',
    dates: '2023-07-23T11:10:00',
    archived: false,
  },
  {
    id: '7',
    time: '2023-07-22T08:20:00',
    content: 'Idea: Learn to play the guitar',
    category: 'Idea',
    dates: '2023-07-24T14:00:00',
    archived: true,
  },
];

export const getAllNotes = (): Note[] => notes;

export const getNoteById = (id: string): Note | undefined =>
  notes.find((note) => note.id === id);

export const createNote = (note: Note): Note => {
  notes.push(note);
  return note;
};

export const updateNote = (id: string, updatedNote: Note): Note | undefined => {
  const index = notes.findIndex((note) => note.id === id);
  if (index !== -1) {
    notes[index] = updatedNote;
    return updatedNote;
  }
  return undefined;
};

export const deleteNote = (id: string): boolean => {
  const initialLength = notes.length;
  notes = notes.filter((note) => note.id !== id);
  return notes.length !== initialLength;
};
