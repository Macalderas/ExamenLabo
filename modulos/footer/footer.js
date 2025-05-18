export function footerComponente() {
    const footer = document.createElement("footer");
    footer.className = "footer";
  
    const texto = document.createElement("p");
    texto.textContent = "© 2025 Sitio Web Simple";
  
    footer.appendChild(texto);
    return footer;
  }
  