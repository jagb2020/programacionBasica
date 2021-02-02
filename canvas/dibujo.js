var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
console.log(lienzo);

lienzo.beginPath(); //inicia
lienzo.strokeStyle = "blue"; //color de la linea
lienzo.moveTo(50, 10); //moverse al punto en X punto en Y
lienzo.lineTo(200, 2); //crear linea
lienzo.stroke(); // cerrar la linea
lienzo.closePath(); // termnina

lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(100, 10);
lienzo.lineTo(290, 200);
lienzo.stroke();
lienzo.closePath();
