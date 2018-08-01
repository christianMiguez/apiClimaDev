const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion)
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}`)

    if(resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`)
    }
    
        const dir = JSON.stringify(resp.data.results[0].address_components[0].long_name, undefined, 2);
        const lng = resp.data.results[0].geometry.location.lng;
        const lat = resp.data.results[0].geometry.location.lat;
        console.log(`has buscado,`, direccion.green);
        console.log(`latitud,`, lat);
        console.log(`longitud,`, lng);
        
        
  

    return {
        dir,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}