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
function guiz1 (){
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
}

document.getElementById('GuessNumber').addEventListener('click',guiz1 )

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
function guiz2 (){
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
}
document.getElementById('simpleArithmetic').addEventListener('click',guiz2)


// Игра «Переверни текст»
// Описание

// создайте игру, где пользователю нужно ввести текст, 
// который будет перевернут.

// Требования:

// Сайт запрашивает у пользователя текст.
// Сайт переворачивает введенный текст.
// Сайт выводит перевернутый текст.

function guiz3 () {
let userGuestion = prompt("Введите текст, а я переверну его :D");
let reversedUserGuestion = userGuestion.split("").reverse().join("");   
alert(`Перевернутый текст: ${reversedUserGuestion}`)

}
document.getElementById('invertedText').addEventListener('click',guiz3)