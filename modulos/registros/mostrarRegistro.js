import { obtenerRegistros, eliminarRegistro } from "../../servicios/localStorage.js";
let contenedor;

export function mostrarRegistros() {
  contenedor = document.createElement("div");
  contenedor.className = "registros";
  renderizarRegistros();
  return contenedor;
}

export function renderizarRegistros() {
  if (!contenedor) return;
  contenedor.innerHTML = ""; // Limpiar anterior

  const registros = obtenerRegistros();

  registros.forEach((reg, index) => {
    const div = document.createElement("div");
    div.className = "registro-item";

    const texto = document.createElement("span");
    texto.textContent = `${reg.nombre} - ${reg.edad} años`;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", () => {
      eliminarRegistro(index);
      renderizarRegistros();
    });

    div.appendChild(texto);
    div.appendChild(btnEliminar);
    contenedor.appendChild(div);
  });
}
