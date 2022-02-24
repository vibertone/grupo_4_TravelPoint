window.addEventListener('load', function () {

    let codAeropuertoDestino = document.getElementById('codAeropuertoDestino');
    var aeropuertoDestino = document.getElementById("aeropuertoDestino");

    aeropuertoDestino.addEventListener('blur', function () {
        var getAirportSelected = aeropuertoDestino.options[aeropuertoDestino.selectedIndex].id;
        codAeropuertoDestino.value = getAirportSelected;
    });

});