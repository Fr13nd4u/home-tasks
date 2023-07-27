import { getNotes, countNotesByCategory, formatDate } from './data.js';

export function renderNotesTable(showArchived = false) {
  const notesTable = document.querySelector('#notes-table tbody');
  const notes = getNotes();

  notesTable.innerHTML = '';

  // Render new notes rows
  notes.forEach((note) => {
    if (!note.archived || showArchived) {
    const row = notesTable.insertRow();
    row.innerHTML = `<td>${formatDate(note.time)}</td><td>${note.content}</td><td>${note.category}</td><td>${note.dates.join(', ')}</td><td>
    <button class="edit" data-note-id="${note.id}">Edit</button>
    <button class="remove" data-note-id="${note.id}">Remove</button>
    ${note.archived ? '<button class="unarchive" data-note-id="' + note.id + '">Unarchive</button>' : '<button class="archive" data-note-id="' + note.id + '">Archive</button>'}
  </td>`;
    }
  });
}

export function renderSummaryTable() {
  const summaryTable = document.getElementById('summary-table');
  const summary = countNotesByCategory();

  summaryTable.innerHTML = '';

  const headerRow = summaryTable.createTHead().insertRow();
  headerRow.innerHTML = '<th>Note Category</th><th>Active Notes Count</th><th>Archived Notes Count</th>';

  const tbody = summaryTable.createTBody();

  Object.keys(summary).forEach((category) => {
    const row = tbody.insertRow();
    const activeCount = summary[category].active || 0;
    const archivedCount = summary[category].archived || 0;
    row.innerHTML = `<td>${category}</td><td>${activeCount}</td><td>${archivedCount}</td>`;
  });
}


export function renderArchivedNotes() {
  renderNotesTable(true); 
}