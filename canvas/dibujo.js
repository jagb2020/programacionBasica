var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath(); //inicia
  lienzo.strokeStyle = color; //color de la linea
  lienzo.moveTo(xinicial, yinicial); //moverse al punto en X punto en Y
  lienzo.lineTo(xfinal, yfinal); //crear linea
  lienzo.stroke(); // cerrar la linea
  lienzo.closePath(); // termnina
}

function dibujoPorClick() {
  // var x = texto.value;
  // alert("hola mundo " + x);
  // var xxx = parseInt(texto.value);
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var colorcito = "#faa";
  var espacio = ancho / lineas;
  // while (l < lineas) {
  //   yi = 10 * l;
  //   xf = 10 * (l + 1);
  //   dibujarLinea(colorcito, 0, yi, xf, 300);
  //   console.log("lineas " + l);
  //   // l = l + 1;
  //   l++;
  // }

  for (l = 0; l < lineas; l++) {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    console.log("lineas " + l);
  }
  // dibujarLinea("blue", 0, 0, 0, 300);
  // dibujarLinea("blue", 0, 300, 300, 300);
  dibujarLinea("blue", 0, 0, 0, ancho - 1);
  dibujarLinea("blue", 0, ancho - 1, ancho - 1, ancho - 1);
}
