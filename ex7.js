let animais = ['Cachorro', 'Gato', 'Tartaruga', 'Capivara', 'Lebre', 'Lagartixa']

function adicionarElemento (array, elemento) {
    array.push(elemento);
    return array;
}

function removerUltimoElemento (array) {
    array.pop();
    return array;
}

function removerElementosIntervalo (array, inicial, final) {
    console.log(array.slice(inicial, final));
    return;
}

adicionarElemento(animais, 'Jacaré');
console.log(animais);

removerUltimoElemento(animais);
console.log(animais);

removerElementosIntervalo(animais, 1, 3);