window.addEventListener('load', function () {

    let codAeropuertoOrigen = document.getElementById('codAeropuertoOrigen');
    let aeropuertoOrigen = document.getElementById("aeropuertoOrigen");

    aeropuertoOrigen.addEventListener('blur', function () {
        let getAirportSelected = aeropuertoOrigen.options[aeropuertoOrigen.selectedIndex].id;
        codAeropuertoOrigen.value = getAirportSelected;
    });
});