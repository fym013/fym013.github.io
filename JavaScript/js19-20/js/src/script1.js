$(function() {

  $('.jcarousel').jcarousel({
        wrap: 'circular',
        animation: 'slow'
    }).jcarouselAutoscroll({
        interval: 2000
  });

  $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function() {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).removeClass('active');
        })
        .jcarouselPagination();

  $(".gallery__item").hover(
      function () {
        $(this).append($('<img class="gallery__img-hover" src="img/hov-serv.png" alt="">'));
      },
      function () {
        $(this).find(".gallery__img-hover").remove();
      }
    );

  $('.koalapse').koalapse();
});
