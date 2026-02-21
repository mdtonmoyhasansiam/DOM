const headerText = document.getElementById('header');
// console.log(headerText);
headerText.innerText = 'I changed it';

// const textClass = document.getElementsByClassName('text');
// // console.log(textClass);
// for(let text of textClass){
//     text.innerText = 'I changed it';
// }

const textClass = document.querySelectorAll('.text');
for(let text of textClass){
    text.innerText = 'This is P tag'
}

const addedTag = document.getElementById('add-p-tag');
addedTag.innerHTML = '<p>Finally Added</p>'
