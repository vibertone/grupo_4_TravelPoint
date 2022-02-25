window.addEventListener('load', function() {

    let destinyCountry = document.getElementById('destinyCountry');
    let aeropuertoDestino = document.getElementById('aeropuertoDestino');

    destinyCountry.addEventListener('blur', function() {
        var getCountrySelected = destinyCountry.options[destinyCountry.selectedIndex].class;
        var codAeropuertoDestino = aeropuertoDestino.options[aeropuertoDestino.selectedIndex].id;

        if (getCountrySelected == codAeropuertoDestino) {
            
        }


    })

})