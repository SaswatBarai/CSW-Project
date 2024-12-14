// script.js

// Demo object containing weather data for 30 districts in Odisha
const weatherData = {
    "Angul": { temp: 30, humidity: 60, pressure: 1012, wind: "15 km/h" },
    "Balangir": { temp: 32, humidity: 55, pressure: 1011, wind: "12 km/h" },
    "Balasore": { temp: 29, humidity: 70, pressure: 1014, wind: "10 km/h" },
    "Bargarh": { temp: 33, humidity: 50, pressure: 1010, wind: "18 km/h" },
    "Bhadrak": { temp: 28, humidity: 75, pressure: 1015, wind: "14 km/h" },
    "Boudh": { temp: 31, humidity: 65, pressure: 1013, wind: "11 km/h" },
    "Cuttack": { temp: 30, humidity: 60, pressure: 1012, wind: "15 km/h" },
    "Deogarh": { temp: 33, humidity: 52, pressure: 1011, wind: "13 km/h" },
    "Dhenkanal": { temp: 30, humidity: 58, pressure: 1013, wind: "16 km/h" },
    "Gajapati": { temp: 27, humidity: 78, pressure: 1016, wind: "9 km/h" },
    "Ganjam": { temp: 28, humidity: 80, pressure: 1015, wind: "12 km/h" },
    "Jagatsinghpur": { temp: 29, humidity: 70, pressure: 1014, wind: "11 km/h" },
    "Jajpur": { temp: 30, humidity: 65, pressure: 1013, wind: "10 km/h" },
    "Jharsuguda": { temp: 34, humidity: 45, pressure: 1009, wind: "19 km/h" },
    "Kalahandi": { temp: 35, humidity: 40, pressure: 1008, wind: "20 km/h" },
    "Kandhamal": { temp: 26, humidity: 85, pressure: 1017, wind: "8 km/h" },
    "Kendrapara": { temp: 28, humidity: 75, pressure: 1015, wind: "11 km/h" },
    "Kendujhar": { temp: 29, humidity: 72, pressure: 1014, wind: "12 km/h" },
    "Khordha": { temp: 31, humidity: 60, pressure: 1012, wind: "13 km/h" },
    "Koraput": { temp: 25, humidity: 88, pressure: 1018, wind: "7 km/h" },
    "Malkangiri": { temp: 27, humidity: 80, pressure: 1016, wind: "9 km/h" },
    "Mayurbhanj": { temp: 28, humidity: 75, pressure: 1015, wind: "12 km/h" },
    "Nabarangpur": { temp: 27, humidity: 78, pressure: 1016, wind: "10 km/h" },
    "Nayagarh": { temp: 30, humidity: 62, pressure: 1012, wind: "14 km/h" },
    "Nuapada": { temp: 32, humidity: 55, pressure: 1011, wind: "13 km/h" },
    "Puri": { temp: 29, humidity: 72, pressure: 1014, wind: "10 km/h" },
    "Rayagada": { temp: 26, humidity: 83, pressure: 1017, wind: "8 km/h" },
    "Sambalpur": { temp: 34, humidity: 48, pressure: 1009, wind: "18 km/h" },
    "Subarnapur": { temp: 33, humidity: 50, pressure: 1010, wind: "16 km/h" },
    "Sundargarh": { temp: 31, humidity: 58, pressure: 1012, wind: "15 km/h" }
};

// Function to search and display weather data
$(document).ready(function () {
    $('#searchBtn').on('click', function () {
        const city = $('#cityName').val().trim();
        const weatherInfo = weatherData[city];

        if (weatherInfo) {
            $('#secondDiv').html(`
                <div id="city">${city}</div>
                <div id="temp">${weatherInfo.temp}°C</div>
                <div class="otherInfo">
                    <div class="Wind">
                        <p>Humidity</p>
                        <p>${weatherInfo.humidity}%</p>
                    </div>
                    <div class="Wind">
                        <p>Pressure</p>
                        <p>${weatherInfo.pressure} hPa</p>
                    </div>
                    <div class="Wind">
                        <p>Wind</p>
                        <p>${weatherInfo.wind}</p>
                    </div>
                </div>
            `);
        } else {
            $('#secondDiv').html(`<p style="color: red;">City not found. Please try again.</p>`);
        }
    });
});