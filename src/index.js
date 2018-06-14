//aqui se encriptara el mensaje que introduzca el usuario
 const cifrar = () =>  {
   //console.log("INICIO DE FUNCION");
  let usuario = document.getElementById('texto').value;
  let cifrarTexto = "";
  let asciiFormula = 0;
  let clave= 33;

console.log('usuario');

  for (let i= 0; i < usuario.length; i++) {
    asciiFormula = (usuario.charCodeAt(i) - 65 + 33) % 26 + 65 ;//FORMULA PARA cifrar EN ASCII
    //console.log("ya hice la accion de cifrado");
    cifrarTexto += String.fromCharCode(asciiFormula);
  }
    return document.getElementById('texto2').value = cifrarTexto
    console.log('cifrarTexto');
}

const descifrar = () => {
  let descifrarTexto = "";
  let usuario2 = document.getElementById('texto3').value;
  let acsiiFormula = 0;
  let clave = 33;
  // SE AGREGA UN LOOP PARA EMPEZAR A DESCIFRAR EL TEXTO QUE EL USUARIO QUIERA INGRESAR
  for (let i= 0; i < usuario2.length; i++) {
    asciiFormula = (usuario2.charCodeAt(i) + 65 - 33) % 26 + 65; //formula para descifrar en ascii
    descifrarTexto += String.fromCharCode(asciiFormula)
  }
  console.log(descifrarTexto);
  return document.getElementById('txt3').value = descifrarTexto;

}


//function desencriptar{

//}
/*aqui se encriptara el mensaje que introduzca el usuario
 const cifrar = () =>  {
   //console.log("INICIO DE FUNCION");
  let usuario = document.getElementById("texto").value;
  let cifrarTexto = "";
  let asciiFormula = 0;
  let clave= 34;
  let alfabeto = '';
console.log('usuario');
     //let text = ;
    //console.log("ya hice la accion de cifrado");

for (let i= 0; i < usuario.length; i++) {
  if (asciiFormula === 32){
    //let cifrar = String.fromCharCode(asciiFormula);
    cifrarTexto += String.fromCharCode(asciiFormula)

  } else if (asciiFormula >= 33 && asciiFormula <= 64){
    alfabeto = 33;

  } else if (asciiFormula >= 65 && asciiFormula <= 90){
    alfabeto = 65;

  }else if (asciiFormula >= 97 && asciiFormula <= 122){
    alfabeto = 97;
console.log(asciiFormula);
  }

  asciiFormula = (usuario.charCodeAt(i) - 65 + 34) % 26 + 65 ;//FORMULA PARA encriptar EN ASCII
  return document.getElementById('texto2').value = cifrarTexto;
  console.log(cifrar);
  }

const descifrar = () => {
  let clave = 34;
  offset = paseInt(clave.value);

  let usuario = document.getElementById('texto3').value ;
  for ( i = 0 ; i < usuario.length ; i++) {
  let descifrarTexto = usuario.charCodeAt(i);

   if (asciiFormula === 32){
    let j = String.fromCharCode(asciiFormula);
    cifrarTexto += j;

  } else if (asciiFormula >= 33 && asciiFormula <= 64){
    alfabeto = 33;

  } else if (asciiFormula >= 65 && asciiFormula <= 90){
    alfabeto = 65;

  } else if (asciiFormula >= 97 && asciiFormula <= 122){
    alfabeto = 97;
console.log(descifrar);
  }

    descifrarTexto += String.fromCharCode(asciiFormula)
    asciiFormula = (descifrar + alfabeto - offset) % 26 + alfabeto ;
    return document.getElementById('texto3').value = descifrarTexto;
    console.log(descifrarTexto);
 }
}*/
