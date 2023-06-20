let num = prompt("Digite um número natural maior que 0: ");
let isPrimo = true;

if (num > 0) {
  for (let i = 2; i < num/2; i++) {
    if (num % i == 0) {
    isPrimo = false;
    break;
    }
  }
} else {
  alert(`${num} não é um número válido.`);
}

if (isPrimo) {
  alert(`O número ${num} é Primo!`);
} else if (!isPrimo) {
  alert(`O número ${num} NÃO é Primo!`);
}