import {callButton, llamarGrafico} from "./Buttons.js"
(() => {
    const initButton = document.querySelector("#start")    
    initButton.addEventListener("click", () => { //Se ocupa para llamar el evento click en el boton de inicio
        callButton()
    })
    const apiButton = document.querySelectorAll(".apiButton")
    for (let i = 0; i < apiButton.length; i++) {
        apiButton[i].addEventListener("click", (e)=> {
            e.preventDefault()
            llamarGrafico(e)
        });
    }    
})();
  
  