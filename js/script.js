document.getElementById("botaoEnviar").addEventListener("click", validaformulario)

function validaformulario(){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;  

    if(nome != "" && email != "" && telefone != ""){
        alert("Cadastro realizado com sucesso!! Você receberá as novidades por email.")    
    }else{
        alert("Por favor, preencha os campos nome e email!")
    }
}

let slides = document.querySelectorAll('.slide');
let indice = 0;

document.querySelector('.next').addEventListener('click', () => {
    slides[indice].classList.remove('ativo');
    indice = (indice + 1) % slides.length;
    slides[indice].classList.add('ativo');
});

document.querySelector('.prev').addEventListener('click', () => {
    slides[indice].classList.remove('ativo');
    indice = (indice - 1 + slides.length) % slides.length;
    slides[indice].classList.add('ativo');
});