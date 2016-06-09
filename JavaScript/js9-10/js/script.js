$(function() {

  $('.dropdown').hover(
        function(){
            $(this).children('.sub-menu').slideDown(200);
            },
        function(){
            $(this).children('.sub-menu').slideUp(200);
   });

  $('.jcarousel').jcarousel({
        wrap: 'circular',
        animation: 'slow'
    }).jcarouselAutoscroll({
        interval: 2000
  });

  $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
  });

  $('.jcarousel-next').jcarouselControl({
        target: '+=1'
  });

  $("select").uniform();

});

