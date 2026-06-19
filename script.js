var titulo2 = document.querySelector("h2")
titulo2.textContent = "Clientes";

let paciente = document.querySelector("#primeiro-paciente");
let tdPeso = paciente.querySelector(".info-peso");
let valorPeso = tdPeso.textContent;

/*acecando a tag td da altura e buscando a altura* */
let tdAltura = paciente.querySelector(".info-peso");
let valorAltura = tdAltura.textContent;

/*Equação para calculo do IMC* */
let imc = valorPeso / (valorAltura * valorAltura)

/**adição do valor Imc na tabela */
let tdImc = paciente.querySelector('.info-imc');
tdImc.textContent = imc

/**Estrutura de verificação de peso e altura */
if(valorPeso < 0 || valorPeso > 350){
    alert("Peso Inválido!");


}
if(valorAltura < 0 || valorAltura > 3.000){
    alert("Altura Inválida!");


}
