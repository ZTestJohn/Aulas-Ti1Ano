// https://pauloreal.medium.com/saiba-o-porque-voce-deveria-evitar-o-else-no-seu-codigo-792c8abc5683

function print(a) {
  window.alert(a);
}

function ifElse({ se, seResult, senaoResult }) {
  if (se) {
    return seResult();
  }
  return senaoResult();
}
// =======================================

// const input = Number(window.prompt("Digite o número: "))
// if(input % 2 === 0){
//     window.alert("Par")
// }
// if (!(input % 2 === 0)){
//     window.alert("Ímpar")
// }

// const input = Number(window.prompt("Digite a sua idade: "));
// if (input < 18) {
//   print("Menor de idade");
// }
// if (input >= 18) {
//     print("Maior de idade");
// }

// const input = Number(window.prompt("Digite o valor da compra: "));
// ifElse({
//     se: input > 100,
//     seResult: () => print(`O Valor total foi de ${input - input * 0.1}`),
//     senaoResult: () => print(`O valor total foi de ${input}`)
// });
// ===============================================
// const input = Number(window.prompt("Digite o número: "));

// ifElse({
//     se: (input > 0),
//     seResult:() => print("Positivo"),
//     senaoResult: () => {
//         if (input === 0){
//             return(print("Zero"))
//         }
//         return(print("Negativo"))
//     }
// })

// let result = 0;
// for (let i = 0; i < 3; i++) {
//   const input = Number(window.prompt("Digite o número: "));
//   result += input;
// }
// result = result / 3
// if (result >= 7 ){
//     print("Aprovado")
// }

// const input = Number(window.prompt("Digite a sua idade: "));

// ifElse({
//     se: (input >= 18),
//     seResult: () => print("Adulto"),
//     senaoResult: () => {
//         if (input <=12){
//             return(print("Criança"))
//         }
//         return(print(
//             'Adolescente'
//         ))
//     }
// })

const num1 = Number(window.prompt("Digite o número1: "))
const num2 = Number(window.prompt("Digite o número2: "))
const operador = Number(window.prompt("Digite o operador: (+ , - , * , / )"))
print(eval(`num1${operador}num2`))
