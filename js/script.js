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

const tableItem = document.getElementById('sampleTable');
let rowCount = 3;
tableItem.addEventListener('click', insert_Row);

function insert_Row(){
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>Row${rowCount} cell1</td> <td>Row${rowCount} cell2</td>`;
    tableItem.append(newRow);
    rowCount++;
}