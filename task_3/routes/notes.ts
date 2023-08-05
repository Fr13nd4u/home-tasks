import express, { Request, Response } from 'express';
import * as NotesService from '../services/notes';

const notesRouter = express.Router();

notesRouter.post('/', async (req: Request, res: Response) => {
  try {
    const newNote = await NotesService.createNote(req.body);
    res.status(201).json(newNote);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

notesRouter.delete('/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const success = NotesService.deleteNote(id);
  if (success) {
    res.sendStatus(204);
  } else {
    res.status(404).json({ error: 'Note not found' });
  }
});

notesRouter.patch('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const updatedNote = await NotesService.updateNote(id, req.body);
    if (updatedNote) {
      res.json(updatedNote);
    } else {
      res.status(404).json({ error: 'Note not found' });
    }
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

notesRouter.get('/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const note = NotesService.getNoteById(id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ error: 'Note not found' });
  }
});

notesRouter.get('/', (req: Request, res: Response) => {
  const notes = NotesService.getAllNotes();
  res.json(notes);
});

export { notesRouter };
