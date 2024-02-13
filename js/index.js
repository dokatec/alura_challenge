let textareaElement = document.querySelector(".conteudo textarea");
let pElement = document.querySelector(".retangulo p");
let imgElement = document.querySelector(".retangulo img");
let headerElement = document.querySelector(".retangulo h3");
let buttonElement = document.getElementById("btn-clip");
let buttonElementDesc = document.getElementById("btn-desc");

let retanguloElement = document.querySelector(".retangulo");

function criptografar() {
  buttonElement.addEventListener("click", () => {
    headerElement.textContent = "Texto Codificado!";
    texto = textareaElement.value;
    resultado = texto
      .replace(/a/g, "#qzwsx")
      .replace(/e/g, "dcrfv@")
      .replace(/i/g, "tgbyh!")
      .replace(/o/g, "njmkl%")
      .replace(/u/g, "&pçzxc");

    pElement.textContent = resultado;
  });
}

function descriptografar() {
  buttonElementDesc.addEventListener("click", () => {
    texto = textareaElement.value;
    resultado = texto
      .replace(/#qzwsx/g, "a")
      .replace(/dcrfv@/g, "e")
      .replace(/tgbyh!/g, "i")
      .replace(/njmkl%/g, "o")
      .replace(/&pçzxc/g, "u");

    pElement.textContent = resultado;
  })
}

function remove() {
  if (pElement.value) {
    imgElement.parentNode.removeChild(imgElement);
  } else {

  }
} 
