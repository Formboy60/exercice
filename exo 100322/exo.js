import { storage, getStorage, setStyle, getStyle } from "/script.js";

let getBody = document.querySelector('.duplique')
let getHTML = document.querySelector('#texthtml')
let getCSS = document.querySelector('#textcss')

storage(getBody)
setStyle(getHTML, getCSS)


window.onload = ()=>{
    getStorage()
    getStyle()
}



