# Cifrado César

## Preámbulo

Esta pagina esta diseñada para que con tus amigos puedas mandar mensajes sin que otros sepan que se estan escribiendo
es una herramienta útil para planear fiestas secretas o alguna sorpresa a algun ser querido.

Se utiliza una clave ya establecida de 33, se penso en una interfaz sencilla de utilizar para los usuarios
en donde pueden cifrar y descifrar su mensaje sin necesidad de estar cambiado de pagina o siguiendo muchas instrucciones.

Se esta implementando una versión para mobiles, aún esta en proceso de que se logre apreciar bien, sin que se muevan los botones
y las cajas de texto.






## Introducción

El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los
primeros métodos de cifrado conocidos históricamente. Es un tipo de cifrado por
sustitución en el que una letra en el texto original es reemplazada por otra
letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El emperador Julio César lo usaba para enviar órdenes a sus generales en los
campos de batalla, es una de las técnicas más simples y más usadas para cifrar
un mensaje.

Por ejemplo si usáramos un desplazamiento de 3:

* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Actualmente todos los cifrados de sustitución alfabética simple, se descifran
con facilidad y en la práctica no ofrece mucha seguridad en la comunicación,
pero el cifrado César muchas veces puede formar parte de sistemas más complejos
de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el
sistema ROT13.
