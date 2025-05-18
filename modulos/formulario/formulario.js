import { guardarRegistro } from "../../servicios/api.js";
import {renderizarRegistros} from "../registros/mostrarRegistro.js"

export function formularioComponente() {
  const form = document.createElement("form");
  form.className = "formulario";

  const inputNombre = document.createElement("input");
  inputNombre.placeholder = "Nombre";
  inputNombre.required = true;

  const inputEdad = document.createElement("input");
  inputEdad.placeholder = "Edad";
  inputEdad.type = "number";
  inputEdad.required = true;

  const btnRegistrar = document.createElement("button");
  btnRegistrar.type = "submit";
  btnRegistrar.textContent = "Registrar";

  form.appendChild(inputNombre);
  form.appendChild(inputEdad);
  form.appendChild(btnRegistrar);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = inputNombre.value.trim();
    const edad = parseInt(inputEdad.value);

    if (nombre && edad) {
      guardarRegistro({ nombre, edad });
      inputNombre.value = "";
      inputEdad.value = "";
      renderizarRegistros(); // actualiza la lista
    }
  });

  return form;
}
