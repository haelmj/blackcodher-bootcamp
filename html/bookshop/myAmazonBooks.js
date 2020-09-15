/* export default function createWishlist() {
    const listContainer = document.querySelectorAll('#booksGoHere');
    } */

// create list items

/* const title = document.createElement('h2');
const author = document.createElement('h3');
const price = document.createElement('h3');
const description = document.createElement('p');
const cover = document.createElement('img')

for (i = 0; i < amazonBooks.length; i++) 
{ 
title.textContent = amazonBooks[i].name;
author.textContent = amazonBooks[i].author;
price.textContent = amazonBooks[i].price;
description.textContent = amazonBooks[i].description;
cover.appendChild(amazonBooks[i].image);
}; */

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

const _break = document.createElement('br')

const amazonBookImage = document.createElement('img');
amazonBookImage.src = _amazonBook.image;
amazonBookImage.alt = _amazonBook.name;

const amazonBookContent = document.createElement('div');

const amazonBookTitle = document.createElement('h2');
amazonBookTitle.title = _amazonBook.name;
const amazonBookAuthor = document.createElement('p');
amazonBookAuthor.className = 'author';
amazonBookAuthor.textContent = _amazonBook.author;
const amazonBookDescription = document.createElement('p');
amazonBookDescription.className = 'description';
amazonBookDescription.textContent = _amazonBook.description;
const amazonBookPrice = document.createElement('p');
amazonBookPrice.className = 'price';
amazonBookPrice.textContent = parseFloat(_amazonBook.price);
const cardDiv = document.createElement('div');


const addBookButton = document.createElement('button');
addBookButton.className = 'addbtn';
const buttonText = document.createTextNode('Add')
addBookButton.appendChild(buttonText)

amazonBookContent.appendChild(amazonBookTitle); 
amazonBookContent.appendChild(amazonBookAuthor); 
amazonBookContent.appendChild(amazonBookDescription);
amazonBookContent.appendChild(amazonBookPrice); 

bookCardItem.appendChild(amazonBookImage); 
bookCardItem.appendChild(amazonBookContent);
cardDiv.appendChild(_break)
cardDiv.appendChild(bookCardItem);
cardDiv.appendChild(addBookButton);
bookCard.appendChild(cardDiv);

}

)};
createBookWishlist(amazonBooks);

