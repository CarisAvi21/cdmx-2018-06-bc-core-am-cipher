
//aqui se encriptara el mensaje que introduzca el usuario
 const cifrar = () =>  {
   //console.log("INICIO DE FUNCION");
  let usuario = document.getElementById("texto").value;
  let cifrarTexto = "";
  let asciiFormula = 0;
  let clave= 33;
console.log('usuario');

  for (let i= 0; i < usuario.length; i++) {

    asciiFormula = (usuario.charCodeAt(i) - 65 + 33) % 26 + 65 ;//FORMULA PARA encriptar EN ASCII

    //let text = ;
    //console.log("ya hice la accion de cifrado");
    cifrarTexto += String.fromCharCode(asciiFormula)
  }

    return document.getElementById('texto2').value = cifrarTexto;

}

//function desencriptar{

//}
