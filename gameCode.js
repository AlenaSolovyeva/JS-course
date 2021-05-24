//После игры необходимо спросить номер вопроса.
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers = [];

function getAnswer(question, ...array) {
  do {
    ok = false;
    event = +prompt(question + array.join("") + "-1 - Выход из игры");
    answers.push(array[event - 1]);
    if (event == -1) {
      break;
    } else {
      ok = isAnswer(array.length, event);
    }
  } while (!ok);
}

function secondStep() {
  switch (event) {
    case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
    case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
      getAnswer(works.d00, works.d1, works.d2);
      break;
    case -1: // Второе действие
      break;
    default:
      alert("Ошибка");
  }
}

getAnswer(works.a00, works.a1, works.a2);
switch (event) {
  case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
    getAnswer(works.b00, works.b1, works.b2);
    secondStep();
    break;
  case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
    getAnswer(works.c00, works.c1, works.c2);
    secondStep();
    break;
  case -1: // Первое действие
    break;
  default:
    alert("Ошибка");
}
alert("Спасибо за игру");
alert(answers.join(""));

//------------------------------------------
function isAnswer(q, event) {
  if (isNaN(event) || !isFinite(event)) {
    alert("Вы ввели недопустимый символ");
    return false;
  } else if (event < 1 || event > q) {
    alert("Ваше число выходит из допустимого диапозона");
    return false;
  }
  return true;
}
