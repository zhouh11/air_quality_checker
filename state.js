const apiKey = "17f9fbda-4033-435c-8dfb-54634b5d112f";
const urlParams = new URLSearchParams(window.location.search);
const state = urlParams.get('state');
document.getElementById('State').innerText = state;



document.getElementById("city_btn").addEventListener("click", function() {
    const apiUrl = `http://api.airvisual.com/v2/cities?state=${state}&country=USA&key=${apiKey}`;
  
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

document.addEventListener('DOMContentLoaded', function () {
document.getElementById("search_btn").addEventListener("click", function() {
    const city = document.getElementById("city").value;


    if (state && city) {
        location.href = `./info.html?city=${city}&state=${state}`;

    } else {
        alert("Please enter both city and state.");
    }
});
});


