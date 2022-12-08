import axios from 'axios'

// method one
axios.get('https://api.openweathermap.org/data/2.5/weather?lat=28.7&lon=77.1&appid=ea9d54445b2cdb5218c1ef9c579d69ad')
    .then(result => {
        let weather_data = result.data
        console.log(weather_data)
        })
    .catch(error => {
        console.log(error)
    });


