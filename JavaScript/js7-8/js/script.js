
$(function() {

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

});



$(function(){

    $("div input").hover(function() {
        $(this).next("em").animate({opacity: "show", top: "-75"}, "slow");
    }, function() {
        $(this).next("em").animate({opacity: "hide", top: "-85"}, "fast");
    });

});
