var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOk: false,
};

var vaca = {
  url: "vaca.png",
  cargaOk: false,
};

var cantidad = aleatorio(5, 15);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarfondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

function cargarfondo() {
  fondo.cargaOk = true;
  dibujar();
}

function cargarVacas() {
  vaca.cargaOk = true;
  dibujar();
}

function dibujar() {
  if (fondo.cargaOk == true) {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOk == true) {
    console.log(cantidad);
    for (var v = 0; v < cantidad; v++) {
      var x = aleatorio(0, 10);
      var y = aleatorio(0, 10);
      var x = x * 40;
      var y = y * 40;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
}

function aleatorio(min, max) {
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
