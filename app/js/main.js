$(function() {

  $('.header__slider').slick({
    ifinite: true,
    fade: true,
    prevArrow: '<img class="slide-arrows slide-arrows_left" src="img/arrow-left.svg">',
    nextArrow: '<img class="slide-arrows slide-arrows_right" src="img/arrow-right.svg">',
    asNavFor: '.slider-dotshead'
  });

  $('.slider-dotshead').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
    responsive: [
      {
        breakpoint: 769,
        settings: "unslick"
      },
    ]
  });

  $('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: 2,
    prevArrow: '<img class="slide-arrows slide-arrows_left" src="img/arrow-left.svg">',
    nextArrow: '<img class="slide-arrows slide-arrows_right" src="img/arrow-right.svg">',
    asNavFor: '.slider-map',
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  
  $('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1103,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      },
    ]
  });

  $('.holder__slider, .shop__slider').slick({
    ifinite: true,
    fade: true,
    prevArrow: '<img class="slide-arrows slide-arrows_left" src="img/arrow-left.svg">',
    nextArrow: '<img class="slide-arrows slide-arrows_right" src="img/arrow-right.svg">'
  });

  /* stylization input type number */
  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt="Plus"></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt="Minus"></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function() {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });

 /* formula for calculating the total amount depending on the number of guests and nights*/
  $('.quantity-button').on('click', function(){
    let parents = $(this).parents('.holder-slider__info');
    let summ = $('.summ', parents).data('nights') * $('.nights', parents).val() + $('.summ', parents).data('guests') * $('.guests', parents).val();
    $('.summ', parents).html('$' + summ);
  });
  
 /* here it calculates the sum with the original values */
  $('.quantity').each(function() {
    let parents = $(this).parents('.holder-slider__info');
    let summ = $('.summ', parents).data('nights') * $('.nights', parents).val() + $('.summ', parents).data('guests') * $('.guests', parents).val();
    $('.summ', parents).html('$' + summ);
  });

  /* +/- button for the surfboard */
  $('.surfboard-box__circle').on('click', function() {
    $(this).toggleClass('active');
  });

  /* burger menu*/
  $('.menu-btn').on('click', function() {
    $('.menu').toggleClass('active');
  });


  new WOW().init();
});