let string = document.getElementById('texto');
let botonCifrar = document.getElementById('encode');
let offset = document.getElementById('numero');
let texto2 = document.getElementById('texto2');
let stringp = document.getElementById('texto3');
let botonDescifrar = document.getElementById('decode');
let offset2 = document.getElementById('numero2');
let txt3 = document.getElementById('txt3');

// se la da un evento al boton, para que realice la acción del "OnClock" y realice la funcion de cifrado y la pinte ne pantalla 
botonCifrar.addEventListener('click', event => {
  
  let clickEncode = cipher.encode(offset.value, string.value);

  texto2.value = clickEncode;
 
  
});

botonDescifrar.addEventListener('click', event => {
  let clickDecode = window.cipher.decode(
    offset2.value, stringp.value
  );
  txt3.value = clickDecode;
});
