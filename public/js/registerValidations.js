window.addEventListener("load", function () {
    const formulario = document.getElementById("formulario");
    const inputs = document.querySelectorAll("#formulario input");



    const expresiones = {
        name: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
        last_name: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/, // 4 a 12 digitos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    }

    const campos = {
        name: false,
        last_name: false,
        password: false,
        email: false
    }

    const validarFormulario = (e) => {
        switch (e.target.name) {
          case "name":
            validarCampo(expresiones.name, e.target, "name");
            break;
          case "last_name":
            validarCampo(expresiones.last_name, e.target, "last_name");
            break;
          case "password":
            validarCampo(expresiones.password, e.target, "password");
            validarPassword2();
            break;
          case "repeatPassword":
            validarPassword2();
            break;
          case "email":
            validarCampo(expresiones.email, e.target, "email");
            break;
        }
      };

    const validarCampo = (expresion, input, campo) => {
        if (expresion.test(input.value)) {
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
            document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
            campos[campo] = true;
        } else {
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
            document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
            campos[campo] = false;
        }
    }

    const validarPassword2 = () => {
        const inputPassword1 = document.getElementById('password');
        const inputPassword2 = document.getElementById('repeatPassword');

        if (inputPassword1.value !== inputPassword2.value) {
            document.getElementById(`grupo__repeatPassword`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`grupo__repeatPassword`).classList.remove('formulario__grupo-correcto');
            document.querySelector(`#grupo__repeatPassword i`).classList.add('fa-times-circle');
            document.querySelector(`#grupo__repeatPassword i`).classList.remove('fa-check-circle');
            document.querySelector(`#grupo__repeatPassword .formulario__input-error`).classList.add('formulario__input-error-activo');
            campos['password'] = false;
        } else {
            document.getElementById(`grupo__repeatPassword`).classList.remove('formulario__grupo-incorrecto');
            document.getElementById(`grupo__repeatPassword`).classList.add('formulario__grupo-correcto');
            document.querySelector(`#grupo__repeatPassword i`).classList.remove('fa-times-circle');
            document.querySelector(`#grupo__repeatPassword i`).classList.add('fa-check-circle');
            document.querySelector(`#grupo__repeatPassword .formulario__input-error`).classList.remove('formulario__input-error-activo');
            campos['password'] = true;
        }
    }

    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });

    formulario.addEventListener('submit', (e) => {
        
        if(!campos.name && !campos.last_name && !campos.password && !campos.email  ){
            e.preventDefault();
        }
    });
})