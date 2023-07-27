import { addNote, removeNote  } from './data.js';
import { renderNotesTable, renderSummaryTable } from './render.js';

const addNoteForm = document.querySelector('#add-note-form');
const noteContentInput = document.querySelector('#note-content');
const noteCategoryInput = document.querySelector('#note-category');

// Handle "Add Note" event
addNoteForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const noteContent = noteContentInput.value.trim();
  const noteCategory = noteCategoryInput.value;

  if (!noteContent || !noteCategory) {
    alert('Please fill in both Note Content and Note Category.');
    return;
  }

  const newNote = {
    id: Date.now(),
    time: new Date().toISOString(),
    content: noteContent,
    category: noteCategory,
    dates: [], 
    archived: false,
  };

  addNote(newNote);

  noteContentInput.value = '';
  noteCategoryInput.value = '';

  init()
});

// Handle "Remove" button click event
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove')) {
    const noteId = parseInt(event.target.dataset.noteId);

    removeNote(noteId);

    init()
  }
});

function init() {
  renderNotesTable();
  renderSummaryTable();
}

document.addEventListener('DOMContentLoaded', init);


