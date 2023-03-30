alert("Borá fazer um desafio!?")
let primaryNumber = prompt("Digite o primeiro número: ")
let secondNumber = prompt("Digita o segundo número: ")
primaryNumber = Number(primaryNumber)
secondNumber = Number(secondNumber)

let sum = primaryNumber + secondNumber
alert(`A soma dos dois números; ${sum}`)
let sub = primaryNumber - secondNumber
alert(`A subtração dos dois números; ${sub}`)
let mult = primaryNumber * secondNumber
alert(`A multiplicação dos dois números; ${mult}`)
let divi = primaryNumber / secondNumber
alert(`A divisão dos dois números; ${divi.toFixed(1)}`)
let rest = primaryNumber % secondNumber
alert(`O resto da divisão dos dois números; ${rest}`)

let evenCheck = sum % 2
if(evenCheck == 0){
    alert(`A soma dos dois números e Par: ${sum}`)
}else{
    alert(`A soma dos dois números e Ímpar: ${sum}`)
}

if(secondNumber == primaryNumber){
    alert("Os números inseridos são iguais.")
}else{
    alert("Os números inseridos diferentes")
}