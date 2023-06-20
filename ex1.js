let idade = prompt('Informe sua idade em anos: ')

if (idade <= 12 && idade > 0) {
    alert(`Você tem ${idade} anos, portando, é uma criança.`)
} else if (idade >= 13 && idade <= 17) {
    alert(`Você tem ${idade} anos, portando, é um adolescente.`)
} else if (idade >= 18 && idade <= 59) {
    alert(`Você tem ${idade} anos, portando, é um adulto.`)
} else if (idade >= 60) {
    alert(`Você tem ${idade} anos, portando, é um idoso.`)
} else {
    alert(`A idade digitada (${idade}) não é válida.`)
}