const precio = 400000;
const cantidadElement = document.querySelector(".cantidad");
const precioTotalElement = document.querySelector(".valor-total");

function calcularPrecioTotal(cantidad, precio) {
  const amount = Number(cantidad);
  const price = Number(precio);
  const total = price * amount;

  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "CLP",
  }).format(total);
}

function aumentar() {
  const cantidadElement = document.querySelector(".cantidad");
  const cantidadValue = Number(cantidadElement.innerHTML);

  const nuevaCantidad = cantidadValue + 1;
  cantidadElement.innerHTML = nuevaCantidad;
  const valorTotal = calcularPrecioTotal(nuevaCantidad, precio);
  precioTotalElement.innerHTML = valorTotal;
}

function restar() {
  const cantidadElement = document.querySelector(".cantidad");
  const cantidadValue = Number(document.querySelector(".cantidad").innerHTML);

  if (cantidadValue > 0) {
    const nuevaCantidad = cantidadValue - 1;
    cantidadElement.innerHTML = nuevaCantidad;
    const valorTotal = calcularPrecioTotal(nuevaCantidad, precio);
    precioTotalElement.innerHTML = valorTotal;
  }
}

const precioSpan = document.querySelector(".precio-inicial");

precioSpan.innerHTML = precio;
