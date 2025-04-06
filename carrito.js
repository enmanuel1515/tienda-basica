let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
  if (carrito.length >= 10) {
    alert("Solo puedes agregar 10 productos.");
    return;
  }

  carrito.push({ nombre, precio });
  total += precio;

  const lista = document.getElementById("lista-carrito");
  const item = document.createElement("li");
  item.textContent = `${nombre} - $${precio}`;
  lista.appendChild(item);

  document.getElementById("total").textContent = total;
}

function comprar() {
  let descuento = 0;
  let mensaje = "";

  if (total > 50000) {
    descuento = total * 0.05;
    mensaje = `Se aplicó un descuento del 5%. Total con descuento: $${(total - descuento).toFixed(2)}`;
  } else if (total > 10000) {
    descuento = total * 0.025;
    mensaje = `Se aplicó un descuento del 2.5%. Total con descuento: $${(total - descuento).toFixed(2)}`;
  } else {
    mensaje = "Usted no aplicó para el descuento, pero su compra fue realizada correctamente";
  }

  document.getElementById("resultado").textContent = mensaje;
}

