// DOM references
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add Chapter button click event
button.addEventListener('click', function () {
  // Trim input and check if it's not empty
  if (input.value.trim() !== '') {
    // Create list item
    const li = document.createElement('li');
    li.textContent = input.value;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

    // Delete button functionality
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    // Append button to list item and list item to list
    li.append(deleteButton);
    list.append(li);

    // Clear input field
    input.value = '';
  }

  // Always return focus to input field
  input.focus();
});


