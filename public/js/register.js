window.addEventListener('load', function() {
    
    let sendDataCountry = document.getElementById('sendDataCountry');

    sendDataCountry.addEventListener('click', function(){
        var getCountry = document.getElementById("country");
        var getCountrySelected = getCountry.options[getCountry.selectedIndex].text;
        var capturaDataCountry = document.getElementById('capturaDataCountry');
        capturaDataCountry.value = getCountrySelected;

    });

});