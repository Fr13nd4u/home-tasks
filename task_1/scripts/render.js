import { getNotes } from './data.js';

export function renderNotesTable() {
  const notesTable = document.querySelector('#notes-table tbody');
  const notes = getNotes();

  // Clear previous content
  notesTable.innerHTML = '';

  // Render new notes rows
  notes.forEach((note) => {
    const row = notesTable.insertRow();
    row.innerHTML = `<td>${note.time}</td><td>${note.content}</td><td>${note.category}</td><td>${note.dates.join(', ')}</td><td>
      <button onclick="editNoteHandler(${note.id})">Edit</button>
      <button onclick="removeNoteHandler(${note.id})">Remove</button>
      <button onclick="archiveNoteHandler(${note.id})">Archive</button>
      <button onclick="unarchiveNoteHandler(${note.id})">Unarchive</button>
    </td>`;
  });

  notesTable.appendChild(table);
}
