let res = 0;

function Calculadora (n1, n2, operador) {
    if (operador === '+') return n1 + n2;
    if (operador === '-') return n1 - n2;
    if (operador === '*') return n1 * n2;
    if (operador === '/') return n1 / n2;
    if (operador === '%') return n1 % n2;
    if (operador === '**') return n1 ** n2;
}

console.log(Calculadora(5, 3, '+'))
console.log(Calculadora(5, 3, '-'))
console.log(Calculadora(5, 3, '*'))
console.log(Calculadora(5, 3, '/'))
console.log(Calculadora(5, 3, '%'))
console.log(Calculadora(5, 3, '**'))