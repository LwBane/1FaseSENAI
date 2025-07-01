// 11. Crie um array com 5 nomes e mostre apenas os que têm mais de 4 letras.

const nomes = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];
const nomesComMaisDe4Letras = nomes.filter(nome => nome.length > 4);
console.log(nomesComMaisDe4Letras); // Resultado: ["Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"]

