"use strict"

//TASK 1
// function getFullName (){
//     const formItems = document.getElementById('form1');

//     for(let i = 0; i < formItems.length; i++){
//         if(formItems[i].value != 'Submit'){
//             console.log(formItems[i].value);
//         }
//     }
// }
// getFullName();

//TASK 2
//Set background
// const paragraphItem = document.getElementById('parag')
// const linkItem = document.getElementById('w3r');
// function setBackground(){
//     // paragraphItem.classList.add('orange');
//     paragraphItem.setAttribute('style', 'background-color: orange');
// }
// paragraphItem.addEventListener('mouseover', setBackground);

// //Show all the attributes
// function getAttributes(){
//     let attributes = linkItem.attributes;
//     console.log(attributes);
//     for(let val in attributes){
//         console.log(`Value: ${attributes[val].value}`);
//     }
// }

//TASK 3
// const tableItem = document.getElementById('sampleTable');
// let rowCount = 3;
// tableItem.addEventListener('click', insert_Row);

// function insert_Row(){
//     const newRow = document.createElement('tr');
//     newRow.innerHTML = `<td>Row${rowCount} cell1</td> <td>Row${rowCount} cell2</td>`;
//     tableItem.append(newRow);
//     rowCount++;
// }

//TASK 4
// function changeContent(){
//     let rn = window.prompt("Input the Row number(0,1,2)", "0");
//     let cn = window.prompt("Input the Column number(0,1)","0");
//     let content = window.prompt("Input the Cell content");  
//     var x = document.getElementById('myTable').rows[parseInt(rn,10)].cells;
//     x[parseInt(cn,10)].innerHTML = content;
// }

//TASK 5
// const tableItem = document.getElementById('myTable');
// function createTable(){
//     let rowNumber = prompt("Enter the row number", '0');
//     let cellNumber = prompt("Enter the cell number", '0');

//     for(let i = 0; i < rowNumber; i++){
//         //Creating tr elements
//         let row = document.createElement('tr');
//         for(let j = 0; j < cellNumber; j++){
//             //Creating td elements
//             let cell = document.createElement('td');
//             //Putting some text into every cell
//             let cellText = document.createTextNode(`Row ${i + 1} Cell ${j + 1}`)
//             cell.appendChild(cellText);
//             //Putting the cells into the rows
//             row.appendChild(cell);
//         }
//         //Showing rows on the page
//         tableItem.appendChild(row);
//     }
// }

//TASK 6
// const colorList = document.getElementById('colorSelect');

// //Removing selected color
// function removecolor(){
//     colorList.remove(colorList.selectedIndex);
// }

//TASK 7
// function getVolume(){
//     let volume;
//     let radiusValue = document.getElementById('radius').value;
//     radiusValue = Math.abs(radiusValue);
//     volume = 4 / (3 * Math.PI * Math.pow(radiusValue, 3))
//     volume = volume.toFixed(4);
//     document.getElementById('volume').value = volume;
// }

//TASK 8
// const formItem = document.getElementById('randomImage');
// const images = [
//     "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
//     "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
//     "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
// ];

// function showPicture(){
//     let image = document.createElement('img');
//     let indexOfRandomPicture = Math.floor(Math.random() * 3);
//     image.setAttribute('src', `${images[indexOfRandomPicture]}`);
//     formItem.append(image);
// }

//TASK 9
const textForHighlightingItem = document.querySelector('.textForHighlighting');

textForHighlightingItem.addEventListener('mouseover', makeHighlighted);
textForHighlightingItem.addEventListener('mouseout', removeHighlighted);

function makeHighlighted(){
    const highlightedWords = document.querySelector('.text').getElementsByTagName('span');
    for(let word in highlightedWords){
        highlightedWords[word].setAttribute('style', 'color: #33BD33;');
    }
}
function removeHighlighted(){
    const highlightedWords = document.querySelector('.text').getElementsByTagName('span');
    for(let word in highlightedWords){
        highlightedWords[word].removeAttribute('style', 'color: #33BD33;');
    }
}