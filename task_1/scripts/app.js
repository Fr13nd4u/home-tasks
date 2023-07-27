import { addNote, getNotes, removeNote, editNote } from './data.js';
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

// Handle "Edit Note" event
const editModal = document.getElementById('edit-modal');
const modalClose = document.getElementById('modal-close');
const editNoteForm = document.getElementById('edit-note-form');
const editNoteContent = document.getElementById('edit-note-content');
const editNoteCategory = document.getElementById('edit-note-category');
let editingNoteId = null; 

function openEditModal(noteId) {
  editingNoteId = noteId;

  const note = getNoteById(noteId);

  editNoteContent.value = note.content;
  editNoteCategory.value = note.category;

  editModal.style.display = 'block';
}

function closeEditModal() {
  editingNoteId = null;
  editNoteForm.reset();
  editModal.style.display = 'none';
}

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('edit')) {
    const noteId = parseInt(event.target.dataset.noteId);
    openEditModal(noteId);
  }
});

modalClose.addEventListener('click', () => {
  closeEditModal();
});

window.addEventListener('click', (event) => {
  if (event.target === editModal) {
    closeEditModal();
  }
});

editNoteForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const editedNoteContent = editNoteContent.value.trim();
  const editedNoteCategory = editNoteCategory.value;

  if (!editedNoteContent || !editedNoteCategory) {
    alert('Please fill in both Note Content and Note Category.');
    return;
  }

  const note = getNoteById(editingNoteId);

  note.content = editedNoteContent;
  note.category = editedNoteCategory;

  closeEditModal();

  editNote(note);

  init()
});

function getNoteById(noteId) {
  const notesData = getNotes()
  return notesData.find((note) => note.id === noteId);
}

function init() {
  renderNotesTable();
  renderSummaryTable();
}

document.addEventListener('DOMContentLoaded', init);


