// Entrada - variáveis 
// Média aritmética de 3 notas, é menor 3 horrivel
// menor que 7 da para melhorar, maior 7 gênio

const nota1 = prompt("Digite a 1ª nota")
const nota2 = prompt("Digite a 2ª nota")
const nota3 = Number(prompt("Digite a 3ª nota"))

// Processamento
//const soma = Number(nota1) + Number(nota2) + Number(nota3) outra forma de colocar tudo como Número

const soma = Number(nota1) + Number(nota2) + nota3
const media = soma / 3


// media menor que 3
// media menor que 7
// media maior que 7
//{} significa bloco de comando

if (media < 3) {

    alert("Média é insuficiente: " + media + " - Horrível")

} else if (media < 7) {

    alert("Média é insuficiente: " + media + " - Da para melhorar")

} else {

    alert("Média suficiente: " + media + " - Parabéns")

}