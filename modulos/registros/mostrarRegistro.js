import { obtenerRegistros, eliminarRegistro } from "../../servicios/api.js";

let contenedor;

export function mostrarRegistros() {
  contenedor = document.createElement("div");
  contenedor.className = "registros";
  renderizarRegistros();
  return contenedor;
}

export async function renderizarRegistros() {
  if (!contenedor) return;
  contenedor.innerHTML = "";

  const registros = await obtenerRegistros();

  registros.forEach((reg) => {
    const div = document.createElement("div");
    div.className = "registro-item";

    const texto = document.createElement("span");
    texto.textContent = `${reg.nombre} - ${reg.edad} años`;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", () => {
      eliminarRegistro(reg.id).then(renderizarRegistros);
    });

    div.appendChild(texto);
    div.appendChild(btnEliminar);
    contenedor.appendChild(div);
  });
}
