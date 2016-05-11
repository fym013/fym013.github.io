var test = {
    header: 'Тест по программированию',
    question: ['1. Вопрос №1' , '2. Вопрос №2' ,'3. Вопрос №3'],
    checkboxName: ['one' , 'two' , 'three' , 'four' , 'five' , 'six' , 'seven' ,'eight','nine'],
    id: ['1' , '2' , '3' , '4' , '5' , '6' , '7' ,'8','9'],
    answer: ['Вариант ответа №1','Вариант ответа №2', 'Вариант ответа №3',
            'Вариант ответа №1','Вариант ответа №2', 'Вариант ответа №3',
            'Вариант ответа №1','Вариант ответа №2', 'Вариант ответа №3'],
    submit: 'Проверить мои результаты'
};

var k = 0;

var wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

var body = document.body;
body.appendChild(wrapper);

var header = document.createElement('h4');
header.classList.add('header');
header.innerHTML = 'Тест по программированию';
wrapper.appendChild(header);

var checkbox = document.createElement('form');
checkbox.classList.add('checkbox');
wrapper.appendChild(checkbox);

var questionBox = document.createElement('div');
questionBox.classList.add('questionBox');
checkbox.appendChild(questionBox);

var submit = document.createElement('button');
checkbox.appendChild(submit);
submit.type = 'button';
submit.classList.add('btn');
submit.classList.add('btn-primary');
submit.classList.add('btn-lg');
submit.innerHTML = (test.submit);

for (var i = 0; i < test.question.length; i++) {

  var question = document.createElement('h4');
  question.classList.add('question');
  questionBox.appendChild(question);
  question.innerHTML = (test.question[i]);

  for (var j = 0; j < 3; j++) {
    var checkboxName = document.createElement('label');
    checkboxName.classList.add('checkboxName');
    questionBox.appendChild(checkboxName);
    checkboxName.innerHTML = test.answer[k];

    var answer = document.createElement('input');
    answer.classList.add('answer');
    checkboxName.appendChild(answer);
    answer.type = 'checkbox';
    checkbox.name = test.checkboxName [k];
    checkbox.id = test.id [k];
    k++;
   }
}



