let nombre = '';
let weekArray1 = [];
let weekArray2 = [];
let weekArray3 = [];
let weekFechaArray = [];

const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");
const tBody = document.querySelector("#tBody");

function get(url){
  return Promise.resolve(
    fetch(url)
    .then((response) => response.json())
  );
};
function verifyDelete(){
  myChart.destroy();
};
let myChart;

function getGraphic(mainUrl){
  let fechasArray = [];
  get(mainUrl)
  .then((data) => {
      nombre = data["Meta Data"]["2. Symbol"];
      weekFechaArray = Object.keys(data["Weekly Time Series"]).sort((a, b) => a > b);     
      weekArray1 = weekFechaArray.map((element)=>data["Weekly Time Series"][element]["1. open"]);
      weekArray2 = weekFechaArray.map((element)=>data["Weekly Time Series"][element]["2. high"]);
      weekArray3 = weekFechaArray.map((element)=>data["Weekly Time Series"][element]["3. low"]);
      
      

      weekFechaArray.forEach((e)=> {
        if(e > startDate.value && endDate > e){
            fechasArray.push(e);
        };
      });
      async function graficoConFechas(titulo,cantidad,tipo,encabezado,id) {  
          var ctx = document.getElementById(id).getContext('2d');
          if(myChart){
            await verifyDelete();
          };
          myChart = new Chart(ctx, {
              type: tipo,
              data: {
                  labels: encabezado,
                  datasets: [{
                      label: titulo,
                      data: cantidad,
                      borderWidth: 1,
                      fill: true,
                      borderColor: 'rgb(75, 192, 192)',
                  }],
              },               
          });
      };
      tBody.innerHTML = ''
      for(let i=0 ; fechasArray.length >i ; i++){
        tBody.innerHTML += `<tr><td>${fechasArray[i]}</td><td>${weekArray1[i]}</td><td>${weekArray2[i]}</td><td>${weekArray3[i]}</td></tr>`
      };

      graficoConFechas(nombre,weekArray2,'line',fechasArray,'myChart');
  });
}

export {getGraphic , get, nombre, weekFechaArray}