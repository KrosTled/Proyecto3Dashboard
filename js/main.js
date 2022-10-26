
(() => {
    function get(url){
      return Promise.resolve(
        fetch(url)
        .then((response) => response.json())
      );
    }

    function esMayor(){
        let newWeekFechaArray = []
        // console.log(weekFechaArray)
        let newArr = weekFechaArray.forEach((e)=>{
            if(e > startDate.value && endDate.value > e){
                newWeekFechaArray.push(e)
            }
        })
        // console.log(newWeekFechaArray)
        return newWeekFechaArray
    }

    //constantes de fechas
    const startDate = document.getElementById("startDate");
    const endDate = document.getElementById("endDate");
    const newWeekFechaArray = []
    let arrayFechas = [];

    const initButton = document.querySelector("#start")    
    initButton.addEventListener("click", () => { //Se ocupa para llamar el evento click en el boton de inicio
        console.log(esMayor())
        graficar(esMayor())
    })

    function graficar(arr){ // trata de volver a realizar el grafico
        arrayFechas = [...arr]
        // console.log(arrayFechas)
        weekArray1 = arrayFechas.map((element)=>data["Weekly Time Series"][element]["1. open"]);
        weekArray2 = arrayFechas.map((element)=>data["Weekly Time Series"][element]["2. high"]);
        weekArray3 = arrayFechas.map((element)=>data["Weekly Time Series"][element]["3. low"]);
        const weekCheck = new Chart(weely, {
            type: 'line',
            data: {
                labels: arrayFechas,
                datasets: [{
                    label: nombre,
                    data: weekArray2,
                    borderWidth: 1,
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                }],
              },
            
        });
        
    }


    let nombre = '';
    const weely = document.getElementById('myChart');
    let weekArray1 = [];
    let weekArray2 = [];
    let weekArray3 = [];
    let weekFechaArray = [];
    
    get('https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=AAPL&apikey=07FFNGO9PL6ZV5QO')
    .then((data) => {
        console.log(data["Meta Data"]);
        // console.log(data["Weekly Time Series"]);
        nombre = data["Meta Data"]["2. Symbol"];
        weekFechaArray = Object.keys(data["Weekly Time Series"]).sort((a, b) => a > b);
        weekArray1 = weekFechaArray.map((element)=>data["Weekly Time Series"][element]["1. open"]);
        weekArray2 = weekFechaArray.map((element)=>data["Weekly Time Series"][element]["2. high"]);
        weekArray3 = weekFechaArray.map((element)=>data["Weekly Time Series"][element]["3. low"]);
        // console.log(data["Weekly Time Series"])
        // console.log(weekFechaArray)
        // console.log(weekArray1)
        // console.log(weekArray2)
        // console.log(weekArray3)
    //   let bitcoins = data.serie;
        
    //   bitArray = bitcoins.map((serie) => serie.valor);
      
  
      const weekCheck = new Chart(weely, {
          type: 'line',
          data: {
              labels: weekFechaArray,
              datasets: [{
                  label: nombre,
                  data: weekArray2,
                  borderWidth: 1,
                  fill: false,
                  borderColor: 'rgb(75, 192, 192)',
              }],
            },
          
      });
    });
  })();
  
  