function inverterString(s) {
    let stringInvertida = '';
    for (let i = s.length - 1; i >= 0; i--) {
        stringInvertida += s[i];
    }
    return stringInvertida;
}

const entrada = prompt("Digite uma string para inverter: ");
const resultado = inverterString(entrada);
console.log("String invertida:", resultado);