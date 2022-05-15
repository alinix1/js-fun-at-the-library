function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
  console.log(library);
  return library;
};

function shelfHasBook(shelf, book) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i] === book) {
      return true;
    } else {
      return false;
    }
  }
};

function addBook(library, book) {
  if (book.genre == "fantasy" && !shelfHasBook(library.shelves.fantasy, book)) {
    library.shelves.fantasy.unshift(book);
  } else if (book.genre == "fiction" && !shelfHasBook(library.shelves.fiction, book)) {
    library.shelves.fiction.unshift(book);
  } else if (book.genre == "nonFiction" && !shelfHasBook(library.shelves.nonFiction, book)) {
    library.shelves.nonFiction.unshift(book);
  }
};

function checkoutBook(library, bookTitle, bookGenre) {
  var shelf = [];
  if (bookGenre === "fantasy") {
    shelf = library.shelves.fantasy;
  } else if (bookGenre === "fiction") {
    shelf = library.shelves.fiction;
  } else if (bookGenre === "nonFiction") {
    shelf = library.shelves.nonFiction;
  }
  var bookIndex = indexOfBook(shelf, bookTitle);
  if (bookIndex >= 0) {
    shelf.splice(bookIndex, 1);
    return `You have now checked out ${bookTitle} from the ${library.name}`;
  } else {
    return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`;
  }
};

function indexOfBook(shelf, book) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
      return i;
    } else {
      return -1;
    }
  }
};

//OR//

// function checkoutBook(library, bookTitle, bookGenre) {
//   for (var i = 0; i < library.shelves[bookGenre].length; i++) {
//     if (library.shelves[bookGenre][i].title === bookTitle) {
//       library.shelves[bookGenre].splice(i, 1);
//       return `You have now checked out ${bookTitle} from the ${library.name}`;
//     } else {
//       return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`;
//     }
//   }
// };

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};