var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 149, 149, 151, 151, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath(); //inicia
  lienzo.strokeStyle = color; //color de la linea
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial); //moverse al punto en X punto en Y
  lienzo.lineTo(xfinal, yfinal); //crear linea
  lienzo.stroke(); // cerrar la linea
  lienzo.closePath(); // termnina
}

function dibujarTeclado(evento) {
  // if (evento.keyCode == teclas.UP) {
  //   console.log("arriba");
  // }
  // if (evento.keyCode == teclas.DOWN) {
  //   console.log("abajo");
  // }
  var colorcito = "blue";
  var movimiento = 10;
  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
      break;
    default:
      console.log("otra tecla");
      break;
  }
}
