
// Header Ap

function openBox() {

  let displayDownUp = document.getElementById('box');
  let textOffers = document.getElementById('text');

    if(displayDownUp.style.display == 'none', textOffers.innerHTML == 'Акції та спеціальні пропозиції') {
      displayDownUp.style.display = 'block';
      displayDownUp.style.height = '68px';
      textOffers.innerHTML = 'Свернуть';
      textOffers.style.left = '390px';
      textOffers.className = 'offers__wrap-open-title-change';
    } else {
      displayDownUp.style.display = 'none';
      displayDownUp.style.height = '0px';
      textOffers.innerHTML = 'Акції та спеціальні пропозиції';
      textOffers.style.left = '290px';
      textOffers.className = 'offers__wrap-open-title';
    }
    return displayDownUp;
}

openBox();

// Map popap

function showCity() {

  let kramatorskCity = document.querySelector('#kramatorsk');
  let severodonetskCity = document.querySelector('#severodonetsk');
  let dnieperCity = document.querySelector('#dnieper');
  let kremenchukCity = document.querySelector('#kremenchuk');

  kramatorskCity.onmouseout = function() {
    document.getElementById('kramatorsk-icon').src = 'images/map/icon.svg';
    document.getElementById('kramatorsk-show').style.display ='none';
  };

  kramatorskCity.onmouseover = function() {
    document.getElementById('kramatorsk-icon').src = 'images/map/icon-active.svg';
    document.getElementById('kramatorsk-show').style.display ='block';
  };

  severodonetskCity.onmouseout = function() {
    document.getElementById('severodonetsk-icon').src = 'images/map/icon.svg';
    document.getElementById('severodonetsk-show').style.display ='none';
  };

  severodonetskCity.onmouseover = function() {
    document.getElementById('severodonetsk-icon').src = 'images/map/icon-active.svg';
    document.getElementById('severodonetsk-show').style.display ='block';
  };

  dnieperCity.onmouseout = function() {
    document.getElementById('dnieper-icon').src = 'images/map/icon.svg';
    document.getElementById('dnieper-show').style.display ='none';
  };

  dnieperCity.onmouseover = function() {
    document.getElementById('dnieper-icon').src = 'images/map/icon-active.svg';
    document.getElementById('dnieper-show').style.display ='block';
  };

  kremenchukCity.onmouseout = function() {
    document.getElementById('kremenchuk-icon').src = 'images/map/icon.svg';
    document.getElementById('kremenchuk-show').style.display ='none';
  };

  kremenchukCity.onmouseover = function() {
    document.getElementById('kremenchuk-icon').src = 'images/map/icon-active.svg';
    document.getElementById('kremenchuk-show').style.display ='block';
  };

}

showCity();


// Converter SVG

$('img.img-svg').each(function(){
    let $img = $(this);
    let imgClass = $img.attr('class');
    let imgURL = $img.attr('src');
    $.get(imgURL, function(data) {
      let $svg = $(data).find('svg');
      if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
      }
      $svg = $svg.removeAttr('xmlns:a');
      if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }
      $img.replaceWith($svg);
    }, 'xml');
  });

  $('img.svg-loc').each(function(){
    let $img = $(this);
    let imgClass = $img.attr('class');
    let imgURL = $img.attr('src');
    $.get(imgURL, function(data) {
      let $svg = $(data).find('svg');
      if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
      }
      $svg = $svg.removeAttr('xmlns:a');
      if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }
      $img.replaceWith($svg);
    }, 'xml');
  });

// Slick slider

$(function () {

    //  $('.promo__wrap-slider').slick({
//   arrows: false,
//   dots: false,
//   adaptiveHeight: true,
// });

$('.doctors__wrap-photo').slick({
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$('.doctors__wrap-title-btn-left').on('click', function() {
  $('.doctors__wrap-photo').slick('slickPrev');
  });

  $('.doctors__wrap-title-btn-right').on('click', function() {
      $('.doctors__wrap-photo').slick('slickNext');
      });

      $('.').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 769,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
      
      $('.reviews__wrap-content-btn-left').on('click', function() {
        $('.reviews__wrap-content').slick('slickPrev');
        });
      
        $('.reviews__wrap-content-btn-right').on('click', function() {
            $('.reviews__wrap-content').slick('slickNext');
            });

});

