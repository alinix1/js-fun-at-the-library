function createTitle(bookIdea) {
  return ('The ' + bookIdea);
};

createTitle('The Storm\'s Awakening');

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
  return character;
};

function saveReview(review, reviewList) {
  if (reviewList.indexOf(review) === -1) {
    return reviewList.push(review);
  }
};

//OR//

function saveReview(review, reviewList) {
  if (reviewList.includes(review)) {
    return reviewList;
  } else {
    return reviewList.push(review);
  }
};

//OR//

// function saveReview(review, reviewList) {
//   var uniqueReviewList = reviewList.filter((review, index)) => reviewList.indexOf(review) === index);
// uniqueReviewList.push(review);
// return uniqueReviewList;
// };

function calculatePageCount(bookTitle) {

};

//create a function to calculate pageCount
//takes in a parameter of bookTitle
//should add 20 pages per letter
//create a for loop to add 20 to each letter
//look at charAt() for strings
//expected output is 340
//should be dynamic and work for other bookTitles

function writeBook(title, mainCharacter, genre, pageCount) {
  var book = {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: 340,
    genre: genre,
  }
  console.log(book);
  return book;
};

function editBook(book) {
  console.log(book.pageCount * 0.75);
  return book.pageCount * 0.75;
};



module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}