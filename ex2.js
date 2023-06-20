let color = prompt('Digite o nome de uma cor (em inglês) para que possa ser traduzida (OPÇÕES VÁLIDAS: red, blue, yellow, green, purple):')

switch (color) {
    case 'red':
    case 'Red':
    case 'RED':
        alert(`A cor escolhida foi VERMELHA (${color}).`)
        break;
    case 'blue':
    case 'Blue':
    case 'BLUE':
        alert(`A cor escolhida foi AZUL (${color}).`)
        break;
    case 'yellow':
    case 'Yellow':
    case 'YELLOW':
        alert(`A cor escolhida foi AMARELO (${color}).`)
        break;
    case 'green':
    case 'Green':
    case 'GREEN':
        alert(`A cor escolhida foi VERDE (${color}).`)
        break;
    case 'purple':
    case 'Purple':
    case 'PURPLE':
        alert(`A cor escolhida foi ROXO (${color}).`)
        break;
    default:
        alert(`Cor válida não foi encontrada ou a caixa alta foi usada de forma equigrvocada.`)
}