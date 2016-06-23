
$(function () {

    //FIND PICTURE
    $('.btn').on('click', search);

    $('.search').keypress(function () {
        if (event.keyCode == 13) {
            search;
        } else return;
    });

    //search function
    function search(e) {
        e.preventDefault();
        $('img').remove();
        var $searchKey = $('.search').val();

        $.ajax({
            url: 'https://pixabay.com/api/?key=2650584-e8feab9b11ed644dcec728ac9&q=' + $searchKey + '&image_type=photo',
            dataType: 'jsonp',
            success: function (data) {
                var $results = data.hits;
                for (var i = 0; i < data.hits.length; i++) {
                    $('.result').append('<img src="' + $results[i].previewURL + '">');
                }

            },
            error: function () {
                alert('Error!');
            }
        });

        $('.search').val('');
    }

    //PROTOTYPE

    function Human(name, age, gender, height, weight) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
    }

    Worker.prototype = Object.create(Human.prototype);
    Worker.prototype.constructor = Worker;
    Student.prototype = Object.create(Human.prototype);
    Student.prototype.constructor = Student;

    Human.prototype.does = function() {
        console.log('Занятие: ' + this.work);
    }

    function Worker(name, age, gender, height, weight, workplace, sale) {
        Human.apply(this, arguments);
        this.workplace = workplace;
        this.sale = sale;
        this.work = 'Я работаю!';
    }

    function Student(name, age, gender, height, weight, study, sale) {
        Human.apply(this, arguments);
        this.study = study;
        this.sale = sale;
        this.work = 'Загораю';
    }

    var vasya = new Worker('Vasilii', 33, 'male', 190, 90, 'factory', 3000);
    console.log(vasya);
    vasya.does();

    var oksana = new Worker('Oksana', 39, 'female', 175, 60, 'plant', 5000);
    console.log(oksana);
    oksana.does();

    var karina = new Student('Karina', 21, 'female', 170, 55, 'university', 500);
    console.log(karina);
    karina.does();

    var mark = new Student('Mark', 19, 'male', 180, 80, 'college', 300);
    console.log(mark);
    mark.does();

});
