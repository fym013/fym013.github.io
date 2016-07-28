$(function() {

  $('.content__box').jcarousel({
        wrap: 'circular',
        animation: 'slow'
    }).jcarouselAutoscroll({
        interval: 2000
  });

  $('.slider__btn-prev').jcarouselControl({
        target: '-=1'
  });

  $('.slider__btn-next').jcarouselControl({
        target: '+=1'
  });

  function grid() {
    var $grid = $('.grid');
    $grid.imagesLoaded(function () {
        $grid.masonry({
            itemSelector: '.grid-item',
            columnWidth: function( containerWidth ) {
                return ( containerWidth / 3 - 8)
            },
            gutterWidth: 8
        });
    });
  }

  function search() {
      $('.ideas').find('div').remove();
      var $searchKey = $('.search__field').val();

      $.ajax({
          url: 'https://pixabay.com/api/?key=2650584-e8feab9b11ed644dcec728ac9&q=' + $searchKey + '&image_type=photo&category=sports',
          dataType: 'jsonp',
          success: function (data) {

              var $html = $('#container').html();
              var $content = tmpl($html, data);
              $('.ideas').append($content);
              grid();
          },
          error: function () {
              alert('Error!');
          }
      });
  }

  search();

  $('.search__btn').on('click', function (e) {
      e.preventDefault();
      search();
      $('.search__field').val('');
  })

});

