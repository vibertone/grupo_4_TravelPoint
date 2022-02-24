window.addEventListener('load', function () {

    let codAeropuertoOrigen = document.getElementById('codAeropuertoOrigen');
    var aeropuertoOrigen = document.getElementById("aeropuertoOrigen");

    aeropuertoOrigen.addEventListener('blur', function () {
        var getAirportSelected = aeropuertoOrigen.options[aeropuertoOrigen.selectedIndex].id;
        codAeropuertoOrigen.value = getAirportSelected;
    });

});