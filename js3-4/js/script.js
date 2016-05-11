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
wrapper.style.border = '1px solid black';
wrapper.style.margin = '50px auto';
wrapper.style.backgroundColor = 'white';
wrapper.style.width = '800px';

var body = document.body;
body.appendChild(wrapper);
body.style.backgroundColor = '#cccaca';

var header = document.createElement('h4');
header.innerHTML = 'Тест по программированию';
wrapper.appendChild(header);
header.style.margin = '20px 0 0 275px';

var checkbox = document.createElement('div');
checkbox.classList.add('checkbox');
wrapper.appendChild(checkbox);
checkbox.style.margin = '50px 0 0 100px';

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
submit.style.margin = '50px 0 50px 175px';
submit.style.borderRadius = '0px';
submit.style.border = '1px solid black';
submit.style.background = '#b9d1e8';
submit.style.color = 'black';
submit.style.fontSize = '16px';

for (var i = 0; i < test.question.length; i++) {

  var question = document.createElement('h4');
  questionBox.appendChild(question);
  question.innerHTML = (test.question[i]);
  question.style.margin = '15px 0 15px 0';

  for (var j = 0; j < 3; j++) {
    var checkboxName = document.createElement('label');
    questionBox.appendChild(checkboxName);
    checkboxName.innerHTML = test.answer[k];
    checkboxName.style.display = 'block';
    checkboxName.style.marginLeft = '30px';

    var answer = document.createElement('input');
    checkboxName.appendChild(answer);
    answer.type = 'checkbox';
    checkbox.name = test.checkboxName [k];
    checkbox.id = test.id [k];
    answer.style.marginLeft = '-150px';
    k++;
   }
}



