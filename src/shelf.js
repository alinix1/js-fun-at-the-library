//FUNCTION 1//

function shelfBook(book, bookShelves) {
  if (bookShelves.length < 3) {
    bookShelves.unshift(book);
  }
};

//FUNCTION 2//

function unshelfBook(book, bookShelves) {
  var bookIndex = bookShelves.findIndex((name) => name.title === book);
  bookShelves.splice(bookIndex, 1);
};

//FUNCTION 2//

function unshelfBook(book, bookShelves) {
  for (var i = 0; i < bookShelves.length; i++) {
    if (bookShelves[i].title.includes(book)) {
      bookShelves.splice(i, 1);
    }
  }
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

function searchShelf(bookShelves, bookTitle) {
  return bookShelves.some(book => book.title === bookTitle);
};

//FUNCTION 4//

function searchShelf(bookShelves, bookTitle) {
  for (var i = 1; i < bookShelves.length; i++) {
    if (bookShelves[i].title === bookTitle) {
      return result = true;
    } else {
      return result = false;
    }
  }
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};