const axios = require('axios');


const getClima = async(lat, lng) => {
    
    let resp = await axios.get(`https://samples.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lat}&appid=7adc91bc3323d9699e1234afd1261b76`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}