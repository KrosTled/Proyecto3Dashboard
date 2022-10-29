import { getGraphic } from "./graph.js";

function llamarGrafico(e){
    let mainID = e.srcElement.id.toUpperCase()
    getGraphic(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${mainID}&apikey=07FFNGO9PL6ZV5QO`)
}



export {llamarGrafico}