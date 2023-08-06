
var valor;
var opcao = 'cafe';
switch (opcao) {
    case 'cafe':
        valor = 2.50;
        break;
    case 'leite':
        valor = 3.00;
        break;
    case 'cha':
        valor = 2.00;
        break;
    default:
        console.log("Escolha inválida. Por favor, selecione entre café, leite ou chá.");
        return;
}



console.log("Você escolheu " + opcao + ". O valor a ser pago é R$" + valor.toFixed(2) + ".");