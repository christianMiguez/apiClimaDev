const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const colors = require('colors');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener clima',
        demand: true
    }
}).argv;

let getInfo = async (direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${coors.dir} es de ${temp} farenheits`
    } catch (e) {
        return `No se pudo encontrar el clima de ${direccion.red}`
    }
}
getInfo(argv.direccion)
.then(mensaje => console.log(mensaje))
.catch(e => console.log(e))