let textareaElement = document.querySelector(".conteudo textarea");
let pElement = document.querySelector(".retangulo p");
let imgElement = document.querySelector(".retangulo img");
let headerElement = document.querySelector(".retangulo h3");
let buttonElement = document.getElementById("btn-clip");

function criptografar() {
  buttonElement.addEventListener("click", () => {
    headerElement.textContent = "Texto Codificado!";
    texto = textareaElement.value;
    resultado = texto
      .replace(/a/g, "=asd")
      .replace(/e/g, "@bnm")
      .replace(/i/g, "+iop")
      .replace(/o/g, ".opq")
      .replace(/u/g, "çuyt");

    pElement.textContent = resultado;
  });
}

function remove() {
  imgElement.parentNode.removeChild(imgElement);
}
