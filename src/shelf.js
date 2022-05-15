function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
};

function unshelfBook(book, shelf) {
  var bookIndex = shelf.findIndex((name) => name.title === book);
  shelf.splice(bookIndex, 1);
};

//can this be implemented using a for loop instead?

function listTitles(titles) {
  var itemlist = titles[0].title
  for (var i = 1; i < titles.length; i++) {
    itemlist += ', ' + titles[i].title
  }
  return itemlist;
};

function searchShelf(shelf, book) {
  return shelf.some(element => element.title === book);
};

//use .includes() for the above implementation?
//instead of .some() method




module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};