var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var colorcito = "#faa";

// while (l < lineas) {
//   yi = 10 * l;
//   xf = 10 * (l + 1);
//   dibujarLinea(colorcito, 0, yi, xf, 300);
//   console.log("lineas " + l);
//   // l = l + 1;
//   l++;
// }

for (l = 0; l < lineas; l++) {
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea(colorcito, 0, yi, xf, 300);
  console.log("lineas " + l);
}

dibujarLinea("blue", 0, 0, 0, 300);
dibujarLinea("blue", 0, 300, 300, 300);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath(); //inicia
  lienzo.strokeStyle = color; //color de la linea
  lienzo.moveTo(xinicial, yinicial); //moverse al punto en X punto en Y
  lienzo.lineTo(xfinal, yfinal); //crear linea
  lienzo.stroke(); // cerrar la linea
  lienzo.closePath(); // termnina
}
