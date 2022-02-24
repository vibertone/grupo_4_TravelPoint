const db = require('../database/models')
const { Op } = require("sequelize");

window.addEventListener('load', function () {
    let autocompleteInput = document.getElementById('autocomplete-input');
    let autocompleteList = document.getElementById('autocomplete-list');

    autocompleteInput.addEventListener('keyup', function (e) {
        if (autocompleteList.style.display = "none") {
            autocompleteList.style.display = "block"
        }

        const search = (key) => {
            db.Countries.findAll({where: {country: {[Op.like]: `%${key}%`}}})
                .then((data) => {
                        resultsList(data.map((item) => {
                            return item;
                        }))
                })
                .catch(e => { console.log(e) })
        };

        const resultsList = (items = []) => {
            autocompleteList.innerHTML = "";

            items.map((item) => {
                autocompleteList.innerHTML += `<li>${item}</li>`
            })
        }

        let key = e.target.value;

        if (key.length > 0) {
            search(key);
        }

        autocompleteList.addEventListener('click', function (e) {
            if (e.target && e.target.nodeName == "LI") {
                autocompleteInput.value = e.target.innerHTML;
                resultsList();
            }
        })

        document.addEventListener('click', function () {
            resultsList();
        })

        document.addEventListener('keyup', function (e) {
            if (e.key == 'Tab' || e.key == 'Escape') {
                autocompleteList.style.display = "none";
            }
        })
    })

    /*    autocompleteInput.addEventListener('keydown', function (e) {
            let autocompleteList = document.getElementById('autocomplete-list');
            let items;
            let indexFocus = -1;
    
            if (autocompleteList) {
                items = autocompleteList.querySelectorAll('li')
    
                switch (e.key) {
                    case 'ArrowDown': //tecla de abajo
                        indexFocus++;
                        if (indexFocus > items.length - 1) indexFocus = items.length - 1;
                        break;
    
                    case 'ArrowUp': //tecla de arriba
                        indexFocus--;
                        if (indexFocus < 0) indexFocus = 0;
                        break;
    
                    case 'Enter': // presionar enter
                        e.preventDefault();
                        indexFocus = -1;
                        break;
    
                    default:
                        break;
                }
    
                seleccionar(items, indexFocus);
                return false;
            }
        })
        function seleccionar(items, indexFocus){
            if(!items || indexFocus == -1) return false;
            items.forEach(x => {x.classList.remove('autocomplete-active')});
            items[indexFocus].classList.add('autocomplete-active');
        } */

});