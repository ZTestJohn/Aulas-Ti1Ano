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

// const num1 = Number(window.prompt("Digite o número1: "))
// const num2 = Number(window.prompt("Digite o número2: "))
// const operador = window.prompt("Digite o operador: (+ , - , * , / )")
// print(eval(`${num1}${operador}${num2}`))

// const peso = Number(window.prompt("Digite seu peso (kg): "));
// const altura = Number(window.prompt("Digite sua altura (m): "));
// const imc = peso / (altura * altura);

// return ifElse({
//   se: imc < 18.5,
//   seResult: () => "Abaixo do Peso",
//   senaoResult: () =>
//     ifElse({
//       se: imc < 25,
//       seResult: () => "Peso Normal",
//       senaoResult: () =>
//         ifElse({
//           se: imc < 30,
//           seResult: () => "Sobrepeso",
//           senaoResult: () => "Obesidade",
//         }),
//     }),
// });

// const nota = Number(window.prompt("Digite uma nota de 0 a 100: "));
// return ifElse({
//   se: nota >= 90,
//   seResult: () => "Nota A",
//   senaoResult: () =>
//     ifElse({
//       se: nota >= 80,
//       seResult: () => "Nota B",
//       senaoResult: () =>
//         ifElse({
//           se: nota >= 70,
//           seResult: () => "Nota C",
//           senaoResult: () =>
//             ifElse({
//               se: nota >= 60,
//               seResult: () => "Nota D",
//               senaoResult: () => "Nota F",
//             }),
//         }),
//     }),
// });

// const a = Number(window.prompt("Digite o valor de a: "));
// const b = Number(window.prompt("Digite o valor de b: "));
// const c = Number(window.prompt("Digite o valor de c: "));
// const delta = b * b - 4 * a * c;

// return ifElse({
//   se: delta < 0,
//   seResult: () => "As raízes são imaginárias",
//   senaoResult: () => {
//     const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
//     const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
//     return `x1: ${raiz1.toFixed(2)} x2:${raiz2.toFixed(2)}`;
//   },
// });

// const lado1 = Number(window.prompt("Digite o lado 1: "));
// const lado2 = Number(window.prompt("Digite o lado 2: "));
// const lado3 = Number(window.prompt("Digite o lado 3: "));

// function tipoTriangulo() {
//   return ifElse({
//     se: lado1 === lado2 && lado2 === lado3,
//     seResult: () => "Equilátero",
//     senaoResult: () =>
//       ifElse({
//         se: lado1 === lado2 || lado1 === lado3 || lado2 === lado3,
//         seResult: () => "Isósceles",
//         senaoResult: () => "Escaleno",
//       }),
//   });
// }

// print(
//   ifElse({
//     se: lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1,
//     seResult: () => "Forma um triângulo " + tipoTriangulo(),
//     senaoResult: () => "Não forma um triângulo",
//   })
// );

// const capital = Number(window.prompt("Digite o capital inicial: "));
// const taxa = Number(window.prompt("Digite a taxa de juros (%): ")) / 100;
// const tempo = Number(window.prompt("Digite o tempo (meses): "));
// const juros = capital * taxa * tempo;

// print("O valor dos juros é " + juros.toFixed(2));

// const ano = Number(window.prompt("Digite um ano: "));

// print(
//   ifElse({
//     se: ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0),
//     seResult: () => "É bissexto",
//     senaoResult: () => "Não é bissexto",
//   })
// );

// const numero = Number(window.prompt("Digite um número: "));
// const raiz = Math.sqrt(numero);

// print(
//   ifElse({
//     se: raiz % 1 === 0,
//     seResult: () => "A raiz exata é " + raiz,
//     senaoResult: () => "A raiz aproximada é " + raiz.toFixed(2),
//   })
// );

// const numero = Number(window.prompt("Digite um número: "));

// function isPrimo(n) {
//   return ifElse({
//     se: n <= 1,
//     seResult: () => false,
//     senaoResult: () => {
//       for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) return false;
//       }
//       return true;
//     },
//   });
// }

// print(
//   ifElse({
//     se: isPrimo(numero),
//     seResult: () => "É primo",
//     senaoResult: () => "Não é primo",
//   })
// );

// const numero = Number(window.prompt("Digite um número: "));
// let fatorial = 1;

// for (let i = 1; i <= numero; i++) {
//   fatorial *= i;
// }

// print(
//   ifElse({
//     se: fatorial < 10000,
//     seResult: () => "O fatorial é " + fatorial,
//     senaoResult: () => "O número é grande demais",
//   })
// );

// const peso = Number(window.prompt("Digite seu peso (kg): "));
// const altura = Number(window.prompt("Digite sua altura (m): "));
// const imc = peso / (altura * altura);

// function classificar() {
//   return ifElse({
//     se: imc < 18.5,
//     seResult: () => "Abaixo do Peso",
//     senaoResult: () =>
//       ifElse({
//         se: imc < 24.9,
//         seResult: () => "Peso Normal",
//         senaoResult: () =>
//           ifElse({
//             se: imc < 29.9,
//             seResult: () => "Sobrepeso",
//             senaoResult: () => "Obesidade",
//           }),
//       }),
//   });
// }

// const pesoIdealMin = 18.5 * (altura * altura);
// const pesoIdealMax = 24.9 * (altura * altura);

// print("Classificação: " + classificar());
// print(
//   "Peso ideal entre: " +
//     pesoIdealMin.toFixed(2) +
//     "kg e " +
//     pesoIdealMax.toFixed(2) +
//     "kg"
// );
