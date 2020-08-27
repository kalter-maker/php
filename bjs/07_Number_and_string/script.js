let lastOperand = 0;
let operation = null;
let result = 0.0;

const inputWindow = document.getElementById('inputWindow');
inputWindow.value = '0';


document.getElementById('btn_clr').addEventListener('click', function() {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '0';
    document.getElementById('interface').textContent = '';
})

// 1 строка кнопок

document.getElementById('btn_1').addEventListener('click', function() {
    if (inputWindow.value === '0') {
        inputWindow.value = '1';
    } else {
        inputWindow.value += '1';
    }
    document.getElementById('interface').textContent += '1';
})

document.getElementById('btn_2').addEventListener('click', function() {
    if (inputWindow.value === '0') {
        inputWindow.value = '2';
    } else {
        inputWindow.value += '2';
    }
    document.getElementById('interface').textContent += '2';
})

document.getElementById('btn_3').addEventListener('click', function() {
    if (inputWindow.value === '0') {
        inputWindow.value = '3';
    } else {
        inputWindow.value += '3';
    }
    document.getElementById('interface').textContent += '3';
})

document.getElementById('btn_sum').addEventListener('click', function() {
    switch (operation) {
        case 'sum':
            lastOperand += parseFloat(inputWindow.value);
            break;
        case 'def':
            lastOperand -= parseFloat(inputWindow.value);
            break;
        case 'multiplication':
            lastOperand *= parseFloat(inputWindow.value);
            break;
        case 'division':
            lastOperand /= parseFloat(inputWindow.value);
            break;
        default:
            lastOperand = parseFloat(inputWindow.value);
            break;
    }
    operation = 'sum';
    inputWindow.value = '0';
    document.getElementById('interface').textContent += '+';
})

// 2 строка кнопок

document.getElementById('btn_4').addEventListener('click', function() {
    if (inputWindow.value === '0') {
        inputWindow.value = '4';
    } else {
        inputWindow.value += '4';
    }
    document.getElementById('interface').textContent += '4';
})

document.getElementById('btn_5').addEventListener('click', function() {
    if (inputWindow.value === '0') {
        inputWindow.value = '5';
    } else {
        inputWindow.value += '5';
    }
    document.getElementById('interface').textContent += '5';
})

document.getElementById('btn_6').addEventListener('click', function() {
    if (inputWindow.value === '0') {
        inputWindow.value = '6';
    } else {
        inputWindow.value += '6';
    }
    document.getElementById('interface').textContent += '6';
})

document.getElementById('btn_def').addEventListener('click', function() {
    switch (operation) {
        case 'sum':
            lastOperand += parseFloat(inputWindow.value);
            break;
        case 'def':
            lastOperand -= parseFloat(inputWindow.value);
            break;
        case 'multiplication':
            lastOperand *= parseFloat(inputWindow.value);
            break;
        case 'division':
            lastOperand /= parseFloat(inputWindow.value);
            break;
        default:
            lastOperand += parseFloat(inputWindow.value);
            break;
    }
    operation = 'def';
    inputWindow.value = '0';
    document.getElementById('interface').textContent += '-';
})

// 3 строка кнопок

document.getElementById('btn_7').addEventListener('click', function() {
    if (inputWindow.value === '0') {
        inputWindow.value = '7';
    } else {
        inputWindow.value += '7';
    }
    document.getElementById('interface').textContent += '7';
})

document.getElementById('btn_8').addEventListener('click', function() {
    if (inputWindow.value === '0') {
        inputWindow.value = '8';
    } else {
        inputWindow.value += '8';
    }
    document.getElementById('interface').textContent += '8';
})

document.getElementById('btn_9').addEventListener('click', function() {
    if (inputWindow.value === '0') {
        inputWindow.value = '9';
    } else {
        inputWindow.value += '9';
    }
    document.getElementById('interface').textContent += '9';
})

document.getElementById('btn_multiplication').addEventListener('click', function() {
    switch (operation) {
        case 'sum':
            lastOperand += parseFloat(inputWindow.value);
            break;
        case 'def':
            lastOperand -= parseFloat(inputWindow.value);
            break;
        case 'multiplication':
            lastOperand *= parseFloat(inputWindow.value);
            break;
        case 'division':
            lastOperand /= parseFloat(inputWindow.value);
            break;
        default:
            lastOperand = parseFloat(inputWindow.value);
            break;
    }
    operation = 'multiplication';
    inputWindow.value = '0';
    document.getElementById('interface').textContent += '*';
})

// 4 строка кнопок

document.getElementById('btn_calc').addEventListener('click', function() {
    switch (operation) {
        case 'sum':
            lastOperand += parseFloat(inputWindow.value);
            break;
        case 'def':
            lastOperand -= parseFloat(inputWindow.value);
            break;
        case 'multiplication':
            lastOperand *= parseFloat(inputWindow.value);
            break;
        case 'division':
            lastOperand /= parseFloat(inputWindow.value);
            break;
        default:
            lastOperand = parseFloat(inputWindow.value);
            break;
    }
    operation = 'calc';
    inputWindow.value = lastOperand.toString();
})

document.getElementById('btn_0').addEventListener('click', function() {
    if (inputWindow.value === '0') {} else {
        inputWindow.value += '0';
        document.getElementById('interface').textContent += '0';
    }
})

document.getElementById('btn_sqrt').addEventListener('click', function() {
    switch (operation) {
        case 'sum':
            lastOperand += parseFloat(inputWindow.value);
            break;
        case 'def':
            lastOperand -= parseFloat(inputWindow.value);
            break;
        case 'multiplication':
            lastOperand *= parseFloat(inputWindow.value);
            break;
        case 'division':
            lastOperand /= parseFloat(inputWindow.value);
            break;
        default:
            lastOperand = parseFloat(inputWindow.value);
            break;
    }
    operation = 'sqrt';
    lastOperand = Math.sqrt(lastOperand);
    inputWindow.value = lastOperand.toString();
    document.getElementById('interface').textContent = `sqrt(${lastOperand**2})`;
})

document.getElementById('btn_division').addEventListener('click', function() {
    switch (operation) {
        case 'sum':
            lastOperand += parseFloat(inputWindow.value);
            break;
        case 'def':
            lastOperand -= parseFloat(inputWindow.value);
            break;
        case 'multiplication':
            lastOperand *= parseFloat(inputWindow.value);
            break;
        case 'division':
            lastOperand /= parseFloat(inputWindow.value);
            break;
        default:
            lastOperand = parseFloat(inputWindow.value);
            break;
    }
    operation = 'division';
    inputWindow.value = '';
    document.getElementById('interface').textContent += '/';
})