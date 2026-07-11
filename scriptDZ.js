// ////// Задания на работу с кодом //////

// ////// Задание 1 //////

// let password = 'Пароль'
// let input = prompt('Введите пароль');
// if (input === password) {
//     alert('Пароль введен верно');
// } else {
//     alert('Пароль введен неправильно');
// }

// ////// Задание 2 ////// 
// let c = 2; 
// if (c > 0 && c < 10) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// ////// Задание 3 ////// 

// let d = 120;
// let e = 3;
// if (d > 100 || e > 100) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// ////// Задание 4 ////// 

// // Вариант 1 // 
// let a = '2';
// let b = '3';
// alert(Number(2) + Number(3))


// // Вариант 2 // 
// let a = '2';
// let b = '3';
// alert(+2 + +3)

// ////// Задание 5 ////// 
// //  Создаем переменную с номером месяца 12
// let monthNumber = 12;

// // . Проверяем условие, при котором программа НЕ должна выполняться
// if (monthNumber > 13) {
//     console.log("Программа не выполняется, так как номер месяца больше 13");
// } else {
//     //  Если всё в порядке, определяем сезон через switch
//     let season;

//     switch (monthNumber) {
//         case 12:
//         case 1:
//         case 2:
//             season = "зима";
//             break;
//         case 3:
//         case 4:
//         case 5:
//             season = "весна";
//             break;
//         case 6:
//         case 7:
//         case 8:
//             season = "лето";
//             break;
//         case 9:
//         case 10:
//         case 11:
//             season = "осень";
//             break;
//         default:
//             season = "неизвестный сезон";
//     }

//     //  Выводим результат в консоль
//     console.log(monthNumber + "-й месяц принадлежит к сезону «" + season + "»");
// }

// ///// Задание  Дополнительное ////// 
// ///// Задание 1   //////

// // Создаем переменную и запрашиваем у пользователя ввод
// let userInput = prompt("Пожалуйста, введите любое число");

// // Преобразуем строку, которую ввел пользователь, в число.
// // Если пользователь введет текст, значением переменной станет NaN (Not a Number).
// let number = Number(userInput);

// // Добавляем проверку: является ли введенное значение числом.
// // Функция isNaN() возвращает true, если значение равно NaN.
// //  мы проверяем на пустую строку и отмену ввода (userInput === null), 
// // чтобы пустой ввод не считался нулем.
// if (isNaN(number) || userInput === null || userInput.trim() === "") {
//     alert("Вы ввели не число. Пожалуйста, перезапустите программу и попробуйте снова.");
// } else {
//     //Добавляем проверку, является ли число четным.
//     // Используем оператор остатка от деления %
//     if (number % 2 === 0) {
//         //Если остаток от деления на 2 равен 0 — число четное
//         alert("Число четное");
//     } else {
//         // Если остаток не равен 0 — число нечетное
//         alert("Число нечетное");
//     }
// }

// ///// Задание 2   //////

// // Объявляем переменную clientOS. 
// // 
// let clientOS = 0; // 0 — iOS, 1 — Android

// // 2. Проверяем значение переменной и выводим соответствующее сообщение в консоль
// if (clientOS === 0) {
//     console.log("Установите версию приложения для iOS по ссылке");
// } else if (clientOS === 1) {
//     console.log("Установите версию приложения для Android по ссылке");
// } else {
//     //  если в переменную запишут другое значение (например, 2 или "текст")
//     console.log("Неизвестная операционная система");


    
// }
// ///// Задание 3   //////


// let clientOS = 0;             // 0 — iOS, 1 — Android
// let clientDeviceYear = 2015;  // Год выпуска устройства

// if (clientOS === 0 && clientDeviceYear < 2015) {
//     console.log("Установите облегченную версию приложения для iOS по ссылке");
// } else if (clientOS === 0 && clientDeviceYear >= 2015) {
//     console.log("Установите версию приложения для iOS по ссылке");
// } else if (clientOS === 1 && clientDeviceYear < 2015) {
//     console.log("Установите облегченную версию приложения для Android по ссылке");
// } else if (clientOS === 1 && clientDeviceYear >= 2015) {
//     console.log("Установите версию приложения для Android по ссылке");
// }


// Задание 1
// Выведите в консоль 2 раза слово 
// «Привет»
// let i = 0; // Создаем переменную перед циклом

// while (i < 2) {
//   console.log("Привет");
//   i++; // Обязательно увеличиваем счетчик, чтобы цикл не стал бесконечным
// }
// Задание 2
// Выведите в консоль цифры от 
// // 1 до 5.
// let a = 1;
// while (a <=5 ){
//     console.log(a)
//     a++
// }
// Задание 3
// Выведите в консоль числа от 
// 7 до  22.
    
// for ( let b = 7; b <= 22; b++){
//     console.log(b)
// }

// // Задание 4
// const obj = {
//     "Коля" : '200',
//     "Вася" : '300',
//     "Петя" : '400',
// }


// for (let key in obj ) {
// console.log(`${key}: — зарплата ${obj[key]} долларов.`);

// }

// // Задание 5
// let n = 1000;

// let num = 0; // Переменная для подсчета количества итераций

// while (n >= 50) {
//     n = n / 2; // Делим число на 2
//     num++;     // Увеличиваем счетчик шагов на 1
// }
// // Задание 6
// console.log("Полученное число n =", n);
// console.log("Количество итераций num =", num);
// let firstFriday = 3;
// let totalDays = 31;
// while (firstFriday <= 31) {
//     firstFriday += 7;
//     console.log (`Сегодня пятница, ${firstFriday}-е число. Необходимо подготовить отчет.`)

// }
// // Задание 7
// let k = 100;
// let iterations = 0;
// while (k >= 0){
//     k -= 7;
//     iterations++;
// }
// // Задание 8
// let month = [
//     "январь",
//     "февраль",
//     "март",
//     "апрель",
//     "май",
//     "июнь",
//     "июль",
//     "август",
//     "сентябрь",
//     "октябрь",
//     "ноябрь",
//     "декабрь"];

//     for (let i =0; i < 12; i++ )
//     { console.log(`${i + 1}-й месяц года ${month[i]}`)}


//   //Задание 10
//   const book = {
//     "название": 'Война и мир',
//     "автор": 'Л.Н. Толстой',
//     "год издания": '1863', 
//     "жанр": 'роман-эпопея',
//   } 
//   for (let key in book) {
// console.log(`${key}: ${book[key]}`);}

// //Функции///
//Задание 1

// function getMin(a, b) {
//     if (a < b) {
//       return a ;
//     } else {
//         return b;
//     }
// }
//Задание 2
function evenOdd(number) {
    if (number % 2 == 0) {
        alert("Четное число")
    } else {
        alert("Нечетное число")
    }
}

let userNum = prompt("Введите число: ")
evenOdd(userNum)
//Задание 3
function squared(number) {
    let squarNum = number ** 2;
    console.log(squarNum)
}
function squared2(number) {
     let squarNum = number ** 2;
    return squarNum

}

//Задание 4
function name() {   
    let age = prompt("сколько вам лет?")
    if (age < 0) {
        console.log("Вы ввели неправильное значение")
    } else if (age <= 12) {
            console.log("Привет, друг!")
        } else {
            console.log ("Добро пожаловать!")
        }
    }

    //Задание 5
function multiplyIfNumbers(a, b) {
  a = +a;   
  b = +b;

  if (isNaN(a) || isNaN(b)) {
    return 'Одно или оба значения не являются числом';
  }
  return a * b;
}

//Задание 6
function isNumber(userNum = prompt("Введите число:")) {
    let number = Number(userNum)
    if (Number.isNaN(number)) {
        console.log("Переданный параметр не является числом.")
    } else {
        console.log(`${number} в кубе равняется ${number ** 3}`)
    }
}

let i = 0
while (i <= 10) {
    isNumber(i)
    i++
}

//Задание 7
const circle1 = {
    radius: +prompt("Введите радиус первого круга:"),
    getArea: function() {
        let square = 3.14 * this.radius ** 2
        return square
    },
    getPerimeter: function() {
        let p = 2 * 3.14 * this.radius
        return p
    }
}

const circle2 = {
    radius: +prompt("Введите радиус второго круга:"),
    getArea: function() {
        let square = 3.14 * this.radius ** 2
        return square
    },
    getPerimeter: function() {
        let p = 2 * 3.14 * this.radius
        return p
    }
}

console.log(`Площади первого круга: ${circle1.getArea()}`)
console.log(`Периметр первого круга: ${circle1.getPerimeter()}`)

console.log(`Площади второго круга: ${circle2.getArea()}`)
console.log(`Периметр второго круга: ${circle2.getPerimeter()}`)
