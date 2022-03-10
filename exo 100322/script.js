import { initializeApp} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import {getAuth,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
import {cssinerRender} from "./exo/index.js"

// const name = document.querySelector("#name")
// const fname = document.querySelector("#fname")
const email = document.querySelector("#email-input");
const password = document.querySelector("#password-input");
const signIn = document.querySelector("#sign-in-btn");

// const wrongPass = document.querySelector("#wrong-password");
// const passDoesNotMatch = document.querySelector("#match-password");


const firebaseConfig= {
    apiKey: "AIzaSyBeh3SfKd42tq8_wKqr7v0Q4fxoCQcDZs0",
    authDomain: "cours100322.firebaseapp.com",
    projectId: "cours100322",
    storageBucket: "cours100322.appspot.com",
    messagingSenderId: "225258608347",
    appId: "1:225258608347:web:50042d0ebbb05cac271efe"
    };

const app = initializeApp(firebaseConfig);



  function login(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.uid);
        if (user) {
            document.location.href = "../exo/exo.html"
          } 
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }


  export function sign() {
    signIn.addEventListener("click", () => {
      login(email.value, password.value);
    });
  }
export function signInButton(){
  signIn.addEventListener('click', () => {
    if(validateEmail(email) && validatePassword(password)){
       login(email,password)
    } else {
        // errorMsgEmail.textContent = "error";
        // errorMsgPassword.textContent = "error";
    }
})
}

function validateEmail(email) {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
    if (email.value.match(validRegex)) {
      return true;
    } else {
    //   element.textContent = "Veuillez entrer une adresse e-mail valide !";
    //   element.style.display = "inline";
    //   emailCreate.value = "";
    //   emailCreate.focus();
      return false;
    }
  }


function validatePassword(password) {
    if (password.value.length > 6) {
        return true
    } else {
        // element.textContent = "Veuillez entrer une adresse mot de passe valide !";
        return false;
    }
}


////////////////////////// storage////////////////////////////////////


export function storage(htmlElement){
    document.addEventListener("keydown", function () {
        localStorage.setItem('page', htmlElement.innerHTML)
    })
}

export function getStorage(){
           console.log('salut');
        if (!localStorage.getItem('page')) return
        document.querySelector('.duplique').innerHTML= localStorage.getItem('page')
   console.log('samut', localStorage.getItem('page'));
}


export function setStyle(htmlElement, cssElement){
  document.addEventListener("keydown", function () {
    console.log(htmlElement);
      localStorage.setItem('stylehtml', htmlElement.value)
      localStorage.setItem('stylecss', cssElement.value)
  })
}

export function getStyle(){
           
  if (!localStorage.getItem('stylecss')) return
  document.querySelector('#texthtml').innerHTML+= localStorage.getItem('stylehtml')

  cssinerRender(localStorage.getItem('stylecss'))
console.log('yo', localStorage.getItem('stylehtml'));
}
