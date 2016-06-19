$ (function() {

    $('.carousel').carousel();

    //shablon
    var anketa = {
        name: 'Киану',
        photo: {
            src: 'img/kianu.jpg',
        },
        job: 'Актер',
        why: 'Почему мне нравится быть актером:',
        reasons: ['способ самовыражения',
            'нравится смена личностей',
            'великий вид творчества'],
        tel: 'Мой контактный телефон:',
        number: '+123 456 78 90',
        fb: 'Мой профиль в соцсети:',
        fb_link: 'https://www.facebook.com/Kianu-Rivs-65583216832/?fref=ts',
        feedback: 'Мой фидбек:',
        feedback_text: 'Такое простое действие, как обращать внимание, может отнять у вас много времени.'
    }

    // JavaScript Micro-Templating
    var profile = $('#profile').html();
    var content = tmpl(profile, anketa);
    $('.shablon').append('<h2>JavaScript Micro-Templating</h2>');
    $('.shablon').append(content);

});


