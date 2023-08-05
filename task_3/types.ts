export interface Note {
  id: string;
  time: string;
  content: string;
  category: string;
  dates: string;
  archived: boolean;
}

export interface NoteBody {
  content: string;
  category: string;
  dates: string;
  archived: boolean;
}