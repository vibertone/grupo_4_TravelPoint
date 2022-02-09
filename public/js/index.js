window.addEventListener('load', function () {

    let multidestino = document.querySelector('.multidestino');
    let agregarEliminarTramo = document.querySelector('.agregar-eliminar-tramo');
    let gridOpcionesVuelos = document.querySelector('.grid-opciones-vuelos');
    let passengers = document.querySelector('.passengers');

    // Cuando se clickea multidestino, cambia el formato de eleccion de vuelo
    multidestino.addEventListener('click', function () {

        if (gridOpcionesVuelos.classList.contains('grid-opciones-vuelos')) {
            gridOpcionesVuelos.classList.remove('grid-opciones-vuelos');
            gridOpcionesVuelos.classList.add('grid-multidestino');
            passengers.classList.add('passengers-cant');
            agregarEliminarTramo.style.display = 'block';
        };
    });

    //Se agrega nuevo tramo al clickear en +Agregar tramo, en la opcion multidestino
    let agregarTramo = document.querySelector('.agregar-tramo');

    agregarTramo.addEventListener('click', function () {

        let nuevoTramo = document.createElement("div");
        nuevoTramo.classList.add('nuevo-tramo-creado');
        nuevoTramo.innerHTML = "<div class='div-creado'><input type='search' name='Origen' placeholder='Origen'></div><div class='div-creado'><input type='search' name='Destino' placeholder='Destino'></div><div class='div-creado'><input type='text' placeholder='MM/DD/YYYY' name='fechas' id='fechas'></div><div class='icon-eliminar-tramo'><i class='far fa-times-circle'></i></div>";
        let gridMultidestino = document.querySelector('.grid-multidestino');

        var addBeforeDiv1 = document.getElementById("div1");
        gridMultidestino.insertBefore(nuevoTramo, addBeforeDiv1);
    });

    /* let eliminarTramo = document.querySelector('.eliminar-tramo');
    
    eliminarTramo.addEventListener('click', function () {
        let tramoCreado = document.querySelector('.nuevo-tramo-creado')
        if (tramoCreado) {
            divCreado = tramoCreado.parentNode;
            divCreado.removeChild(tramoCreado);
        };
    }); */

    let iconEliminarTramo = document.querySelector('.icon-eliminar-tramo');

    if(iconEliminarTramo) {
    iconEliminarTramo.addEventListener('click', function () {
        main.style.color = 'red'
        /* let tramoCreado = document.querySelector('.nuevo-tramo-creado')
        if (tramoCreado) {
            divCreado = tramoCreado.parentNode;
            divCreado.removeChild(tramoCreado); 
        };*/
    });
};

    let idaYVuelta = document.querySelector('.vuelo-ida-y-vuelta');

    idaYVuelta.addEventListener('click', function () {
        if (gridOpcionesVuelos.classList.contains('grid-multidestino')) {
            gridOpcionesVuelos.classList.remove('grid-multidestino');
            gridOpcionesVuelos.classList.add('grid-opciones-vuelos');
            passengers.classList.remove('passengers-cant');
            agregarEliminarTramo.style.display = 'none';
        };

        let nuevoTramoCreado = document.querySelector('.nuevo-tramo-creado');
        if (nuevoTramoCreado) {
            nuevoTramoCreado.style.display = 'none';
        }
        multidestino.addEventListener('click', function () {
        if (nuevoTramoCreado.style.display = 'none'){
            nuevoTramoCreado.style.display = 'flex'
        }
        })
    });

})