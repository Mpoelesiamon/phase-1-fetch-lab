function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


function fetchBooks() {
  // Fetch books from the Game of Thrones API
  return fetch('https://anapioficeandfire.com/api/books')
    .then((response) => response.json())
    .then((data) => renderBooks(data));
}

function renderBooks(books) {
  const booksList = document.getElementById('books');

  books.forEach((book) => {
    const listItem = document.createElement('li');
    listItem.textContent = book.name;
    booksList.appendChild(listItem);
  });
}

// Call fetchBooks when the page loads
document.addEventListener('DOMContentLoaded', () => {
  fetchBooks();
});
