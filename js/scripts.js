/*console.log("Estoy en el archivo indicado para el formulario")*/
const correo = document.getElementById("mailUser");
const clave = document.getElementById("claveUser");
const mensajeError = document.getElementById("MensajesDelSistema");

function validaCampos (campo){
   // console.log("Entre a la funcion validaCampos")
   mensajeError.innerHTML=`<p></p>`
    if(campo.value=="" ){
        //alert(`No ha digitado información requerida en el campo ${campo.name}`);
        campo.classList.add("errorBox");
        mensajeError.innerHTML=`<p>No ha digitado información requerida </p>`        
        return false
    }else 
    {  // alert(`El contenido del campo es ${campo.value}`);
        campo.classList.remove("errorBox");
        mensajeError.innerHTML=`<p>Información adecuada para ingreso </p>`
    } 
}

function validar(){
   // console.log("Entrando a la función validar...")
    validaCampos(correo);
    validaCampos(clave);

}

/*console.log(correo.name);
console.log(clave.name);
console.log(correo.value);
console.log(clave.value);
*/
/*
if(correo.values==""){
    alert("No ha digitado el correo");
}else 
{alert(`El contenido del campo correo es ${correo.values}`);
} 
if(correo.values==""){
    alert("No ha digitado el correo");
}else 
{alert(`El contenido del campo correo es ${correo.values}`);
}
if(clave.values==""){
    alert("Falta digitar la clave de acceso...");
}else 
{alert(`El contenido del campo clave es ${clave.values}`);
}
if(guardaCredenciales==""){
    alert("No selecciono si guarda las credenciales");
}else 
{alert(`El contenido del checkbox es ${guardaCredenciales.values}`);
}*/