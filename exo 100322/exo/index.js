let button = document.querySelector(".btn")

button.addEventListener('click', () => {
      for (var i=0; i<1; i++) {
        var clone=document.querySelector("div.duplique").cloneNode(true);
        document.getElementById("conteneur").appendChild(clone);
      }  
     }
)

    document.querySelector('.btn1').addEventListener('click',()=>{
    document.querySelector('.code').classList.toggle('display')
    console.log('click');
})

const textarea = document.querySelector('#texthtml')
const textareacss = document.querySelector('#textcss')

textarea.addEventListener('keydown', () =>{
    document.querySelector('.duplique').innerHTML= textarea.value
    console.log('textarea.value')
})



textareacss.addEventListener('keydown', () =>{
  // document.querySelector('.duplique').innerHTML= textareacss.value
  cssinerRender(textareacss.value)
})

export function cssinerRender(cssinerUsed){
    let cssiner = document.createElement('style');
    cssiner.type = 'text/css';
    cssiner.textContent = cssinerUsed 
  
     document.getElementsByTagName("head")[0].appendChild(cssiner);
    }