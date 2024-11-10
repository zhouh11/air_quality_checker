const apiKey = "17f9fbda-4033-435c-8dfb-54634b5d112f";
const urlParams = new URLSearchParams(window.location.search);
const state = urlParams.get('state');
document.getElementById('State').innerText = state;



document.getElementById("city_btn").addEventListener("click", function() {
    const apiUrl = `http://api.airvisual.com/v2/cities?state=${state}&country=USA&key=${apiKey}`;
     // Fetch data from the API
     fetch(apiUrl)
     .then(response => response.json())
     .then(data => {
        const cities = data.data;
        const outputCities = document.getElementById('cities');
       
        let citiesHTML = cities.map(cityObj => `<li>${cityObj.city}</li>`).join('');
    
        outputCities.innerHTML = `<ul>${citiesHTML}</ul>`;


    })
    .catch(error => console.error('Error fetching data:', error));

});


// document.getElementById("search_btn").addEventListener("click", function() {
//     const city = document.getElementById("city").value;

//     if (state && city) {
//         const apiUrl = `http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=USA&key=${apiKey}`;
        
//         // Fetch data from the API
//         fetch(apiUrl)
//             .then(response => response.json())
//             .then(data => {
//                 // Handle the API response
//                 const city_ = data.data.city;
//                 const state_ = data.data.state;
//                 const airQuality = data.data.current.pollution.aqius;
//                 const mainPollutant  = data.data.current.pollution.mainus;

//                 const outputCity = document.getElementById('_City');
//                 outputCity.innerHTML = city_;

//                 const outputState = document.getElementById('_State');
//                 outputState.innerHTML = state_;

//                 const outputAirQuality = document.getElementById('airQuality');
//                 outputAirQuality.innerHTML = airQuality;

//                 const outputMainPollutant = document.getElementById('mainPollutant');
//                 outputMainPollutant.innerHTML = mainPollutant;
//             })
//             .catch(error => console.error('Error fetching data:', error));
//     } else {
//         alert("Please enter both city and state.");
//     }
// });

