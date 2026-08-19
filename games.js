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
for ( let i = 0; i < guiz.length; i++) {

    let answer = prompt(`${guiz[i].question}\n${guiz[i].options}\nВыберите вариант ответа (цифра): `);
    if (answer === null) {
      alert(`Игра завершена. Кол-во правильных ответов: ${counter} из ${guiz.length}`);
      return;
    }

    
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
    

    if (answerNum == guiz[i].correctAnswer) {
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

function guiz1() {
  const num = Math.floor(Math.random() * 100) + 1;
  let isGuessed = false;

  while (!isGuessed) {
    const input = prompt("Угадайте число от 1 до 100");

    if (input === null) {
      alert("Игра отменена");
      return;
    }

    const userGuess = Number(input);

    if (Number.isNaN(userGuess)) {
      alert("Введите число");
      continue;
    }

    if (userGuess === num) {
      alert("Поздравляем! Вы угадали число!");
      isGuessed = true;
    } else if (userGuess > num) {
      alert("Вы ввели слишком большое число");
    } else {
      alert("Загаданное число больше");
    }
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
function guiz2() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;

  const operators = ['+', '-', '*', '/'];
  const randomOperatorIndex = Math.floor(Math.random() * operators.length);
  const operator = operators[randomOperatorIndex];

  let correctAnswer = 0;

  if (operator === '+') {
    correctAnswer = num1 + num2;
  } else if (operator === '-') {
    correctAnswer = num1 - num2;
  } else if (operator === '*') {
    correctAnswer = num1 * num2;
  } else if (operator === '/') {
    correctAnswer = Number((num1 / num2).toFixed(2));
  }

  const input = prompt(`Сколько будет ${num1} ${operator} ${num2}?`);

  if (input === null) {
    alert("Игра отменена");
    return;
  }

  if (input.trim() === "") {
    alert("Введите ответ");
    return;
  }

  const userAnswer = Number(input);

  if (Number.isNaN(userAnswer)) {
    alert("Введите число");
    return;
  }

  if (userAnswer === correctAnswer) {
    alert("Верно! 🎉");
  } else {
    alert(`Ошибка! Правильный ответ: ${correctAnswer}`);
  }
}

document.getElementById("simpleArithmetic").addEventListener("click", guiz2);

/////////////////////////Игра «Камень, ножницы, бумага»///////////////////////////

// Описание: создайте игру «Камень, ножницы, бумага», где пользователь играет против компьютера.

// Требования:

// Сайт запрашивает у пользователя его выбор (камень, ножницы, бумага).
// Генерирует случайный выбор компьютера.
// Определяет победителя и выводит результат.
// Последовательность создания игры «Камень, ножницы, бумага»:

// Используйте функцию 
// prompt()
//  для получения выбора пользователя: "камень", "ножницы" или "бумага".
// Сгенерируйте случайный выбор компьютера.
// Создайте массив с возможными вариантами: 
// ["камень", "ножницы", "бумага"]
// .
// Используйте функцию для генерации случайного индекса и выберите вариант для компьютера.
// Определите победителя.
// Сравните выбор пользователя и выбор компьютера.
// Используйте правила игры для определения победителя:
// Камень побеждает ножницы.
// Ножницы побеждают бумагу.
// Бумага побеждает камень.
// Если выборы совпадают, это ничья.
// Выведите результат:
// Выведите выборы пользователя и компьютера.
// Сообщите результат игры: победа, поражение или ничья.


//  ход действий
// 	1.	Создай массив вариантов.
// 	2.	Спроси у пользователя выбор.
// 	3.	Если нажали  Отмена , закончи игру.
// 	4.	Приведи ввод к нижнему регистру.
// 	5.	Случайно выбери вариант компьютера.
// 	6.	Сравни выборы.
// 	7.	Выведи результат


function guiz4(){
    const options = ["камень", "ножницы", "бумага" ]

    const guestionUser = prompt(" Выбирите вариант: камень, ножницы или бумага");
    if (guestionUser === null){
        alert("Игра отменена");
        return
    }

    // Приводим к нижнему регистру
    const lowerCaseguestionUser = guestionUser.toLocaleLowerCase();

    // Компьютер выбирает случайный индекс в массиве
    const randomOptions = Math.floor(Math.random() * options.length);
    // Теперь говорм компьютеру, что берем из массива вариантов options тот элемент, 
    //  номер которого хранится в randomOptions - то что компьютер выбрал рандормно
    const computerChoice = options[randomOptions];
    // Проверка на нечью
    if (lowerCaseguestionUser === computerChoice ){
        alert("Ничья");
    }


    else if (
        (lowerCaseguestionUser === "камень" && computerChoice === "ножницы") ||
        (lowerCaseguestionUser === "ножницы" && computerChoice === "бумага") ||
        (lowerCaseguestionUser === "бумага" && computerChoice === "камень")
    ) {
        alert("Вы победили!");
    } else {
        alert("Вы проиграли!")
    }

    alert(`Вы выбрали: ${lowerCaseguestionUser}\nА компьютер выбрал: ${computerChoice}`);

}
document.getElementById("RockPaperScissors").addEventListener("click", guiz4);

/////////////////////////Генерация случайных цветов ///////////////////////////


// 1. Вспомогательная функция
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// 2. Функция-действие: ТОЛЬКО меняет цвет
function guiz6() {
  const colorDiv = document.querySelector('.hero-black');
  if (colorDiv) {
    colorDiv.style.backgroundColor = getRandomColor();
  }
}

// 3. При клике на кнопку с id="colorChange" вызываем guiz6
document.getElementById("colorChange").addEventListener("click", guiz6);