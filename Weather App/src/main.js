searchBtn = document.getElementById('search-btn');
searchBox = document.getElementById('search');
display = document.getElementById('display');
function displayData(data){
    display.innerHTML = '';
    console.log(data.main.temp);
    console.log(data);
    const temp = document.createElement('h4');
    var value = data.main.temp;
    value-=273.15;
    value = Math.round(value);
    temp.textContent = `The temperature of ${data.name} is ${value}`;
    display.appendChild(temp);
}

searchBtn.addEventListener('click', function() {
    var location = searchBox.value;
    searchBox.value = '';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d08a6df17f19d2cafffa5232cf7fae4b`)
        .then(function(response) {
            console.log("Worked");
            return response.json();
        })
        .then(function(data) {
            displayData(data);
        })
        .catch(function(error) {
            console.log("Didn't work");
            console.log(error);
        });
});