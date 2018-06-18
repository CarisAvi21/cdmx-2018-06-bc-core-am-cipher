//aqui se encriptara el mensaje que introduzca el usuario
 const cifrar = () =>  {
   //console.log("INICIO DE FUNCION");
  let usuario = document.getElementById('texto').value;
  let cifrarTexto = "";
  let asciiFormula = 0;
  let clave= 33;
  let encode = cipher.encode(cifrarTexto, clave)

//se agrega un loop para que comienza a hacer el cifrado de texto
  for (let i= 0; i < usuario.length; i++) {
    //asciiFormula = (usuario.charCodeAt(i) - 65 + 33) % 26 + 65 ;//FORMULA PARA cifrar EN ASCII
    //cifrarTexto += String.fromCharCode(asciiFormula);

//si el usuario utiliza solo MAYUSCULA se aplica est aformula
      if (usuario.charCodeAt(i) >= 65 && usuario.charCodeAt(i) <= 90) {
        asciiFormula = (usuario.charCodeAt(i) - 65 + 33) % 26 + 65 ;
        //cifrarTexto += String.fromCharCode(asciiFormula);


//si el usuario utiliza MINUSCULAS  se salta a esta formula
    } else if (usuario.charCodeAt(i) >= 97 && usuario.charCodeAt(i) <= 122) {
      asciiFormula = (usuario.charCodeAt(i) - 97 + 33) % 26 + 97 ;
      //cifrarTexto += String.fromCharCode(asciiFormula);


//se aplica cuando el usuario utiliza espacios o caracteres especiales
    } else if (usuario.charCodeAt(i) >= 32 && usuario.charCodeAt(i) <= 64){
      asciiFormula = (usuario.charCodeAt(i) - 32  + 33) % 26 + 32 ;
      //cifrarTexto += String.fromCharCode(asciiFormula);
    }
 cifrarTexto += String.fromCharCode(asciiFormula);


}
//nos imprime el texto cifrado
    return document.getElementById('texto2').value = cifrarTexto
    console.log('cifrarTexto');
}

//aqui se comenzara a descifrar el texto cifrado arriba
const descifrar = () => {
  let descifrarTexto = "";
  let usuario2 = document.getElementById('texto3').value;
  let acsiiFormula = 0;
  let clave = 33;
  let decode = cipher.decode(descifrarTexto, clave)

  //SE AGREGA UN LOOP PARA EMPEZAR A DESCIFRAR EL TEXTO QUE EL USUARIO QUIERA INGRESAR
  for (let i= 0; i < usuario2.length; i++) {
  //  asciiFormula = (usuario2.charCodeAt(i) + 65 - 33) % 26 + 65; //formula para descifrar en ascii
    //descifrarTexto += String.fromCharCode(asciiFormula)


//el texto cifrado en mayusculas se descifra con esta formula
     if (usuario2.charCodeAt(i) >= 65 && usuario2.charCodeAt(i) <= 90) {
       asciiFormula = (usuario2.charCodeAt(i) - 90 - 33) % 26 + 90;
       //descifrarTexto += String.fromCharCode(asciiFormula)


//si el texto cifrado no son mayusculas se aplica esto para convertirse en minusculas
} else if (usuario2.charCodeAt(i) >= 97 && usuario2.charCodeAt(i) <= 122) {
     asciiFormula = (usuario2.charCodeAt(i) - 122 - 33) % 26 + 122;
     //descifrarTexto += String.fromCharCode(asciiFormula)


//se aplica cuando el usuario utiliza espacios o caracteres especiales
} else if (usuario2.charCodeAt(i) >= 32 && usuario2.charCodeAt(i) <= 64) {
     asciiFormula = (usuario2.charCodeAt(i) - 32 - 33) % 26 + 32;
     //descifrarTexto += String.fromCharCode(asciiFormula)

    }
  descifrarTexto += String.fromCharCode(asciiFormula);
}
  console.log(descifrarTexto);
  //nos imprime el texto descifrado
  return document.getElementById('txt3').value = descifrarTexto;

}
