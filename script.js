const input = document.querySelector("input");
const button = document.querySelector("#button");
const locationEl = document.querySelector(".location");
const temperatureEl = document.querySelector(".temperature");
const conditionEl = document.querySelector(".condition");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const iconEl = document.querySelector(".icon img");

button.addEventListener("click", () => {
    const city = input.value.trim();
    input.value = "";
    const api = `https://api.weatherapi.com/v1/current.json?key=8288d8e7c3074919afc43346262301&q=${city}&aqi=no`;
    fetch(api)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            var temp = data.current.temp_c;
            var name = data.location.name;
            var country = data.location.country;
            var status = data.current.condition.text;
            var icon = data.current.condition.icon;
            var localtime = data.location.localtime;
            var [date, time] = localtime.split(" ");

            dom(temp,name,country,status,date,time,icon);
        })
        .catch((error) => {
            console.log( error);
        });       
});


let dom= (temp, name, country, status, date, time, icon) => {
        // Add animation class to trigger transitions
        temperatureEl.classList.add('update-data');
        locationEl.parentElement.classList.add('update-data');
        conditionEl.parentElement.classList.add('update-data');
        iconEl.parentElement.parentElement.classList.add('update-data');
        
        // Update the content
        locationEl.innerText = `${name}, ${country}`;
        temperatureEl.innerText = `${temp}°C`;
        conditionEl.innerText = status;
        dateEl.innerText = date;
        timeEl.innerText = time;
        iconEl.src = `https:${icon}`;
        
        // Remove animation class after animation completes
        setTimeout(() => {
            temperatureEl.classList.remove('update-data');
            locationEl.parentElement.classList.remove('update-data');
            conditionEl.parentElement.classList.remove('update-data');
            iconEl.parentElement.parentElement.classList.remove('update-data');
        }, 500);
    };
