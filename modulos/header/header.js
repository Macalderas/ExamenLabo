export function headerComponente() {
    const header = document.createElement("header");
    header.className = "header";
  
    const titulo = document.createElement("h1");
    titulo.textContent = "Registro";
  
    header.appendChild(titulo);
    return header;
  }
  