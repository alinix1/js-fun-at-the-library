//FUNCTION 1//

function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
  return library;
};

//FUNCTION 2//

function checkBookStatus(bookShelves, book) {
  for (var i = 0; i < bookShelves.length; i++) {
    if (bookShelves[i] === book) {
      return true;
    } else {
      return false;
    }
  }
};

function addBook(library, book) {
  if (book.genre === "fantasy" && !checkBookStatus(library.shelves.fantasy, book)) {
    library.shelves.fantasy.unshift(book);
  } else if (book.genre === "fiction" && !checkBookStatus(library.shelves.fiction, book)) {
    library.shelves.fiction.unshift(book);
  } else if (book.genre === "nonFiction" && !checkBookStatus(library.shelves.nonFiction, book)) {
    library.shelves.nonFiction.unshift(book);
  }
};

// FUNCTION 2 //

function addBook(library, book) {
  library.shelves[book.genre].push(book)
};

// FUNCTION 2 //

function addBook(library, book) {
  if (book.genre === "fantasy") {
    library.shelves.fantasy.push(book);
  } else if (book.genre === "nonFiction") {
    library.shelves.nonFiction.push(book);
  } else if (book.genre === "fiction") {
    library.shelves.fiction.push(book);
  }
};


//FUNCTION 3//

function checkoutBook(library, bookTitle, bookGenre) {
  var bookShelves = [];
  if (bookGenre === "fantasy") {
    bookShelves = library.shelves.fantasy;
  } else if (bookGenre === "fiction") {
    bookShelves = library.shelves.fiction;
  } else if (bookGenre === "nonFiction") {
    bookShelves = library.shelves.nonFiction;
  }
  var bookIndex = findBookIndex(bookShelves, bookTitle);
  if (bookIndex >= 0) {
    bookShelves.splice(bookIndex, 1);
    return `You have now checked out ${bookTitle} from the ${library.name}`;
  } else {
    return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`;
  }
};

function findBookIndex(bookShelves, book) {
  for (var i = 0; i < bookShelves.length; i++) {
    if (bookShelves[i].title === book) {
      return i;
    } else {
      return -1;
    }
  }
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};