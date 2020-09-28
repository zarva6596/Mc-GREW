/* eslint-disable no-undef */
'use strict';

$(function() {
  $('.partners').slick({
    arrows: false,
    slidesToShow: 3,
    autoplay: true,
    // variableWidth: true,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 2 },
      },
    ],
  });

  $('.partners').css('border', '1px solid red');

  $('.home-support__slider').slick({
    fade: true,
    speed: 2000,
  });
});
