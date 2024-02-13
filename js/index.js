function encrypt() {
    let textareaElement = document.querySelector(".conteudo textarea").value;

    let imgElement = document.querySelector('.retangulo img');
    imgElement.parentNode.removeChild(imgElement);
    /*
        let pelement = document.querySelector('.retangulo p');
        pelement.parentNode.removeChild(pelement);
    */
    let encrypted = CryptoJS.AES.encrypt(textareaElement, "password");
    document.querySelector('.retangulo p').innerHTML = encrypted;
}

function decrypt() {

    let headerElement = document.querySelector(".conteudo textarea").value
    // let headerElement = document.querySelector('.retangulo h1').innerHTML;
    let decrypted = CryptoJS.AES.decrypt(headerElement, "password");
    document.querySelector('.retangulo h3').innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
}















