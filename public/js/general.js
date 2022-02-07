window.addEventListener('load', function () {

    let iconProfileLogout = document.querySelector('.icon-profile-logout');
    let menuDesplegable = document.querySelector('.menu-desplegable');

    //Menu desplegable para entrar al perfil y deslogearse
    iconProfileLogout.addEventListener('click', function () {

        if (menuDesplegable.classList.contains('menu-desplegable')) {
            menuDesplegable.classList.remove('menu-desplegable');
            menuDesplegable.classList.add('menu-desplegable-block');
        } else {
            menuDesplegable.classList.remove('menu-desplegable-block');
            menuDesplegable.classList.add('menu-desplegable');
        }
    })
    
});