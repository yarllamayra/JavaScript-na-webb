

// const notas = [10, 8.5, 5, 6.5, 8, 7.5]


// // for classico

// for (let i = 0; i < 5; i++) {
//     alert(`i é igual a ${i}`)

// } // i== 0 -> i==1 -> i==2 -> i==3 -> i==4 -> i==5


// const notas = [10, 8.5, 5, 6.5, 8, 7.5];

// // primeira expressão executa apenas uma vez
// // segunda expressão: condição de execução
// // terceira exepressão: executada sempre ao final de um bloco

// for (let indice = 0; indice < notas.length; indice++) {
//     alert(`indice: ${indice} | Nota: ${ notas[indice]}`)
// }

const notas = [10, 8.5, 5, 6.5, 8, 7.5];

let somaDasNotas = 0;

//calcule a media das notas usando o laço for:

for (let indice = 0; indice < notas.length; indice++){
    somaDasNotas = somaDasNotas + notas[indice]
    
    const media = (somaDasNotas)/notas.length
}