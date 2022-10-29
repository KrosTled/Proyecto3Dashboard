import {llamarGrafico} from "./Buttons.js";
(() => {
    const apiButton = document.querySelectorAll(".apiButton")
    for (let i = 0; i < apiButton.length; i++) {
        apiButton[i].addEventListener("click", (e)=> {
            e.preventDefault();
            llamarGrafico(e);
        });
    }    
})();
  
  