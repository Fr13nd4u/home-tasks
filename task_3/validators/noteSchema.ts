import * as yup from 'yup';
import { Note } from '../types';

export const noteSchema = yup.object({
  id: yup.string().required(),
  time: yup.string().required(),
  dates: yup.string().required(),
  category: yup.string().required(),
  content: yup.string().required(),
  archived: yup.boolean().required(),
});

export const validateNote = async (note: Note): Promise<void> => {
  await noteSchema.validate(note, { abortEarly: false });
};
