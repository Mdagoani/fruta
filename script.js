let fruta = 'fruta'

fruta = prompt('Nome da fruta')

switch (fruta) {
    case 'maçã':
        alert('Não vendemos esta fruta aqui')
        break;
    case 'kiwi':
        alert('Estamos em escassez de kiwi')
        break;
    case 'melancia':
        alert('Aqui está, é 3 reais o kg')
        break;
    default:
        alert('Recarregue a página para outra tentativa')    
}