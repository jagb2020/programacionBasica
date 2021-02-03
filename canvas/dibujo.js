var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
console.log(lienzo);

dibujarLinea("pink", 10, 300, 220, 10);
dibujarLinea("yellow", 300, 10, 10, 220);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath(); //inicia
  lienzo.strokeStyle = color; //color de la linea
  lienzo.moveTo(xinicial, yinicial); //moverse al punto en X punto en Y
  lienzo.lineTo(xfinal, yfinal); //crear linea
  lienzo.stroke(); // cerrar la linea
  lienzo.closePath(); // termnina
}
