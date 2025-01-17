const faturamento = [0, 1200, 1500, 0, 0, 2000, 3000, 0, 2500, 0, 4000, 0, 0, 0, 0, 0, 3500];

// Filtrar dias com faturamento válido
const diasValidos = faturamento.filter(valor => valor > 0);

const menorValor = Math.min(...diasValidos);
const maiorValor = Math.max(...diasValidos);
const mediaMensal = diasValidos.reduce((acc, val) => acc + val, 0) / diasValidos.length;
const diasAcimaMedia = diasValidos.filter(valor => valor > mediaMensal).length;

console.log("Menor valor de faturamento:", menorValor);
console.log("Maior valor de faturamento:", maiorValor);
console.log("Dias com faturamento acima da média mensal:", diasAcimaMedia);
