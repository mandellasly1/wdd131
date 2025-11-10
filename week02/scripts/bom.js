const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapterList');

button.addEventListener('click', () => {
  if (input.value.trim() === '') return;

  const li = document.createElement('li');
  li.textContent = input.value;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '❌';
  deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

  deleteButton.addEventListener('click', () => {
    list.removeChild(li);
  });

  li.append(deleteButton);
  list.append(li);

  input.value = '';
  input.focus();
});



