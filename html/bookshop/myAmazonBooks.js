/* 
import the array into this js file
select the section/div the books are going to appear
in js create an element to display page title -
append text to title and then title to the now difined section of the page
create a section for each individual book and append that to same section
grab img, title, description and price from the imported array
create element for each and give each a class
append each to the individual book section
create an add button, give it a class
append button to the individual book section too
page section - page title - loop(book section - book content - button)
loops for as many books that are in the array
*/

import {amazonBooks} from './amazon-wishlist.js'
function createBookWishlist(amazonBooks) {

const wishlistSection = document.querySelector('#booksGoHere');
const title = document.createElement('h2');
const titleText = document.createTextNode('My Book Wishlist:');

const bookCard = document.createElement('div');
bookCard.className = 'bookCardDiv'

title.appendChild(titleText);
wishlistSection.appendChild(title);
wishlistSection.appendChild(bookCard);

amazonBooks.map((_amazonBook) => {
const bookCardItem = document.createElement('div');
bookCardItem.className = 'amazonBookCard';

// const _break = document.createElement('br');

const amazonBookImage = document.createElement('img');
amazonBookImage.src = _amazonBook.image;
amazonBookImage.alt = _amazonBook.name;

const amazonBookContent = document.createElement('div');

const amazonBookTitleDiv = document.createElement('div')
amazonBookTitleDiv.className = 'amazonBookTitleDiv'
const bookTitle = document.createElement('h2');
bookTitle.className = 'bookTitle';
bookTitle.textContent = _amazonBook.name;
amazonBookTitleDiv.appendChild(bookTitle)

const authorDiv = document.createElement('div')
authorDiv.className = 'authorDiv'
const amazonBookAuthor = document.createElement('p');
amazonBookAuthor.className = 'author';
amazonBookAuthor.textContent = _amazonBook.author;
authorDiv.appendChild(amazonBookAuthor)

const descriptionDiv = document.createElement('div')
descriptionDiv.className = 'descriptionDiv'
const amazonBookDescription = document.createElement('p');
amazonBookDescription.className = 'description';
amazonBookDescription.textContent = _amazonBook.description;
descriptionDiv.appendChild(amazonBookDescription)

const amazonBookPrice = document.createElement('p');
amazonBookPrice.className = 'price';
amazonBookPrice.textContent = '£' + parseFloat(_amazonBook.price);

// const lineBreaks = document.createElement('hr')
// lineBreaks.className = 'linebreaks'

const cardDiv = document.createElement('div');
cardDiv.className = 'cardDiv'


const addBookButton = document.createElement('button');
addBookButton.className = 'addbtn';
const buttonText = document.createTextNode('Add');
addBookButton.appendChild(buttonText);

amazonBookContent.appendChild(amazonBookTitleDiv); 
amazonBookContent.appendChild(authorDiv); 
amazonBookContent.appendChild(descriptionDiv);
amazonBookContent.appendChild(amazonBookPrice);


bookCardItem.appendChild(amazonBookImage); 
bookCardItem.appendChild(amazonBookContent);
cardDiv.appendChild(bookCardItem);
cardDiv.appendChild(addBookButton);
// cardDiv.appendChild(lineBreaks) 
bookCard.appendChild(cardDiv);

}

)};
createBookWishlist(amazonBooks);

