const btnSave = document.querySelector('#btnSave');
const btnClear = document.querySelector('#btnClear');
const notes = document.querySelector('#notes');
const noteInput = document.querySelector('#noteInput');

btnSave.addEventListener('click', function() {
  let note = noteInput.value;
  notes.innerHTML += '<li>' + note + '</li>';
  noteInput.value = '';
});

btnClear.addEventListener('click', function() {
  notes.innerHTML = '';
  noteInput.value = '';
});
