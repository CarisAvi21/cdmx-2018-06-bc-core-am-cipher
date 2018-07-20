window.cipher = {
  encode: (offset, string) => {
    let txtcifrado = '';

    // for es un bucle que se va a repetir un numero especifico de veces, en este caso va a recorrer el texto que introduzaca el usuario para poder cifrarlo 
    for (let i = 0; i < string.length; i++) {
      // ascii es el código que utilizan las computadoras que representas símbolos, caracteres y números, en este caso el código ascii va a empezar en el #65 del alfabeto.
      let asciiFormula = string[i].charCodeAt(); // aqui se regresa el numero ascii y lo devuelve en la variable asciiFormula
      let formula;
      // sie el usuario escribe un texto con mayusculas, hara esta formula,
      if (asciiFormula >= 65 && asciiFormula <= 90) {
        // parseInt se encarga de analizar una cadena e intentar obtener un valor numerico a partir de esta, en este caso analizara la clave que ponga el usuario para poder cifrar.
        formula = (asciiFormula - 65 + parseInt(offset)) % 26 + 65;
        // si ademas ocupa minusculas aplicara esta formula
      } else if (asciiFormula >= 97 && asciiFormula <= 122) {
        formula = (asciiFormula - 97 + parseInt(offset)) % 26 + 97;
        // si utiliza espacios, aplicara esta formula
      } else formula = asciiFormula;

      // // charCodeAt: Devuelve el valor Unicode del carácter en la ubicación especificada
      // unicode: es un formato común de caracteres
      // en este caso devolvera un el string cifrado con el codigo ascii
      txtcifrado += String.fromCharCode(formula);
    }
    return txtcifrado;

  },

  decode: (offset2, stringp) => {
    let txtdescifrado = '';

    for (let i = 0; i < stringp.length; i++) {
      let asciiFormula = stringp[i].charCodeAt();
      let formula;

      if (asciiFormula >= 65 && asciiFormula <= 90) {
        formula = (asciiFormula - 90 - parseInt(offset2)) % 26 + 90;
      } else if (asciiFormula >= 97 && asciiFormula <= 122) {
        formula = (asciiFormula - 122 - parseInt(offset2)) % 26 + 122;
      } else formula = asciiFormula;

      txtdescifrado += String.fromCharCode(formula);
    }

    return txtdescifrado;
  },
  
  createCipherWithOffset: () =>{},
};
