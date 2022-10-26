// import request from "../node_modules/request/request"

// import { get } from "request"

import fetch from "node-fetch";
// const fetch = require("node-fetch")

const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=AAPL&apikey=07FFNGO9PL6ZV5QO'

function hola(Val){
    console.log(Val)
    return Val
}

const getData = async () =>{
    const response = await fetch(url)
    const datos = await response.json()
    console.log(datos)
}

getData()

export {getData}
