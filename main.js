const myLibrary = [];



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