let number1 = prompt("Digite o primeiro número:")
let number2 = prompt("Digite o segundo número:")
sum = Number(number1) + Number(number2)
sub = Number(number1) - Number(number2)
mult = Number(number1) * Number(number2)
div = Number(number1) / Number(number2)
rest = Number(number1) % Number(number2)
alert("A soma é: " + sum)
alert("A subtração é: " + sub)
alert("A multiplicação é: " + mult)
alert("A divisão é: " + div)
alert("O resto da divisão é: " + rest)
if (sum % 2 == 0) {
  alert("A soma dos dois números é par: " + sum)
} else {
  alert("A soma dos dois números é ímpar: " + sum)
}
if (number1 == number2) {
  alert("Os números inseridos são iguais")
} else {
  alert("Os números inseridos são diferentes")
}