////// Задания на работу с кодом //////

////// Задание 1 //////

let password = 'Пароль'
let input = prompt('Введите пароль');
if (input === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

////// Задание 2 ////// 
let c = 2; 
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

////// Задание 3 ////// 

let d = 120;
let e = 3;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

////// Задание 4 ////// 

// Вариант 1 // 
let a = '2';
let b = '3';
alert(Number(2) + Number(3))


// Вариант 2 // 
let a = '2';
let b = '3';
alert(+2 + +3)

////// Задание 5 ////// 
//  Создаем переменную с номером месяца 12
let monthNumber = 12;

//  Проверяем условие, при котором программа НЕ должна выполняться
if (monthNumber > 13) {
    console.log("Программа не выполняется, так как номер месяца больше 13");
} else {
    // 3. Если всё в порядке, определяем сезон через switch
    let season;

    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            season = "зима";
            break;
        case 3:
        case 4:
        case 5:
            season = "весна";
            break;
        case 6:
        case 7:
        case 8:
            season = "лето";
            break;
        case 9:
        case 10:
        case 11:
            season = "осень";
            break;
        default:
            season = "неизвестный сезон";
    }

    // 4. Выводим результат в консоль
    console.log(monthNumber + "-й месяц принадлежит к сезону «" + season + "»");
}