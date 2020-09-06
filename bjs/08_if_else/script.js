function numberIntoText(numberFormat) {
    let res = '';

    if (numberFormat < 0) {
        res += 'минус ';
        numberFormat *= -1;
    } else if (numberFormat === 0) return 0;

    let hundreds = Math.floor(numberFormat / 100);
    let tens = Math.floor((numberFormat % 100) / 10);
    let units = numberFormat % 10;

    let hundredsArray = [
        '',
        'сто',
        'двести',
        'триста',
        'четыреста',
        'пятьсот',
        'шестьсот',
        'семьсот',
        'восемьсот',
        'девятьсот'
    ];

    let tensArray = [
        '',
        'десять',
        'двадцать',
        'тридцать',
        'сорок',
        'пятьдесят',
        'шестьдесят',
        'семьдесят',
        'восемьдесят',
        'девяносто'
    ]

    let unitsArray = [
        '',
        'один',
        'два',
        'три',
        'четыре',
        'пять',
        'шесть',
        'семь',
        'восемь',
        'девять'
    ]

    let elevenNineteenArray = [
        '',
        'одиннадцать',
        'двенадцать',
        'тринадцать',
        'четырнадцать',
        'пятнадцать',
        'шестнадцать',
        'семнадцать',
        'восемнадцать',
        'девятнадцать'
    ]

    if (numberFormat > 10 && numberFormat < 20) {
        return elevenNineteenArray[numberFormat - 10];
    } else {
        res += hundredsArray[hundreds];
        res += res ? ` ${tensArray[tens]}` : tensArray[tens];
        res += res ? ` ${unitsArray[units]}` : unitsArray[units];
        return res;
    }
}

let minValue = prompt('Минимальное значение числа для игры', '0');
let maxValue = prompt('Максимальное значение числа для игры', '100');

minValue = parseInt(minValue) || 0;
maxValue = parseInt(maxValue) || 100;

if (minValue < -999) minValue = -999;
if (maxValue > 999) maxValue = 999;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${numberIntoText(answerNumber)}?`;

document.getElementById('btnRetry').addEventListener('click', function() {
    minValue = prompt('Минимальное значение числа для игры', '0');
    maxValue = prompt('Максимальное значение числа для игры', '100');

    minValue = parseInt(minValue) || 0;
    maxValue = parseInt(maxValue) || 100;

    if (minValue < -999) minValue = -999;
    if (maxValue > 999) maxValue = 999;

    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;

    const phraseRandom = Math.round(Math.random() * 2);
    if (phraseRandom === 0) answerField.innerText = `Вы загадали число ${numberIntoText(answerNumber)}?`;
    else if (phraseRandom === 1) answerField.innerText = `Да это полюбасу ${numberIntoText(answerNumber)}?`;
    else answerField.innerText = `Вангую это число ${numberIntoText(answerNumber)}?`;

    gameRun = true;

    if (document.querySelector('body').classList.contains('redTheme')) {
        document.querySelector('body').classList.toggle('redTheme');
    }
})

document.getElementById('btnOver').addEventListener('click', function() {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            const phraseRandom = Math.round(Math.random() * 2);
            if (phraseRandom === 0) answerField.innerText = `Вы загадали число ${numberIntoText(answerNumber)}?`;
            else if (phraseRandom === 1) answerField.innerText = `Да это полюбасу ${numberIntoText(answerNumber)}?`;
            else answerField.innerText = `Вангую это число ${numberIntoText(answerNumber)}?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function() {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.ceil((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            const phraseRandom = Math.round(Math.random() * 2);
            if (phraseRandom === 0) answerField.innerText = `Вы загадали число ${numberIntoText(answerNumber)}?`;
            else if (phraseRandom === 1) answerField.innerText = `Да это полюбасу ${numberIntoText(answerNumber)}?`;
            else answerField.innerText = `Вангую это число ${numberIntoText(answerNumber)}?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function() {
    if (gameRun) {
        const phraseRandom = Math.round(Math.random() * 2);
        if (phraseRandom === 0) answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
        else if (phraseRandom === 1) answerField.innerText = `И кто тут батя 💪?`;
        else answerField.innerText = `Слишком легко 🥱`;
        gameRun = false;

        document.querySelector('body').classList.toggle('redTheme');
    }
})

// Код ниже для использования collapse должен был заменить код выше

// function numberIntoText(numberFormat) {
//     let res = '';

//     if (numberFormat < 0) {
//         res += 'минус ';
//         numberFormat *= -1;
//     } else if (numberFormat === 0) return 0;

//     let hundreds = Math.floor(numberFormat / 100);
//     let tens = Math.floor((numberFormat % 100) / 10);
//     let units = numberFormat % 10;

//     let hundredsArray = [
//         '',
//         'сто',
//         'двести',
//         'триста',
//         'четыреста',
//         'пятьсот',
//         'шестьсот',
//         'семьсот',
//         'восемьсот',
//         'девятьсот'
//     ];

//     let tensArray = [
//         '',
//         'десять',
//         'двадцать',
//         'тридцать',
//         'сорок',
//         'пятьдесят',
//         'шестьдесят',
//         'семьдесят',
//         'восемьдесят',
//         'девяносто'
//     ]

//     let unitsArray = [
//         '',
//         'один',
//         'два',
//         'три',
//         'четыре',
//         'пять',
//         'шесть',
//         'семь',
//         'восемь',
//         'девять'
//     ]

//     let elevenNineteenArray = [
//         '',
//         'одиннадцать',
//         'двенадцать',
//         'тринадцать',
//         'четырнадцать',
//         'пятнадцать',
//         'шестнадцать',
//         'семнадцать',
//         'восемнадцать',
//         'девятнадцать'
//     ]

//     if (numberFormat > 10 && numberFormat < 20) {
//         return elevenNineteenArray[numberFormat - 10];
//     } else {
//         res += hundredsArray[hundreds];
//         res += res ? ` ${tensArray[tens]}` : tensArray[tens];
//         res += res ? ` ${unitsArray[units]}` : unitsArray[units];
//         return res;
//     }
// }

// let minValue;
// let maxValue;
// let answerNumber;
// let orderNumber;
// let gameRun;

// const orderNumberField = document.getElementById('orderNumberField');
// const answerField = document.getElementById('answerField');

// // $(document).ready(function() {
// //     $("#btnRetry").click(function() {
// //         $('#formCollapse').collapse('show');
// //         $('#game').collapse('hide');
// //     });
// //     $("#btnHide").click(function() {
// //         $('#formCollapse').collapse('hide');
// //         $('#game').collapse('show');
// //     });
// // });

// document.getElementById('btnRetry').addEventListener('click', function() {
//     $('#formCollapse').collapse('show');
//     $('#game').collapse('hide');

//     document.getElementById('minInput').innerText = '0';
//     document.getElementById('maxInput').innerText = '100';
//     gameRun = true;
// })

// document.getElementById('btnOver').addEventListener('click', function() {
//     if (gameRun) {
//         if (minValue === maxValue) {
//             const phraseRandom = Math.round(Math.random());
//             const answerPhrase = (phraseRandom === 1) ?
//                 `Вы загадали неправильное число!\n\u{1F914}` :
//                 `Я сдаюсь..\n\u{1F92F}`;

//             answerField.innerText = answerPhrase;
//             gameRun = false;
//         } else {
//             minValue = answerNumber + 1;
//             answerNumber = Math.floor((minValue + maxValue) / 2);
//             orderNumber++;
//             orderNumberField.innerText = orderNumber;

//             const phraseRandom = Math.round(Math.random() * 2);
//             if (phraseRandom === 0) answerField.innerText = `Вы загадали число ${numberIntoText(answerNumber)}?`;
//             else if (phraseRandom === 1) answerField.innerText = `Да это полюбасу ${numberIntoText(answerNumber)}?`;
//             else answerField.innerText = `Вангую это число ${numberIntoText(answerNumber)}?`;
//         }
//     }
// })

// document.getElementById('btnLess').addEventListener('click', function() {
//     if (gameRun) {
//         if (minValue === maxValue) {
//             const phraseRandom = Math.round(Math.random());
//             const answerPhrase = (phraseRandom === 1) ?
//                 `Вы загадали неправильное число!\n\u{1F914}` :
//                 `Я сдаюсь..\n\u{1F92F}`;

//             answerField.innerText = answerPhrase;
//             gameRun = false;
//         } else {
//             maxValue = answerNumber - 1;
//             answerNumber = Math.ceil((minValue + maxValue) / 2);
//             orderNumber++;
//             orderNumberField.innerText = orderNumber;

//             const phraseRandom = Math.round(Math.random() * 2);
//             if (phraseRandom === 0) answerField.innerText = `Вы загадали число ${numberIntoText(answerNumber)}?`;
//             else if (phraseRandom === 1) answerField.innerText = `Да это полюбасу ${numberIntoText(answerNumber)}?`;
//             else answerField.innerText = `Вангую это число ${numberIntoText(answerNumber)}?`;
//         }
//     }
// })

// document.getElementById('btnEqual').addEventListener('click', function() {
//     if (gameRun) {
//         const phraseRandom = Math.round(Math.random() * 2);
//         if (phraseRandom === 0) answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
//         else if (phraseRandom === 1) answerField.innerText = `И кто тут батя 💪?`;
//         else answerField.innerText = `Слишком легко 🥱`;
//         gameRun = false;

//         document.querySelector('body').classList.toggle('redTheme');
//     }
// })

// document.getElementById('btnHide').addEventListener('submit', (event) => {
//     event.preventDefault();
//     $('#formCollapse').collapse('hide');
//     $('#game').collapse('show');

//     if (gameRun) {
//         minValue = event.target.querySelector('minInput').value;
//         maxValue = event.target.querySelector('maxInput').value;
//         minValue = parseInt(minValue) || 0;
//         maxValue = parseInt(maxValue) || 100;

//         if (minValue < -999) minValue = -999;
//         if (maxValue > 999) maxValue = 999;

//         alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
//         answerNumber = Math.floor((minValue + maxValue) / 2);
//         orderNumber = 1;
//         orderNumberField.innerText = orderNumber;

//         const phraseRandom = Math.round(Math.random() * 2);
//         if (phraseRandom === 0) answerField.innerText = `Вы загадали число ${numberIntoText(answerNumber)}?`;
//         else if (phraseRandom === 1) answerField.innerText = `Да это полюбасу ${numberIntoText(answerNumber)}?`;
//         else answerField.innerText = `Вангую это число ${numberIntoText(answerNumber)}?`;

//         if (document.querySelector('body').classList.contains('redTheme')) {
//             document.querySelector('body').classList.toggle('redTheme');
//         }
//     }
// })