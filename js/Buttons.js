import { getGraphic } from "./graph.js";

function llamarGrafico(e){
    let mainID = e.srcElement.id.toUpperCase()
    // console.log(mainID)
    getGraphic(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${mainID}&apikey=07FFNGO9PL6ZV5QO`)
}

const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");

function callButton(){   
    console.log( "fecha de inicio: "+startDate.value+" fecha de termino: "+endDate.value)
}


export {callButton, llamarGrafico}