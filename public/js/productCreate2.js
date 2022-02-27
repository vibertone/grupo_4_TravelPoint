window.addEventListener('load', function() {

    let destinyCountry = document.getElementById('destinyCountry');
    let aeropuertoDestino = document.getElementById('aeropuertoDestino');
    let aeropuertoDestinoOption = document.querySelectorAll('.aeropuertoDestino-option')
    console.log(aeropuertoDestinoOption)

    destinyCountry.addEventListener('blur', function() {

        if (aeropuertoDestinoOption.length > 1) {
            aeropuertoDestinoOption.classList.remove('aeropuertoDestino-option')
            aeropuertoDestinoOption.classList.add('aeropuertoDestino-option2')
        }
        
    })



})