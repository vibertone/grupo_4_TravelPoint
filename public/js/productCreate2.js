window.addEventListener('load', function() {

    let destinyCountry = document.getElementById('destinyCountry');
    let aeropuertoDestino = document.getElementById('aeropuertoDestino');
    let aeropuertoDestinoOption = document.getElementById('aeropuertoDestino-option')

    destinyCountry.addEventListener('blur', function() {
        let getCountrySelected = destinyCountry.options[destinyCountry.selectedIndex].className;

        if (getCountrySelected == aeropuertoDestinoOption.className) {
            aeropuertoDestinoOption.style.display = 'block'
        }
    })

})