const myLibrary = [
                ];

function Book(title, author, genre, pages, read) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        let info = `${this.title} is a book by ${author}, it has ${this.pages} pages, the genre is ${this.genre}. Have you read it? ${this.read}`;
        return info;
    }
}

function addBookToLibrary() {
    let title = newTitle.value;
    let author = newAuthor.value;
    let genre = newGenre.value;
    let pages = noOfPages.value;
    let read = 'Yes';
    let newBook = new Book(title, author, genre, pages, read);
    myLibrary.push(newBook);
}

function addCard() {
    
        let title = newTitle.value;
        let author = newAuthor.value;
        let genre = newGenre.value;
        let pages = noOfPages.value;
        let read = 'Yes';
        let cardContainer = document.getElementById('card-container');
        let newCard = document.createElement('p');
        newCard.classList.add('card');
        newCard.innerHTML = `Title: ${title}<br> Author: ${author}<br> Genre: ${genre}<br> No. of pages: ${pages}<br> Read? ${read}`;
        cardContainer.appendChild(newCard);
      
}

const theStand = new Book('The Stand', 'Stephen King', 'Horror', 1018, 'Yes');


//  Dialog element variables
const showButton = document.getElementById('showDialog');
const favDialog = document.getElementById('favDialog');
const outputBox = document.querySelector('output');
const newTitle = favDialog.querySelector('#title');
const newAuthor = favDialog.querySelector('#author');
const newGenre = favDialog.querySelector('#genre');
const noOfPages = favDialog.querySelector('#pages')
const confirmBtn = favDialog.querySelector('#confirmBtn');

// Dialog element functions
showButton.addEventListener('click',() => {
    favDialog.showModal();
});

// favDialog.addEventListener('close', (e) => {
//     confirmBtn.value = newTitle.value;
// })

// favDialog.addEventListener('change', (e) => {
//     outputBox.value = favDialog.returnValue === 'default' ? 'No return value.' : `ReturnValue :${favDialog.returnValue}.`;
// })

// function openCheck(dialog) {
//     if (dialog.open) {
//         console.log('Dialog open');
//     } else {
//         console.log('Dialog closed');
//     }
// }

confirmBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addBookToLibrary();
    addCard();
    document.getElementById('book-form').reset();
    favDialog.close();
})

// function createTable(data) {
//     const table = document.createElement('table');
//     const headerRow = document.createElement('tr');

//     const keys = Object.keys(data[0]);
//     for (const key of keys) {
//         const headerCell = document.createElement('th');
//         headerCell.textContent = key;
//         headerRow.appendChild(headerCell);
//     }
//     table.appendChild(headerRow);

//     for (const obj of data) {
//         const dataRow = document.createElement('tr');
//         for (const key of keys) {
//             const dataCell = document.createElement('td');
//             dataCell.textContent = obj[key];
//             dataRow.appendChild(dataCell);
//         }
//         table.appendChild(dataRow)
//     }
//     return table;
// }

// const table = createTable(myLibrary);
// const tableContainer = document.getElementById('table-container');
// tableContainer.appendChild(table);



// const postMethods = () => {
//     myLibrary.map((data)=> {
//         const postElement = document.createElement('div');
//         postElement.classList.add('card');
//         postElement.innerText = this.info;
//         container.appendChild(postElement);
//     })
// }
// Object.setPrototypeOf(myLibrary, postMethods);
// postMethods();

// myLibrary.forEach(function (arrayItem) {
//     let title = arrayItem.title;
//     let author = arrayItem.author;
//     let genre = arrayItem.genre;
//     let pages = arrayItem.pages
//     let cardContainer = document.getElementById('card-container');
//     let newCard = document.createElement('p');
//     newCard.classList.add('card');
//     newCard.textContent = `${title}  ${author}  ${genre}  ${pages}`;
//     cardContainer.appendChild(newCard);
//   });

// {title: 'Doppelganger',
//                     author: 'Naomi Klein',
//                     genre: 'Nonfiction',
//                     pages: 452,
//                     read: 'No',}, { title: "The Stand Forever Motherfuckers Fuck You All!!!!!!!", author: "Stephen King ARmand Caesar CAligula Moore", genre: "Horror Fiction FAntasy ", pages: 1018, read: "Yes",}