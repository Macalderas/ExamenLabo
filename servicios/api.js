const BASE_URL = "http://localhost:3000/api/registros";

// Obtener todos los registros
export async function obtenerRegistros() {
  const res = await fetch(BASE_URL);
  return await res.json();
}

// Guardar un nuevo registro
export async function guardarRegistro(registro) {
  await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(registro)
  });
}

// Eliminar un registro por ID
export async function eliminarRegistro(id) {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
}
