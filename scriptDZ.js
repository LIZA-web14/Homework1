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
// function evenOdd(number) {
//     if (number % 2 == 0) {
//         alert("Четное число")
//     } else {
//         alert("Нечетное число")
//     }
// }

// let userNum = prompt("Введите число: ")
// evenOdd(userNum)
// //Задание 3
// function squared(number) {
//     let squarNum = number ** 2;
//     console.log(squarNum)
// }
// function squared2(number) {
//      let squarNum = number ** 2;
//     return squarNum

// }

// //Задание 4
// function name() {   
//     let age = prompt("сколько вам лет?")
//     if (age < 0) {
//         console.log("Вы ввели неправильное значение")
//     } else if (age <= 12) {
//             console.log("Привет, друг!")
//         } else {
//             console.log ("Добро пожаловать!")
//         }
//     }

//     //Задание 5
// function multiplyIfNumbers(a, b) {
//   a = +a;   
//   b = +b;

//   if (isNaN(a) || isNaN(b)) {
//     return 'Одно или оба значения не являются числом';
//   }
//   return a * b;
// }

// //Задание 6
// function isNumber(userNum = prompt("Введите число:")) {
//     let number = Number(userNum)
//     if (Number.isNaN(number)) {
//         console.log("Переданный параметр не является числом.")
//     } else {
//         console.log(`${number} в кубе равняется ${number ** 3}`)
//     }
// }

// let i = 0
// while (i <= 10) {
//     isNumber(i)
//     i++
// }

// //Задание 7
// const circle1 = {
//     radius: +prompt("Введите радиус первого круга:"),
//     getArea: function() {
//         let square = 3.14 * this.radius ** 2
//         return square
//     },
//     getPerimeter: function() {
//         let p = 2 * 3.14 * this.radius
//         return p
//     }
// }

// const circle2 = {
//     radius: +prompt("Введите радиус второго круга:"),
//     getArea: function() {
//         let square = 3.14 * this.radius ** 2
//         return square
//     },
//     getPerimeter: function() {
//         let p = 2 * 3.14 * this.radius
//         return p
//     }
// }

// console.log(`Площади первого круга: ${circle1.getArea()}`)
// console.log(`Периметр первого круга: ${circle1.getPerimeter()}`)

// console.log(`Площади второго круга: ${circle2.getArea()}`)
// console.log(`Периметр второго круга: ${circle2.getPerimeter()}`)



// Задание 1
// Дан массив: 
// [1, 5, 4, 10, 0, 3]
// .

// Создайте цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10
// . После вывода значения 10 в консоль цикл должен прекратить свою работу.
// 
// const array = [1, 5, 4, 10, 0, 3];
// for (let i in array) {
//     console.log(array[i])
//     if (array[i] === 10) {
//         break
//     }
// }

//  for (let i = 0; i < array.length; i++){
//      console.log(array[i])  
//  if(array[i] === 10){
//      break
//  }
//  }
 
 

// // Задание 2
// // Дан массив: 
// // [1, 5, 4, 10, 0, 3].

// // Найдите индекс значения  4 в этом массиве.

// const array = [1, 5, 4, 10, 0, 3]
//  for (let i = 0; i < array.length; i++){
  
//  if(array[i] === 4){
//     console.log(`Индекс значения 4: ${i}`)
//      break
//  }
//  }

// //  Задание 3
// // Дан массив чисел: 
// // [1, 3, 5, 10, 20]
// // .

// // С помощью метода 
// // join
// //  выведите элементы массива через пробел (пустую строку 
// // ' '
// // ).

// const array = [1, 3, 5, 10, 20]
// let newString = array.join(' ')
// console.log(newSDd)

// // Задание 4
// // С помощью вложенных циклов создайте многомерный массив вида: 
// // [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
// // .

// const array = []

// for (i = 0; i < 3; i++) {
//     const iArray = []

//     for (j = 0; j < 3; j++) {
//         iArray.push(1)
//     }
//     array.push(iArray)
// }

// console.log(array)

// // Задание 5
// // Дан массив: 
// // [1, 1, 1]
// // . Добавьте в конец массива значения 2, 2, 2.

// const numbers = [1, 1, 1]
// console.log(numbers)
// for ( i = 0; i < 3; i++ ) {
//   numbers.push(2)
// }
// console.log(numbers)


// // Задание 6
// // Дан массив: 
// // [9, 8, 7, 'a', 6, 5]
// // .

// // С помощью метода 
// // sort
// //  отсортируйте массив и удалите букву 
// // 'a'
// //  из массива. Затем выведите массив.

// const numbers = [9, 8, 7, 'a', 6, 5];
// const filterNumber = numbers.filter (num =>  typeof num === 'number' );
// console.log(filterNumber);
// const sortNumber = filterNumber.sort((a, b) => a - b );
// console.log(sortNumber);

// // Задание 7
// // Дан массив: 
// // [9, 8, 7, 6, 5]
// // .

// // Попросите пользователя угадать число с помощью метода 
// // prompt
// // . Если значение, которое ввел пользователь, есть в массиве, выведите в 
// // alert
// //  «Угадал», в противном случае — «Не угадал».

// const numbers = [9, 8, 7, 6, 5];
// let ask = Number(prompt('Угадай число:)'))
// if(numbers.includes(ask)) {
//    alert('Угадал :D');

// }
// else{
//     alert('Не угадал :((( ');
// }
// // Задание 8
// // Дана строка: 
// // 'abcdef'
// // . Выведите в консоль 
// // 'fedcba'
// // .

// // Для этого задания вам пригодится метод 
// // reverse()
// // . Он располагает элементы массива в порядке, обратном исходному.

// let line = ('abcdef')
// const arrayLine = line.split('')
// console.log(arrayLine)
// const reverseLine = arrayLine.reverse(' ').join('')
// console.log(reverseLine)

// // Задание 9
// // Дан массив: 
// // [[1, 2, 3],[4, 5, 6]]
// // . Выведите в консоль массив вида: 
// // [1, 2, 3, 4, 5, 6]
// // .




// const bigArray = [[1, 2, 3], [4, 5, 6]];
// const miniArray = [...bigArray[0],...bigArray[1] ];
// console.log(miniArray)

// // Задание 10
// // Создайте массив с произвольными числами (диапазон от 
// // 1
// //  до 
// // 10
// // ).
// // Переберите его с помощью цикла 
// // for
// // .
// // В каждой итерации выведите в консоль сумму текущего и следующего элементов массива.
// // Следующий элемент массива можно получить с помощью индекса: 
// // i + 1
// // . Обратите внимание, что у последнего элемента нет следующего.
// const bigArray = [];
// for (i = 0; i <= 10; i++ ) {
//     let number = Math.floor(Math.random() * 10) + 1;
//     bigArray.push(number)
// }

// console.log(`Наш массив: ${bigArray}\n`)

// for(i = 0; i < bigArray.length - 1; i++) {
//     console.log(`${i} элемент массива: ${bigArray[i]}`)
    
//     let sum = bigArray[i] + bigArray[i + 1]

//     console.log(`Текущий элемент: ${bigArray[i]}`)
//     console.log(`Следующий элемент: ${bigArray[i + 1]}`)
//     console.log(`Сумма элементов: ${sum}\n`)
// }

// // Задание 11
// // Создайте функцию, которая принимает на вход массив целых чисел, 
// // а возвращает массив квадратов этих чисел.

// function squares(array) {
//     const squaresNums = array.map(num => num ** 2)
//     return squaresNums
// }

// const numbers1 = [2, 4, 5, 7, 8, 9]
// const numbers2 = [3, 4, 11, 7, -4, 9]
// const numbers3 = [7, 12, 5, 35, 8, 0]

// console.log(squares(numbers3))

// // Задание 12
// // Создайте функцию, которая принимает на вход массив строк,
// //  а возвращает массив длины слов.

// function takeFunction (array) {
//     const lenghtstrings = array.map(string => string.length)
//     return lenghtstrings
// }

// const arrayStrings = ["Кот", "Хомяк", "Свин"]

// console.log(takeFunction(arrayStrings))




// // Задание 13
// // Создайте функцию, которая принимает на вход массив целых чисел,
// //  а возвращает массив, содержащий только отрицательные значения.
// function takeFunction (array) {
//     const arrayNumbers = array.filter ((num) => num < 0 );
//     return arrayNumbers
// }
// const namber = [ -1, 0, -5, 10, -2]

// console.log(takeFunction(namber))

// // Задание 14
// // Создайте массив, состоящий из 10 значений. Значения массива необходимо сгенерировать 
// // с помощью метода 
// // Math.random()
// //  в диапазоне от 0 до 10.

// // В данном массиве найдите все четные значения и добавьте их в новый массив. 
// // Результат работы программы необходимо вывести в консоль — 
// // это будут два массива: исходный массив и массив с четными значениями.
// const numbers = [];

// for (let i = 0; i < 10; i++) {
//     const randomNumber = Math.floor(Math.random() * 11);
//     numbers.push(randomNumber);
// }

// console.log(numbers);

// const evenNumbers = numbers.filter((num) => num % 2 ===0);
// console.log(evenNumbers)
// // Задание 15
// // Создайте массив, состоящий из 6 элементов. Элементы массива необходимо 
// // сгенерировать с помощью Math.random()
// //  в диапазоне от 1 до 10.

// // Требуется найти среднее арифметическое этих цифр, 
// // результат программы вывести в консоль.

// const numbers =[];
// for (let i = 1; i < 7; i++) {
//     let number = Math.floor(Math.random() * 10) + 1;
//     numbers.push(number)
// }
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
   
// }
//     const average = sum / numbers.length;

//     console.log('Сумма:', sum )
//     console.log('Cреднее арифметическое', average)



///////////////// Игра «Викторина»////////////////////////

    const guiz = [
           {
               question: "Какой цвет небо?",
               options: ["1. Красный", " 2. Синий", " 3. Зеленый"],
               correctAnswer: 2 // номер правильного ответа
           },
           {
               question: "Сколько дней в неделе?",
               options: ["1. Шесть", " 2. Семь", " 3. Восемь"],
               correctAnswer: 2
           },
           {
               question: "Сколько у человека пальцев на одной руке?",
               options: ["1. Четыре", " 2. Пять", " 3. Шесть"],
               correctAnswer: 2
           }
       ];


function guiz5(){
let counter = 0;
for (i = 0; i < guiz.length; i++) {

    let answer = prompt(`${guiz[i].question}\n${guiz[i].options}\nВыберите вариант ответа (цифра): `);
    let answerNum = Number(answer);


    while (
        answer === null ||
        Number.isNaN(answerNum) ||
        answerNum < 1 ||
        answerNum > guiz[i].options.length
    )  {
        answer = prompt(
        `Введите ЦИФРУ!\n` +
        `${guiz[i].question}\n${guiz[i].options}\nВыберите вариант ответа (цифра): `
        );
        answerNum = Number(answer);
        }
    

    if (answer == guiz[i].correctAnswer) {
        counter = counter + 1
        console.log("Молодец! Правильный ответ!")
    }
}

 alert(`Кол-во правильных ответов: ${counter} из 3`)

}
 document.getElementById('AsimpleGuiz').addEventListener('click',guiz5 )

// ////////////////Игра «Угадай число»//////////////////////////
// Описание

// Создайте игру, в которой пользователь пытается угадать случайное число от 1 до 100.

// Требования:

// Сгенерируйте случайное число от 1 до 100.
// Предложите пользователю угадать это число.
// Дайте подсказки: больше или меньше загаданное число.
// Завершите игру, когда пользователь угадает число.
// Для реализации случайного числа воспользуйтесь 
// Math.random()
const num =  Math.floor(Math.random() * 100) + 1;

let isGuessed = false;
while(!isGuessed) {
    // Спрашиваем у пользователя число: 
    let userGuess = Number(prompt("Угадайте число от 1 до 100"));
    // Проверяем введеное число 
    if (userGuess === num){
        alert('Поздравляем! Вы угадали число!');
        isGuessed = true;
    }
     else if (userGuess > num) {
        alert("Вы ввели слишком большое число")
    }
    else if (userGuess < num){
        alert('Загаданное число больше ');
    }


}

//////////////////Игра "Простая арифметика"///////////////////////
// Описание

// Сайт генерирует случайные задачи на сложение, вычитание, умножение и деление.
// Запрашивает у пользователя ответ.
// Проверяет правильность ответа и выводит результат.
// Последовательность действий
//  Генерация задач:
// Случайным образом создавайте арифметические задачи на сложение, вычитание, умножение и деление.
// Например, задачи могут выглядеть так: "5 + 3", "10 - 2", "4 * 7", "20 / 4".
//  Запрос ответа:
// Запрашивайте у пользователя ответ на сгенерированную задачу.
// Например, используя  функцию 
// prompt()
// .
//  Проверка и вывод результата:
// Проверьте правильность ответа пользователя.
// Выведите результат проверки: верный ответ или ошибка.

const num1 = Math.floor(Math.random() * 10) + 1;
const num2 = Math.floor(Math.random() * 10) + 1;
// нужно создать массив знаков операций 
const operators = ['+', '-', '*', '/'];

const randromOperators = Math.floor(Math.random() * operators.length);
const operator = operators[randromOperators];

// Вычисляем правильный ответ

let correctAnswer = 0
if (operator === '+') {
    correctAnswer = num1 + num2;
}
else if (operator === '-') {
    correctAnswer = num1 - num2;
}
else if (operator === '*') {
    correctAnswer = num1 * num2;
}
else if (operator === '/') {
    correctAnswer = Number((num1 / num2).toFixed(2));
}

// Спрашиваем ответ у пользователя и сравниваем
let userAnswer = Number(prompt(`Сколько будет ${num1} ${operator} ${num2}?`));

if (userAnswer === correctAnswer) {
  alert('Верно! 🎉');
} else {
  alert(`Ошибка! Правильный ответ: ${correctAnswer}`);
}

// Игра «Переверни текст»
// Описание

// создайте игру, где пользователю нужно ввести текст, 
// который будет перевернут.

// Требования:

// Сайт запрашивает у пользователя текст.
// Сайт переворачивает введенный текст.
// Сайт выводит перевернутый текст.
let userGuestion = prompt("Введите текст, а я переверну его :D");
let reversedUserGuestion = userGuestion.split("").reverse().join("");   
alert(`Перевернутый текст: ${reversedUserGuestion}`)

///////////////////////// Работа с кодом////////////////
// Задание 1
// Преобразовать строку 
// 'js'
//  в верхний регистр.
let a = 'js';
let result = a.toUpperCase();
console.log(result)

//  Задание 2
// Создать функцию, которая принимает массив строк и строку. 
// Функция должна вернуть новый массив, 
// содержащий только те элементы первого массива, 
// которые начинаются со второй строки. 
// Регистр символов не влияет на результат.



function test (arrayStrings, string){
    const newArray = arrayStrings.filter(x => x.startsWith(string))
    return newArray
}

const test_array = ['привет', 'черт', 'машина', 'пруссия', 'товар']
console.log(test(test_array, 'пр'))
// Задание 3
// Округлить число 32.58884:

// До меньшего целого.
// До большего целого.
// До ближайшего целого.

const num = 32.58884;
const result1 = Math.floor(num);
console.log(result1)

const result2 = Math.ceil(num);
console.log(result2)

const result3 = Math.round(num);
console.log(result3)

// Задание 4
// Найти минимальное и максимальное значения из чисел 
// 52, 53, 49, 77, 21, 32 и вывести их в консоль.

const number = [52, 53, 49, 77, 21, 32];
const min = Math.min(...number); // Троеточие распаковывает массив
const max = Math.max(...number);

console.log(`Минимальное значение: ${min}`);
console.log(`Махсимальное значение: ${max}`);
// Задание 5
// Создать функцию, которая выводит в консоль случайное число от 1 до 10.

function randomNumber(){
    const random = Math.floor(Math.random() * 10) + 1;
    console.log(random);
}
randomNumber();

// Задание 6
// Написать функцию, которая принимает целое число и возвращает массив 
// случайных чисел 
// от 0 до этого числа. Длина массива должна быть в два раза меньше 
// переданного числа.



function getRandomArray(n) {
  const length = Math.floor(n / 2); 
  const result = [];                 

  
  for (let i = 0; i < length; i++) {
    
    const randomNumber = Math.floor(Math.random() * (n + 1));
    
    
    result.push(randomNumber);
  }

  return result; // 
}

// Проверяем 
console.log(getRandomArray(10)); 
console.log(getRandomArray(6));  
// Задание 7
// Создать функцию, которая принимает два целых числа и 
// возвращает случайное число 
// в этом диапазоне.
function acceptsNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

console.log(acceptsNumber(1, 10)); // Выведет случайное число от 1 до 10

// Задание 8
// Вывести в консоль текущую дату.
let date = new Date();
console.log(date)

// Задание 9
// Создать переменную 
// currentDate
// , хранящую текущую дату. 
// Вывести дату, которая наступит через 73 дня после текущей.
let currentDate = new Date();
 currentDate.setDate(currentDate.getDate() + 73);
 
console.log(currentDate);

console.log(currentDate.toLocaleDateString('ru-RU'));

// Задание 10
// Написать функцию, которая принимает дату и возвращает ее в формате:


// Дата: [число] [месяц на русском] [год] — это [день недели на русском].
// Время: [часы]:[минуты]:[секунды]

function acceptsDate(date) {
    
    let dayMonthYear = date.toLocaleDateString("ru-RU", { day: 'numeric', month: 'long', year: 'numeric' });
    
    let weekday = date.toLocaleDateString('ru-RU', { weekday: 'long' });
    let time = date.toLocaleTimeString("ru-RU");

    
    return `Дата: ${dayMonthYear} — это ${weekday}.\nВремя: ${time}.`;
}

 
console.log(acceptsDate(new Date()));

//////////// Callback, setTimeout, setInterval-тема//////////
///ЗАДАНИЕ 1
// С помощью метода массива 
// sort
//  отсортируйте массив 
// people
//  по возрастанию возраста и выведите результат в консоль.
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];
people.sort((a, b) => a.age - b.age);
console.log(people);
// Допишите колбэк для sort, изучите, как работает колбэк, в документации
console.log(people.sort((a, b) => a.age - b.age));
// код выше должен вывеcти =>
// [
//  { name: 'Олег', age: 7 },
//  { name: 'Анна', age: 17 },
//  { name: 'Глеб', age: 29 },
//  { name: 'Оксана', age: 47 }
// ]

// Задание 2
// Реализуйте функцию 
// filter
// , которая должна работать аналогично методу массива 
// filter
// . Возьмите за основу функцию 
// map
// , которую мы реализовывали на уроке.

// Чтобы из функции 
// map
//  сделать 
// filter
// , нужно, в зависимости от результата вызова 
// ruleFunction
// , принимать решение о том, добавлять 
// в результирующий массив очередной элемент или нет.

function isPositive(num) {
return num > 0;
}
function isMale(name) {
return person.gender === 'male';
}
function filter(array, ruleFunction) {
    const result = [];
    
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {
            result.push(array[i]);
        }
    }
    
    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale));

// Задание 3
// Напишите программу, которая на протяжении 30 секунд каждые 
// 3 секунды будет выводить в консоль текущую дату. 
// Последней строкой должно выводиться сообщение «30 секунд прошло».

// Создадим переменну начальную . Она как старт для программы счетчика
let StartOfReport = 0;
// 1. Создаём переменную timer и записываем в неё ID таймера
const timer = setInterval (
    function (){
        // выводим текущую дату 
        console.log(new Date());
        //  увеличиваем счётчик времени на 3 секунды 
        StartOfReport += 3;
        if (StartOfReport >= 30){
            clearInterval(StartOfReport);
            console.log("30 секунд прошло")
        }
    }, 3000);

// Задание 4
// Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска.

// Допишите функцию 
// delayForSecond
//  так, чтобы приветствие выводилось в консоль не сразу, а спустя 1 секунду. 
// Используйте  setTimeout


function delayForSecond(callback) {
    // Код писать можно только внутри этой функции
    setTimeout(function(){
        callback();
    },1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

// Задание 5
// Посмотрите код. В нём допущена ошибка, 
// и он выводит сообщения не в том порядке:

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(function() {
    sayHi('Глеб');
});