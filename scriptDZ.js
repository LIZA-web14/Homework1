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


 const quiz = [
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

let counter = 0;
for (i = 0; i < quiz.length; i++) {

    let answer = prompt(`${quiz[i].question}\n${quiz[i].options}\nВыберите вариант ответа (цифра): `);
    let answerNum = Number(answer);


    while (
        answer === null ||
        Number.isNaN(answerNum) ||
        answerNum < 1 ||
        answerNum > quiz[i].options.length
    )  {
        answer = prompt(
        `Введите ЦИФРУ!\n` +
        `${quiz[i].question}\n${quiz[i].options}\nВыберите вариант ответа (цифра): `
        );
        answerNum = Number(answer);
        }
    

    if (answer == quiz[i].correctAnswer) {
        counter = counter + 1
        console.log("Молодец! Правильный ответ!")
    }
}

console.log(`Кол-во правильных ответов: ${counter} из 3`)
