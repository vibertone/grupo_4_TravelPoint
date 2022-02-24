window.addEventListener('load', function () {
    let autocompleteInput = document.getElementById('autocomplete-input-2');
    let autocompleteList = document.getElementById('autocomplete-list-2');

    autocompleteInput.addEventListener('keyup', function (e) {
        if (autocompleteList.style.display = "none") {
            autocompleteList.style.display = "block"
        }

        const search = (key) => {
            fetch(`https://restcountries.com/v2/name/${key}?fields=name`)
                .then((res) => res.json())
                .then((data) => {
                    if (Array.isArray(data)) {
                        resultsList(data.map((item) => {
                            return item.name;
                        }));
                    }
                    else {
                        resultsList();
                    }
                })
                .catch(e => { console.log(e) })
        };

        const resultsList = (items = []) => {
            autocompleteList.innerHTML = "";

            items.map((item) => {
                autocompleteList.innerHTML += `<li id='items-list'>${item}</li>`
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

        document.addEventListener('keydown', function (e) {
            if (e.key == 'Tab') {
                resultsList();
            }
        })
    })
});