
// Elements that need to be manipulated
const clouds = document.getElementById('clouds');
const liftedI = document.getElementById('liftedI');
const temp = document.getElementById('temp');
const humidity = document.getElementById('humidity');
const searchInput = document.querySelector('.search-bar');
const searchButton = document.querySelector('.search button')

// Check for gps
if (window.navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
} 

// Get weather from gps
function showPosition(position) {
    const APIURL = `http://www.7timer.info/bin/api.pl?lon=${position.coords.longitude}&lat=${position.coords.latitude}&product=astro&output=json`;
    getWeather(APIURL);
}

// Get weather from api
async function getWeather(url) {
    fetch(url).then(res => {
        return res.json();
   }).then(function(res) {
    makeReadable(res);
   });
}

// Transform api data into website data
function makeReadable(response) {
    if(response.dataseries[1].cloudcover == 1) {
        clouds.innerHTML = `Cloud Cover: 0%-6%`
        clouds.style.color = 'green'
    } else if(response.dataseries[1].cloudcover == 2) {
        clouds.innerHTML = `Cloud Cover: 6%-19%`
        clouds.style.color = 'green'
    } else if(response.dataseries[1].cloudcover == 3) {
        clouds.innerHTML = `Cloud Cover: 19%-31%`
        clouds.style.color = 'green'
    } else if(response.dataseries[1].cloudcover == 4) {
        clouds.innerHTML = `Cloud Cover: 31%-44%`
        clouds.style.color = 'yellow'
    } else if(response.dataseries[1].cloudcover == 5) {
        clouds.innerHTML = `Cloud Cover: 44%-56%`
        clouds.style.color = 'yellow'
    } else if(response.dataseries[1].cloudcover == 6) {
        clouds.innerHTML = `Cloud Cover: 56%-69%`
        clouds.style.color = 'red'
    } else if(response.dataseries[1].cloudcover == 7) {
        clouds.innerHTML = `Cloud Cover: 69%-81%`
        clouds.style.color = 'red'
    } else if(response.dataseries[1].cloudcover == 8) {
        clouds.innerHTML = `Cloud Cover: 81%-94%`
        clouds.style.color = 'red'
    } else if(response.dataseries[1].cloudcover == 9) {
        clouds.innerHTML = `Cloud Cover: 94%-100%`
        clouds.style.color = 'red'
    }

    if(response.dataseries[1].lifted_index == -10) {
        liftedI.innerHTML = `Lifted index: Below -7`
        liftedI.style.color = 'red'
    } else if(response.dataseries[1].lifted_index == -6) {
        liftedI.innerHTML = `Lifted index: -7 to -5`
        liftedI.style.color = 'red'
    } else if(response.dataseries[1].lifted_index == -4) {
        liftedI.innerHTML = `Lifted index: -5 to -3`
        liftedI.style.color = 'yellow'
    } else if(response.dataseries[1].lifted_index == -1) {
        liftedI.innerHTML = `Lifted index: -3 to 0`
        liftedI.style.color = 'yellow'
    } else if(response.dataseries[1].lifted_index == 2) {
        liftedI.innerHTML = `Lifted index: 0 to 4`
        liftedI.style.color = 'green'
    } else if(response.dataseries[1].lifted_index == 6) {
        liftedI.innerHTML = `Lifted index: 4 to 8`
        liftedI.style.color = 'green'
    } else if(response.dataseries[1].lifted_index == 10) {
        liftedI.innerHTML = `Lifted index: 8 to 11`
        liftedI.style.color = 'green'
    } else if(response.dataseries[1].lifted_index == 15) {
        liftedI.innerHTML = `Lifted index: Over 11`
        liftedI.style.color = 'green'
    }

    temp.innerHTML = `Relative temperature: ${response.dataseries[1].temp2m}C`

    if(response.dataseries[1].rh2m == -4) {
        humidity.innerHTML = `Relative Humidity: 0%-5%`
        humidity.style.color = 'green'
    } else if(response.dataseries[1].rh2m == -3) {
        humidity.innerHTML = `Relative Humidity: 5%-10%`
        humidity.style.color = 'green'
    } else if(response.dataseries[1].rh2m == -2) {
        humidity.innerHTML = `Relative Humidity: 10%-15%`
        humidity.style.color = 'green'
    } else if(response.dataseries[1].rh2m == -1) {
        humidity.innerHTML = `Relative Humidity: 15%-20%`
        humidity.style.color = 'green'
    } else if(response.dataseries[1].rh2m == 0) {
        humidity.innerHTML = `Relative Humidity: 20%-25%`
        humidity.style.color = 'green'
    } else if(response.dataseries[1].rh2m == 1) {
        humidity.innerHTML = `Relative Humidity: 25%-30%`
        humidity.style.color = 'green'
    } else if(response.dataseries[1].rh2m == 2) {
        humidity.innerHTML = `Relative Humidity: 30%-35%`
        humidity.style.color = 'green'
    } else if(response.dataseries[1].rh2m == 3) {
        humidity.innerHTML = `Relative Humidity: 35%-40%`
        humidity.style.color = 'green'
    } else if(response.dataseries[1].rh2m == 4) {
        humidity.innerHTML = `Relative Humidity: 40%-45%`
        humidity.style.color = 'green'
    } else if(response.dataseries[1].rh2m == 5) {
        humidity.innerHTML = `Relative Humidity: 45%-50%`
        humidity.style.color = 'green'
    } else if(response.dataseries[1].rh2m == 6) {
        humidity.innerHTML = `Relative Humidity: 50%-55%`
        humidity.style.color = 'green'
    } else if(response.dataseries[1].rh2m == 7) {
        humidity.innerHTML = `Relative Humidity: 55%-60%`
        humidity.style.color = 'green'
    } else if(response.dataseries[1].rh2m == 8) {
        humidity.innerHTML = `Relative Humidity: 60%-65%`
        humidity.style.color = 'green'
    } else if(response.dataseries[1].rh2m == 9) {
        humidity.innerHTML = `Relative Humidity: 65%-70%`
        humidity.style.color = 'green'
    } else if(response.dataseries[1].rh2m == 10) {
        humidity.innerHTML = `Relative Humidity: 70%-75%`
        humidity.style.color = 'green'
    } else if(response.dataseries[1].rh2m == 11) {
        humidity.innerHTML = `Relative Humidity: 75%-80%`
        humidity.style.color = 'green'
    } else if(response.dataseries[1].rh2m == 12) {
        humidity.innerHTML = `Relative Humidity: 80%-85%`
        humidity.style.color = 'yellow'
    } else if(response.dataseries[1].rh2m == 13) {
        humidity.innerHTML = `Relative Humidity: 85%-90%`
        humidity.style.color = 'yellow'
    } else if(response.dataseries[1].rh2m == 14) {
        humidity.innerHTML = `Relative Humidity: 90%-95%`
        humidity.style.color = 'yellow'
    } else if(response.dataseries[1].rh2m == 15) {
        humidity.innerHTML = `Relative Humidity: 95%-99%`
        humidity.style.color = 'yellow'
    } else if(response.dataseries[1].rh2m == 16) {
        humidity.innerHTML = `Relative Humidity: 100%`
        humidity.style.color = 'yellow'
    }
}

// Get coordinates from user
searchButton.addEventListener('click', function() {
    clouds.innerHTML = `Cloud Cover: Loading`
    liftedI.innerHTML = `Lifted index: Loading`
    temp.innerHTML = `Relative temperature: Loading`
    humidity.innerHTML = `Relative Humidity: Loading`
    const coords = searchInput.value.split(",");
    const APIURL = `http://www.7timer.info/bin/api.pl?lon=${coords[0]}&lat=${coords[1]}&product=astro&output=json`;
    getWeather(APIURL);
})