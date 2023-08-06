import * as yup from 'yup';
import { NoteBody, Note } from '../types';

export const noteSchema = yup.object({
  dates: yup.string().required(),
  category: yup.string().min(2).max(64).required(),
  content: yup.string().min(2).max(255).required(),
  archived: yup.boolean().required(),
});

export const validateNote = async (note: NoteBody): Promise<void> => {
  await noteSchema.validate(note, { abortEarly: false });
};
