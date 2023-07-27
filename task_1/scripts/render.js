import { getNotes, countNotesByCategory } from './data.js';

export function renderNotesTable() {
  const notesTable = document.querySelector('#notes-table tbody');
  const notes = getNotes();

  notesTable.innerHTML = '';

  // Render new notes rows
  notes.forEach((note) => {
    const row = notesTable.insertRow();
    row.innerHTML = `<td>${note.time}</td><td>${note.content}</td><td>${note.category}</td><td>${note.dates.join(', ')}</td><td>
      <button class="edit" data-note-id="${note.id}">Edit</button>
      <button class="remove" data-note-id="${note.id}">Remove</button>
      <button class="archive" data-note-id="${note.id}">Archive</button>
      <button class="unarchive" data-note-id="${note.id}">Unarchive</button>
    </td>`;
  });

}


function renderSummaryTable() {
  const summaryTable = document.getElementById('summary-table');
  summaryTable.innerHTML = '';

  const table = document.createElement('table');
  const headerRow = table.insertRow();
  headerRow.innerHTML = '<th>Category</th><th>Count</th>';

  const summary = countNotesByCategory();
  Object.keys(summary).forEach((category) => {
    const row = table.insertRow();
    row.innerHTML = `<td>${category}</td><td>${summary[category]}</td>`;
  });

  summaryTable.appendChild(table);
}

function updateTables() {
  renderNotesTable();
  renderSummaryTable();
}

export { updateTables, renderSummaryTable };