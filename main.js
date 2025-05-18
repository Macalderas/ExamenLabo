import {headerComponente} from "./modulos/header/header.js"
import { formularioComponente } from "./modulos/formulario/formulario.js";
import { mostrarRegistros } from "./modulos/registros/mostrarRegistro.js";
import { footerComponente } from "./modulos/footer/footer.js";

const root = document.getElementById('root');

root.appendChild(headerComponente());
root.appendChild(formularioComponente());
root.appendChild(mostrarRegistros());
root.appendChild(footerComponente());
