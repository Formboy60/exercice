

function createHTML (selector, text){
    const element = document.createElement(selector);
    element.textContent = text
    return element;
}
 

 

const input = document.querySelector('input')
const btn = document.querySelector('button')
const list = document.querySelector('ul')

list.innerHTML = localStorage.getItem('etat')

btn.addEventListener('click', function (e){
   // 
  if(input.value =='') return 

   list.appendChild(createHTML('li', input.value ))
   localStorage.setItem('etat', document.querySelector('ul').innerHTML)
   input.value =''
 
})

list.addEventListener('click', function(ev) {
          ev.target.classList.toggle('checked');
    })

list.addEventListener('dblclick', function(ev) {
        ev.target.remove();
        localStorage.setItem('etat', document.querySelector('ul').innerHTML)
   })