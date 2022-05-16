// FUNCTION 1//

function createTitle(bookIdea) {
  return ('The ' + bookIdea);
};

//FUNCTION 2//

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
  return character;
};

//FUNCTION 3//

function saveReview(review, reviewList) {
  if (reviewList.indexOf(review) === -1) {
    return reviewList.push(review);
  }
};

//FUNCTION 3//

function saveReview(review, reviewList) {
  if (reviewList.includes(review)) {
    return reviewList;
  } else {
    return reviewList.push(review);
  }
};

//FUNCTION 4//

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
};

//FUNCTION 5//

function writeBook(title, mainCharacter, genre) {
  var book = {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre,
  }
  return book;
};

//FUNCTION 6//

function editBook(book) {
  book.pageCount = book.pageCount * 0.75;
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}