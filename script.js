let expressao = '';
let resultado = false;

function adicionarNumero(numero) {
    if (resultado) {
        expressao = '';
        resultado = false;
    }
    expressao += numero;
    atualizarDisplay();
}

function adicionarPonto() {
    if (resultado) {
        expressao = '0.';
        resultado = false;
    } else if (!expressao.includes('.')) {
        expressao += '.';
    }
    atualizarDisplay();
}

function operacao(op) {
    if (resultado) {
        resultado = false;
    }
    if (op === 'sqrt' && expressao !== '') {
        expressao = Math.sqrt(parseFloat(expressao)).toString();
        efeitoExplosao();
    } else if (op === '%') {
        expressao = (parseFloat(expressao) / 100).toString();
        efeitoExplosao();
    } else {
        expressao += ' ' + op + ' ';
    }
    atualizarDisplay();
}

function calcular() {
    try {
        expressao = eval(expressao).toString();
        resultado = true;
        efeitoExplosao();
    } catch {
        expressao = 'Erro';
    }
    atualizarDisplay();
}

function limpar() {
    expressao = '';
    atualizarDisplay();
}

function atualizarDisplay() {
    document.getElementById('display').innerText = expressao;
}

function efeitoExplosao() {
    const display = document.getElementById('display');
    display.classList.add('explosao');
    setTimeout(() => display.classList.remove('explosao'), 500);
}
