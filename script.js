const headerText = document.getElementById('header');
// console.log(headerText);
headerText.innerText = 'I changed it';


// const textClass = document.getElementsByClassName('text');
// // console.log(textClass);
// for(let text of textClass){
//     text.innerText = 'I changed it';
// }


const textClass = document.querySelectorAll('.text');
// Both class will change use 'for of loop'
for(let text of textClass){
    text.innerText = 'This is P tag'
}
// Single class will change
textClass[0].innerText = '1st Class'
textClass[1].innerText = '2nd Class'
textClass[2].innerText = '3rd Class'


const addedTag = document.getElementById('add-p-tag');
addedTag.innerHTML = '<p>Finally Added</p>'
