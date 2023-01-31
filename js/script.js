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
const paragraphItem = document.getElementById('parag')
const linkItem = document.getElementById('w3r');
function setBackground(){
    // paragraphItem.classList.add('orange');
    paragraphItem.setAttribute('style', 'background-color: orange');
}
paragraphItem.addEventListener('mouseover', setBackground);

//Show all the attributes
function getAttributes(){
    let attributes = linkItem.attributes;
    console.log(attributes);
    for(let val in attributes){
        console.log(`Value: ${attributes[val].value}`);
    }
}