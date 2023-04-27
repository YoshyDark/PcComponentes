
let miBoton = document.querySelector("#enviar");
let miFormulario = document.querySelector("#formulario");

miBoton.addEventListener("click", (evento)=>{                                                       //creamos un evento, para cuando hagamos "click" en el boton "enviar"
    evento.preventDefault();                                                                        //desactivamos el boton "enviar"

    valido = validar();                                                                             //"valido" contiene el valor "true" o "false" de la función "validar"

    if(valido == true){                                                                             //comprueba que los datos introducidos sean correctos
        miFormulario.submit();                                                                       //envia el formulario
    }
})

function validar(){
    let nombre = document.querySelector("#nombre");
    let apellidos = document.querySelector("#apellidos");
    let direccion = document.querySelector("#direccion");
    let telefono = document.querySelector("#telefono");
    let edad = document.querySelector ("#edad");
    let correo = document.querySelector("#correo");
    let privacidad = document.querySelector("#privacidad");


    let correcto = true;

    //COMPROBAMOS EL NOMBRE
    if(nombre.value == null || nombre.value == ""){ 
        set_error (nombre,"Debe introducir un nombre, este campo no puede estar vacio");                                                       
        correcto = false;
    }else{
        let nombre_re =/^[a-zA-Z ]{2,15}$/;                                                              
        if(!nombre_re.exec(nombre.value)){
            set_error (nombre,"El nombre solo puede tener letras y como máximo 15 caracteres");
            correcto = false;
        }else{
            set_success(nombre);
        }
    }

    //COMPROBAMOS LOS APELLIDOS
    if(apellidos.value == null || apellidos.value == ""){
        set_error (apellidos,"Debe introducir sus apellidos, este campo no puede estar vacio");                                                       
        correcto = false;
    }else{
        let apellidos_re =/^[a-zA-Z ]{2,40}$/;                                                              
        if(!apellidos_re.exec(apellidos.value)){
            set_error (apellidos,"Los apellidos solo puede tener letras y como máximo 40 caracteres");
            correcto = false;
        }else{
            set_success(apellidos);
        }
    }

    //COMPROBAMOS LA DIRECCIÓN
    if(direccion.value == null || direccion.value == ""){ 
        set_error (direccion,"Debe introducir un dirección, este campo no puede estar vacio");                                                            
        correcto = false;
    }else{
        set_success(direccion);
    }

    //COMPROBAMOS EL TELÉFONO
    if (telefono.value == null || telefono.value == ""){
        set_error (telefono,"Debe introducir un teléfono, este campo no puede estar vacio");  
        correcto = false;
    }else{
        let telefono_re = /^[0-9]{9}$/
        if(!telefono_re.exec(telefono.value)){
            set_error (telefono,"El teléfono debe tener 9 dígitos y estar compuesto únicamente de números");
            correcto = false;
        }else{
            set_success(telefono);
        }
    }

    //COMPROBAMOS LA EDAD
    if (edad.value == null || edad.value == ""){
        set_error (edad,"Debe introducir su edad, este campo no puede estar vacio");
        correcto = false;
    }else{
        let edad_re = /^[0-9]{1,2}$/;
        if (!edad_re.exec(edad.value)){
            set_error (edad,"La edad solo puede tener números, y como máximo 2 caracteres");
            correcto = false;
        }else{
            if(edad.value < 18){
                set_error (edad,"El usuario debe ser mayor de edad");
                correcto = false;
            }else{
                set_success(edad);
            }
        }
    }

    //COMPROBAMOS EL CORREO ELECTRÓNICO
    if(correo.value == null || correo.value == ""){
        set_error (correo,"Debe introducir su correo electrónico, este campo no puede estar vacio");
        correcto = false;
    }else{
        let correo_re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
        if(!correo_re.exec(correo.value)){
            set_error (correo,"Los datos introducidos no son correctos. Ejemplo: nnnnn_nnn@zzzzz.xxx");
            correcto = false;
        }else{
            set_success(correo);
        }
    }

    //COMPROBAMOS LA PRIVACIDAD

    if(!privacidad.checked){
        set_error (privacidad,"Tiene que aceptar las condiciones de uso y privacidad");
        correcto = false;
    }else{
        set_success(privacidad);
    }

    if(correcto == true){
        return true;
    }else{
        return false;
    }
}

// FUNCION PARA LOS ERRORES
function set_error(input, mensaje){
    const input_padre = input.parentElement;                                                //Cogemos al padre del "input" ("div" en nuestro caso)
    const small_hijo = input_padre.querySelector("small");                                  //cogemos al hijo "small" del "div" 
    input_padre.className = "formulario-colores error";                                     //aplicamos los estilos definidos en nuestro css
    small_hijo.innerText = mensaje;                                                         //cambiamos el text de la etiqueta "small"
}

//FUNCION DE QUE NO HAY ERRORES 
function set_success(input){
    const input_padre = input.parentElement;
    input_padre.className = "formulario-colores success";
}