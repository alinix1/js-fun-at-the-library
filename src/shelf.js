//FUNCTION 1//

function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
};

//FUNCTION 2//

function unshelfBook(book, shelf) {
  var bookIndex = shelf.findIndex((name) => name.title === book);
  shelf.splice(bookIndex, 1);
};

//FUNCTION 3//

function listTitles(titles) {
  var bookTitleList = titles[0].title
  for (var i = 1; i < titles.length; i++) {
    bookTitleList += ', ' + titles[i].title;
  }
  return bookTitleList;
};

//FUNCTION 4//

function searchShelf(shelf, bookTitle) {
  return shelf.some(book => book.title === bookTitle);
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};