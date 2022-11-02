document.getElementById("wordSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const value = document.getElementById("wordInput").value;
    if (value === "") return;
    console.log(value);
    const url =
      "https://api.dictionaryapi.dev/api/v2/entries/en/" + value;
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        let results = "";
        results +=
          "<div class='text-Container'><div class='definition-Container'><h2>" +
          "<div class='container-Header'>Definitions</div></h2><h2>" +
          value + ": "; 
          for(let i = 0; i < json[0].meanings[0].definitions.length; i++){
            results += i + 1 + ". " + json[0].meanings[0].definitions[i].definition +
              "<br>";
          }
          + "</h2>";
        results += "</div>";
        results +=
          "<div class='synonym-Container'><h2>" +
          "<div class='container-Header'>Synonyms</div></h2><h2>" +
          +value +
          ": ";
          for (let i = 0; i < json[0].meanings[0].synonyms.length; i++) {
            results += (i+1)+ ". " + json[0].meanings[0].synonyms[i] + "<br>";
          }
          +"</h2>";
        results += "</div></div>";
        document.getElementById("wordResults").innerHTML = results;
      });
    // const url2 =
    //   "https://api.openweathermap.org/data/2.5/forecast?q=" +
    //   value +
    //   ", US&units=imperial" +
    //   "&APPID=1e14bfcdfabfe59e8c2ecbdbc98f1160";
    // fetch(url2)
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (json) {
    //     let forecast = "<div class='threeHRContainer'>";
    //     forecast += "<div class = 'dateSeparator'>"
    //     for (let i = 1; i < json.list.length; i++) {
    //           if(i === 0 || i % 8 === 1){
    //             forecast +=
    //               "<div class = 'dayDisplay'>" +
    //               moment(json.list[i].dt_txt).format("MMMM Do YYYY") +
    //               "</div>";
    //           }
    //           forecast +=
    //             `<div class='threeHR'> <h2>` +
    //             moment(json.list[i].dt_txt).format("MMMM Do, h a") +
    //             "</h2>";
    //           forecast += "<div class='temps'><p style='margin: 0 0 0 0';>Temp: " + json.list[i].main.temp + "</p>";
    //           forecast += "<p style='margin: 0 0 0 0';>Temp Min: " + json.list[i].main.temp_min + "</p>";
    //           forecast += "<p style='margin: 0 0 0 0';>Temp Max: " + json.list[i].main.temp_max + "</p></div>";
    //           forecast += '<img src="https://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>';
    //             if(i % 8 == 0){
    //                 forecast += "</div></div><div class = 'dateSeparator'>";
    //              }else{
    //                 forecast += "</div>";
    //              }
                
           
    //         console.log(forecast)
    //     }
    //     forecast += "</div>";
    //     document.getElementById("forecastResults").innerHTML = forecast;
    //     console.log(json.list);
      // });

  });
