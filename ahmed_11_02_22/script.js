
var i = 0;
var original = document.getElementById('art');

function duplicate() {
    var clone = original.cloneNode(true);
    clone.id = "art" + ++i;
    original.parentNode.appendChild(clone);
}

// function duplicate() {
// const para = document.createElement("section");
// para.innerText = "This is a paragraph";
// document.body.appendChild(para);
// para.setAttribute('id', 'art')
// }


const saveContent = (title, obj) => {
    localStorage.setItem(title, obj)
}

const localContent = (title) => {    
    return localStorage.getItem(title)
}

let h1 = document.querySelector('h1')



h1.innerHTML = 'bonjour'


h1.addEventListener("click", function (){
    h1.innerHTML = 'salut'
    saveContent('etat','salut')
})

if (!localStorage.getItem('etat')){
}
else{
h1.innerHTML = localContent('etat')}