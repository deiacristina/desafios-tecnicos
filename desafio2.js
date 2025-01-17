function pertenceFibonacci(numero) {
    let a = 0, b = 1, temp;

    while (b <= numero) {
        if (b === numero) {
            return `O número ${numero} pertence à sequência de Fibonacci.`;
        }
        temp = b;
        b = a + b;
        a = temp;
    }

    return `O número ${numero} não pertence à sequência de Fibonacci.`;
}

let entrada = prompt("Digite um número:");
let numero = parseInt(entrada, 10);

if (isNaN(numero)) {
    console.log("Por favor, insira um número válido.");
} else {
    console.log(pertenceFibonacci(numero));
}