let bodyElement = document.querySelector("body");
let textareaElement = document.querySelector(".conteudo textarea");
let retanguloElement = document.querySelector(".retangulo");
let pElement = document.querySelector(".retangulo p");
let headerElement = document.querySelector(".retangulo h3");
let buttonElement = document.getElementById("btn-clip");
let buttonElementDesc = document.getElementById("btn-desc");
let buttonElementCopiar = document.getElementById("btn-copiar");
let imgElement = document.querySelector(".retangulo img");

function criptografar() {
  if (textareaElement.value) {
    removeImg();
    headerElement.textContent = "Texto Criptografado!";
    texto = textareaElement.value;
    resultado = texto
      .replace(/a/g, "#qzw")
      .replace(/e/g, "dfv@")
      .replace(/i/g, "tyh!")
      .replace(/o/g, "jmk%")
      .replace(/u/g, "&pzc");

    pElement.textContent = resultado;
  } else {
    alert("Você precisar digitar o texto para criptografar");
  }
}

function descriptografar() {
  if (textareaElement.value) {
    removeImg();
    headerElement.textContent = "Texto Descriptografado!";
    texto = textareaElement.value;
    resultado = texto
      .replace(/#qzw/g, "a")
      .replace(/dfv@/g, "e")
      .replace(/tyh!/g, "i")
      .replace(/jmk%/g, "o")
      .replace(/&pzc/g, "u");

    pElement.textContent = resultado;
  } else {
    alert("Você precisar copiar o texto para descriptografar");
  }
}

function copyToClipBoard() {
  if (textareaElement.value) {
    removeImg();
    textToCopy = pElement.textContent;
    navigator.clipboard.writeText(textToCopy);
    textareaElement.value = textToCopy;
  } else {
    alert("Você não texto na area de criptografia para copiar!");
  }
}

function removeImg() {
  imgElement.remove();
}
