const CLAVE = "registros";

export function obtenerRegistros() {
  return JSON.parse(localStorage.getItem(CLAVE)) || [];
}

export function guardarRegistro(registro) {
  const registros = obtenerRegistros();
  registros.push(registro);
  localStorage.setItem(CLAVE, JSON.stringify(registros));
}

export function eliminarRegistro(index) {
  const registros = obtenerRegistros();
  registros.splice(index, 1);
  localStorage.setItem(CLAVE, JSON.stringify(registros));
}
