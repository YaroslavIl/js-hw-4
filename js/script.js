

// 1)Створити обєкт userWallet  в якому існують ключі(amountUsa, amountEuro, amountUa) які містять числові значення(збереження юзера)
// Створити массив обєктів bank в якому є обєкети з ключами buy, sell  з числовими значеннями(продаж і покупка валюти) а також ключ name в який передаємо назву валюти(usa, euro, ua)
// Створити функцію яка отримує данні з обєкту юзер опрацьовує ці данні і повертає скільки долларів чи євро може купити користувач, врахувати можливість неможливості покупки.
// Створити функцію яка прораховує скільки гривень отримує користувач продавши свої збереження


let usa = 100;
let euro = 50;
let ua = 100;
let currency = prompt('Виберіть валюту', 'usa, euro, ua');
if (currency === 'ua') {
    ua = prompt('Введить кількість usa/euro: ');
}
else if (currency === 'euro') {
    euro = prompt('Введить кількість UAH: ');
}
else if (currency === 'usa') {
    usa = prompt('Введить кількість UAH: ');
}
else {
    alert('Error')
}

let userWallet = {
    amountUsa: usa,
    amountEuro: euro,
    amountUa: ua,
}

let bank = [
    {
        buy: 5,
        sell: 4,
        name: 'usa',
    },
    {
        buy: 8,
        sell: 6,
        name: 'euro',
    },
    {
        buy: 1,
        sell: 1,
        name: 'ua',
    },
]
function exchanger(arr) {
    let recalculationUs = 0;
    let recalculationEu = 0;
    if (currency === 'usa') {
        arr.forEach(function (arr) {
            if (arr.name === 'usa') {
                recalculationUs = userWallet.amountUsa / arr.buy;
            }
        })
        console.log(recalculationUs);
    }
    else if (currency === 'euro') {
        arr.forEach(function (arr) {
            if (arr.name === 'euro') {
                recalculationEu = userWallet.amountEuro / arr.buy;
            }
        })
        console.log(recalculationEu);
    }
    else if (currency === 'ua') {
        console.log(' Є в наявності');
    }
    else {
        alert('Помилка, введіть коректну назву та кількість!!!');
    };
}
exchanger(bank);


function exchangerUa(arr) {
    let recalculationUa_Eu = 0;
    let recalculationUa_Us = 0;
    if (currency === 'ua') {
        arr.forEach(function (arr) {
            if (arr.name === 'euro') {
                recalculationUa_Eu = userWallet.amountUa * arr.sell;
            }
        })
        console.log('Отримаєте: ' + recalculationUa_Eu + ' UAH');
    }
    if (currency === 'ua') {
        arr.forEach(function (arr) {
            if (arr.name === 'usa') {
                recalculationUa_Us = userWallet.amountUa * arr.sell;
            }
        })
        console.log('Отримаєте: ' + recalculationUa_Us + ' UAH');
    }
    // return (`Отримаєте:   ${recalculationUa_Eu}recalculationUa_Eu   UAH   або Отримаєте:  ${recalculationUa_Us}recalculationUa_Us   UAH`)
}
exchangerUa(bank);




// 2)Створити функцію move яка повертає текст  на скільки кроків і куди(отримане значення) змістився користувач.Створити функцію moveUser яка отримує напрямок переміщення, кількість кроків і функцію move як колбек.
//     moveUser('north', move, 10) повина повернути(Юзер перемістився на північ на 10 кроків)

let quarter = 'north';
let step = '10';

let move = function (a, b) {
    return `Вася змістився на ${a} кроків  у напрямку ${b}`;
}
move(step, quarter);
// console.log(move(step, quarter));

function moveUser(fn) {
    console.log(fn);
    
};
moveUser(move(step, quarter));






// 3) Створіть массив в якому видаляється кожний другий елемент["Keep", "Remove", "Keep", "Remove", "Keep", ...] в результаті повинен бути ось такий новий массив["Keep", "Keep", "Keep", ...], Врахувати що массив може бути пустий, повернути помилку в разі пустого масиву

let arrwords = ["Keep", "Remove", "Keep", "Remove", "Keep"];
let words = [];
for (i = 0; i < arrwords.length; i++){
    let a = arrwords[i];
    if (i % 2 == 0) {
        words.push(a);
    }
}
console.log(words);


// 4) Створити функцію яка обробляє массив обєктів і вираховує площу фігури в обєкті,

let figurs = [
    {
        figure: "Squar",
        sizeA: 4,
        sizeB: 4
    },
    {
        figure: "Rectangle",
        sizeA: 4,
        sizeB: 8
    }
]
function figurArea(arr) {
    let a = 0;
    let res = 0;
    for (i = 0; i < arr.length; i++) {
        a = arr[i]
        res = a.sizeA * a.sizeB;
        console.log(`Фігура ${a.figure} з площею : ${res}`);
    }
    // return res;
}
figurArea(figurs);



// 5) Свторити новий массив який використовує массив[2, 3, 5, 4, 8, 7, 9, 10] і перемножує парні значення на 4

let arrNumber = [2, 3, 5, 4, 8, 7, 9, 10];
let a = 0;
let arrNew = [];

for (i = 0; i < arrNumber.length; i++){
    a = arrNumber[i];
    if ((a % 2) === 0) {
        a *= 4;
        arrNew.push(a);
    }
}
console.log(arrNew);



