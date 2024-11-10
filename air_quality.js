const apiKey = "17f9fbda-4033-435c-8dfb-54634b5d112f";
const apiUrl = `http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=USA&key=${apiKey}`;
document.addEventListener('DOMContentLoaded', function () {
document.getElementById("search_btn").addEventListener("click", function() {

   
    const state = document.getElementById("state").value;
    const city = document.getElementById("city").value;


    if (state && city) {
        location.href = `./info.html?city=${city}&state=${state}`;
        
    } else {
        alert("Please enter both city and state.");
    }
});
});

