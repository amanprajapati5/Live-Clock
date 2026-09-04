 let cities = [
    {
        name: "New Delhi, India",
        timeZone: "Asia/Kolkata"
    },
    {
        name: "London, United Kingdom",
        timeZone: "Europe/London"
    },
    {
        name: "New York, USA",
        timeZone: "America/New_York"
    },
    {
        name: "Los Angeles, USA",
        timeZone: "America/Los_Angeles"
    },
    {
        name: "Dubai, UAE",
        timeZone: "Asia/Dubai"
    },
    {
        name: "Tokyo, Japan",
        timeZone: "Asia/Tokyo"
    },
    {
        name: "Singapore",
        timeZone: "Asia/Singapore"
    },
    {
        name: "Sydney, Australia",
        timeZone: "Australia/Sydney"
    },
    {
        name: "Paris, France",
        timeZone: "Europe/Paris"
    },
    {
        name: "Moscow, Russia",
        timeZone: "Europe/Moscow"
    }
];


function showCurrentTime() {

    let now = new Date();

    let time = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    let date = now.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    document.getElementById("time").innerText = time;
    document.getElementById("date").innerText = date;
}


function showCities(list) {

    let countryList = document.getElementById("countryList");

    countryList.innerHTML = "";

    list.forEach(function(city) {

        let time = new Date().toLocaleTimeString("en-US", {
            timeZone: city.timeZone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

        countryList.innerHTML += `
            <div class="country-card">
                <div class="country-name">
                    ${city.name}
                </div>

                <div class="country-time">
                    ${time}
                </div>
            </div>
        `;
    });
}


document.getElementById("browseBtn").addEventListener("click", function() {

    let section = document.getElementById("countrySection");

    section.style.display = "block";

    showCities(cities);

});


document.getElementById("search").addEventListener("input", function() {

    let searchText = this.value.toLowerCase();

    let filteredCities = cities.filter(function(city) {

        return city.name.toLowerCase().includes(searchText);

    });

    showCities(filteredCities);

});


showCurrentTime();

setInterval(function() {

    showCurrentTime();

    if (document.getElementById("countrySection").style.display === "block") {
        showCities(cities);
    }

}, 1000);