const painel1 = document.getElementById("painel1");
const painel2 = document.getElementById("painel2");
const painel3 = document.getElementById("painel3");
const painel4 = document.getElementById("painel4");
const painel5 = document.getElementById("painel5");
const painel6 = document.getElementById("painel6");
const painel7 = document.getElementById("painel7");
const painelFinal = document.getElementById("painelFinal");

const btn1 = document.getElementById('btn1');

const btn2Voltar = document.getElementById('btn2Voltar');
const btn2Proxima = document.getElementById('btn2Proxima');

const btn3Voltar = document.getElementById('btn3Voltar');
const btn3Proxima = document.getElementById('btn3Proxima');

const btn4Voltar = document.getElementById('btn4Voltar');
const btn4Proxima = document.getElementById('btn4Proxima');

const btn5Voltar = document.getElementById('btn5Voltar');
const btn5Proxima = document.getElementById('btn5Proxima');

const btn6Voltar = document.getElementById('btn6Voltar');
const btn6Proxima = document.getElementById('btn6Proxima');

const btn7Voltar = document.getElementById('btn7Voltar');
const btn7Proxima = document.getElementById('btn7Proxima');

const btnFinal = document.getElementById('btnFinal');

document.addEventListener('DOMContentLoaded', function () {
    painel2.style.backgroundImage = "url('img/PrimeiraFoto.jpeg')";
    painel2.style.backgroundSize = "cover";

    painel3.style.backgroundImage = "url('img/BackGroundImage.jpeg')";

    painel4.style.backgroundImage = "url('img/Date.jpeg')";

    painel5.style.backgroundImage = "url('img/Natal.jpeg')";

    painel6.style.backgroundImage = "url('img/AnoNovo.jpeg')";

    painel7.style.backgroundImage = "url('img/Date2.jpeg')";

    painelFinal.style.backgroundImage = "url('img/ultimoDesenho.jpeg')";
    painelFinal.style.backgroundSize = "cover";
});

btn1.addEventListener("click", function(){
    painel1.classList.remove('active');
    painel2.classList.add('active');
})

btn2Voltar.addEventListener('click', function() {
    painel2.classList.remove('active');
    painel1.classList.add('active');
});

btn2Proxima.addEventListener("click", function(){
    painel2.classList.remove('active');
    painel3.classList.add('active');
})

btn3Voltar.addEventListener('click', function() {
    painel3.classList.remove('active');
    painel2.classList.add('active');
});

btn3Proxima.addEventListener("click", function(){
    painel3.classList.remove('active');
    painel4.classList.add('active');
})

btn4Voltar.addEventListener('click', function() {
    painel4.classList.remove('active');
    painel3.classList.add('active');
});

btn4Proxima.addEventListener("click", function(){
    painel4.classList.remove('active');
    painel5.classList.add('active');
})

btn5Voltar.addEventListener('click', function() {
    painel5.classList.remove('active');
    painel4.classList.add('active');
});

btn5Proxima.addEventListener("click", function(){
    painel5.classList.remove('active');
    painel6.classList.add('active');
})

btn6Voltar.addEventListener('click', function() {
    painel6.classList.remove('active');
    painel5.classList.add('active');
});

btn6Proxima.addEventListener("click", function(){
    painel6.classList.remove('active');
    painel7.classList.add('active');
})

btn7Voltar.addEventListener('click', function() {
    painel7.classList.remove('active');
    painel6.classList.add('active');
});

btn7Proxima.addEventListener("click", function(){
    painel7.classList.remove('active');
    painelFinal.classList.add('active');
})

btnFinal.addEventListener('click', function() {
    painelFinal.classList.remove('active');
    painel7.classList.add('active');
});
