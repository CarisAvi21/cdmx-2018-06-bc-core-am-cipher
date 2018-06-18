window.cipher = {
  /*encode: (usuario, clave) => {
    let cifrarTexto = "";
    let asciiFormula = 0;
    for (let i= 0; i < usuario.length; i++) {
      if (usuario.charCodeAt(i) >= 65 && usuario.charCodeAt(i) <= 90) {
        asciiFormula = (usuario.charCodeAt(i) - 65 + 33) % 26 + 65 ;
        //cifrarTexto += String.fromCharCode(asciiFormula);
    } else if (usuario.charCodeAt(i) >= 97 && usuario.charCodeAt(i) <= 122) {
      asciiFormula = (usuario.charCodeAt(i) - 97 + 33) % 26 + 97 ;
      //cifrarTexto += String.fromCharCode(asciiFormula);
    } else if (usuario.charCodeAt(i) >= 32 && usuario.charCodeAt(i) <= 64){
      asciiFormula = (usuario.charCodeAt(i) - 32  + 33) % 26 + 32 ;
      //cifrarTexto += String.fromCharCode(asciiFormula);
    }
 cifrarTexto += String.fromCharCode(asciiFormula);
  }
    return document.getElementById('texto2').value = cifrarTexto
    console.log('cifrarTexto');
},
decode: (usuario2, clave) =>{
  let descifrarTexto = "";
  let acsiiFormula = 0;
  for (let i= 0; i < usuario2.length; i++) {
    if (usuario2.charCodeAt(i) >= 65 && usuario2.charCodeAt(i) <= 90) {
      asciiFormula = (usuario2.charCodeAt(i) - 90 - 33) % 26 + 90;
      //descifrarTexto += String.fromCharCode(asciiFormula)
//si no son mayusculas se aplica esto para convertirse en minusculas
} else if (usuario2.charCodeAt(i) >= 97 && usuario2.charCodeAt(i) <= 122) {
    asciiFormula = (usuario2.charCodeAt(i) - 122 - 33) % 26 + 122;
    //descifrarTexto += String.fromCharCode(asciiFormula)
//se aplica cuando el usuario utiliza espacios o caracteres especiale
} else if (usuario2.charCodeAt(i) >= 32 && usuario2.charCodeAt(i) <= 64) {
    asciiFormula = (usuario2.charCodeAt(i) - 32 - 33) % 26 + 32;
    //descifrarTexto += String.fromCharCode(asciiFormula)
   }
 descifrarTexto += String.fromCharCode(asciiFormula);
 }
 console.log(descifrarTexto);
 return document.getElementById('txt3').value = descifrarTexto;
},*/
// ...
};
