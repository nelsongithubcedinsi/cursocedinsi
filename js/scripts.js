/*console.log("Estoy en el archivo indicado para el formulario")*/
const form = document.getElementById("formulario");
const correo = document.getElementById("mailUser");
const clave = document.getElementById("claveUser");
const mensajeError = document.getElementById("MensajesDelSistema");
const nombreRegex = /^([a-zA-ZÁ-ÓÖö-ÿ]{4-30})([\s]?)([a-zA-ZÁ-ÓÖö-ÿ]{4-30})$/g;
const edadRegex = /(^[0-9]{1-2}$)/g;
const textoRegex = /^([a-zA-ZÁ-ÓÖö-ÿ]{4-100})([\s]?)$/g
const numeroRegex = /(^[0-9]{1-30}$)/g;
const correoRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/g; 
const claveRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/g;


const formValid = {
    correo: false,
    clave: false,
    recordar: false
} 

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validarFormulario() === -1){
        alert("Enviando formulario");
    } else {
        alert("Error de valores en el formulario");
    }
})

const validarFormulario = () => {
    const formValues = Object.values(formValid);
    //console.log(formValues);
    let valores = formValues.findIndex(v => v === false);
    console.log(valores);
    return valores;
}


function validaCampos (campo, tipoCampo){
   //el parametro tipoCampo es para indicar si es texto, numeros, correo, mixto, etc.
   //tipoCampo 1 (texto)  2 (números)  3 (mail) 4 (nombres)  5 (edad) 6 (clave)
   // console.log("Entre a la funcion validaCampos")
   let regCompare ="";
   switch (tipoCampo){
       case 1: {regCompare = textoRegex;  break;}
       case 2: {regCompare = numeroRegex; break;}
       case 3: {regCompare = correoRegex; break;}
       case 4: {regCompare = nombreRegex; break;}
       case 5: {regCompare = edadRegex; break;}
       case 6: {regCompare = claveRegex; break;}
       default: {regCompare = "";}
    }

   mensajeError.innerHTML=`<p></p>`
   let valor = false;
   valor = campo.addEventListener('change', (e) => {
      e.target.value.match(regCompare) ? true : false;})
      console.log("este es el resultado de la comparación: ",campo.addEventListener('change', (e) => {e.target.value.match(regCompare)}))
    console.log(`Este es el resultado de evaluar el campo ${campo} 
    con el patron ${regCompare}:`,valor);
  
    if(campo.value=="" || !valor){
    
        //alert(`No ha digitado información requerida en el campo ${campo.name}`);
        campo.classList.add("errorBox");     
      return 0;
    }else 
    {  // alert(`El contenido del campo es ${campo.value}`);
        campo.classList.remove("errorBox");
        return 1;
    } 
}

function validar(){
    let SioNo =0;
   // console.log("Entrando a la función validar...")
    SioNo += validaCampos(correo,3);
    SioNo += validaCampos(clave, 6);
    console.log(`Este es el valor de la variable SioNo : ${SioNo}`);
    if(SioNo<2){
        mensajeError.innerHTML=`<p>No ha digitado información requerida </p>`  
    }else {
        mensajeError.innerHTML=`<p>Información adecuada para ingreso </p>`
    }

}




function llamarApi(){
    const imagenEnApi = document.getElementById("imagenRicky");
    const nombreEnApi = document.getElementById("nombre");
    const generoEnApi = document.getElementById("genero");

    console.log("Usuario dio click...")
   fetch('https://rickandmortyapi.com/api/character/1')
    .then(response=> response.json())
    .then (function(data){
        console.log(data);
        imagenEnApi.setAttribute('src',data.image);
        nombreEnApi.innerHTML=data.name;
        generoEnApi.innerHTML=data.gender;
        
    })
    //.then(json => console.log(json))
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