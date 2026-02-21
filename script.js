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
for (let text of textClass) {
    text.innerText = 'This is P tag'
}
// Single class will change
textClass[0].innerText = '1st Class'
textClass[1].innerText = '2nd Class'
textClass[2].innerText = '3rd Class'

// Style class implement

textClass[0].classList.add('color');
textClass[2].classList.add('bold');

textClass[0].classList.remove('color');
textClass[2].classList.remove('bold');

// বাটন সেট করে ক্লিকের মাধ্যমে কালার এবং ফন্ট সাইজ চেঞ্জ করার পদ্ধতি
let btnSet = document.getElementById('btn-set')
    .addEventListener('click', function () {
        textClass[0].classList.add('color');
        textClass[2].classList.add('bold');
    })

let btnRemoved = document.getElementById('btn-removed')
    .addEventListener('click', function () {
        textClass[0].classList.remove('color');
        textClass[2].classList.remove('bold');
    })


// প্যারেন্ট div এর ভিতর JS এর মাধ্যমে সেখানে এলিমেন্ট বা ট্যাগগুলো বসানোর পদ্ধতি
const addedTag = document.getElementById('add-p-tag');
addedTag.innerHTML = '<p>Finally Added</p>'



// প্যারেন্ট div এর ভিতর JS এর মাধ্যমে আরেকটা child div নিয়ে সেখানে এলিমেন্টগুলো বসানোর পদ্ধতি।
let addedChild = document.getElementById('added-child-element');

const addDiv = document.createElement('div');

addDiv.innerHTML = `<p>Hello</p>
                <button>Click Me</button>`

addedChild.appendChild(addDiv);
