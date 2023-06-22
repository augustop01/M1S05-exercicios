let a = 0;

let objetos = [{
    nome: 'detergente',
    preco: 5.50
},
{
    nome: 'sabão',
    preco: 3.75
},{
    nome: 'garfo',
    preco: 4.50
},
{
    nome: 'esponja',
    preco: 2.30
}]

for(let i = 0; i < 4; i++) {
    a += objetos[i].preco;
}

objetos.forEach(objeto => console.log(objeto)) 

console.log(`O total de produtos é: ${objetos.length}.`)

console.log(`O preço total dos produtos é de: R$${a}.`)
