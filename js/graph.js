

let nombre = '';
const weely = document.getElementById('myChart');
let weekArray1 = [];
let weekArray2 = [];
let weekArray3 = [];
let weekFechaArray = [];

function get(url){
  return Promise.resolve(
    fetch(url)
    .then((response) => response.json())
  );
}
function verifyDelete(){
  myChart.destroy();
}
let myChart;

function getGraphic(mainUrl,dateStart,dateEnd){
  get(mainUrl)
  .then((data) => {
      // console.log(data["Meta Data"]);
      // console.log(data["Weekly Time Series"]);
      nombre = data["Meta Data"]["2. Symbol"];
      weekFechaArray = Object.keys(data["Weekly Time Series"]).sort((a, b) => a > b);
      weekFechaArray.forEach((element) => {
          if(element > dateStart && dateEnd > element){
              console.log(element)
          }
      })
      
      weekArray1 = weekFechaArray.map((element)=>data["Weekly Time Series"][element]["1. open"]);
      weekArray2 = weekFechaArray.map((element)=>data["Weekly Time Series"][element]["2. high"]);
      weekArray3 = weekFechaArray.map((element)=>data["Weekly Time Series"][element]["3. low"]);
      
      

      async function graficoConFechas(titulo,cantidad,tipo,encabezado,id) {  
          var ctx = document.getElementById(id).getContext('2d');
          console.log(Boolean(myChart))
          if(myChart){
            await verifyDelete()
          }
          myChart = new Chart(ctx, {
              type: tipo,
              data: {
                  labels: encabezado,
                  datasets: [{
                      label: titulo,
                      data: cantidad,
                      borderWidth: 1,
                      fill: ture,
                      borderColor: 'rgb(75, 192, 192)',
                  }],
              },               
          });
      }
      graficoConFechas(nombre,weekArray2,'line',weekFechaArray,'myChart')
  });
}

export {getGraphic}