"use strict"

function getFullName (){
    const formItems = document.getElementById('form1');

    for(let i = 0; i < formItems.length; i++){
        if(formItems[i].value != 'Submit'){
            console.log(formItems[i].value);
        }
    }
}
getFullName();