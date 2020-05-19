$( document ).ready(function() {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  });

  $('.nav-link__mobile').on('click', function () {
    $('.offcanvas-collapse').removeClass('open')
  });

// Menú fixed
$(window).scroll(function () {
  if ($(document).scrollTop() > 70 && ($(window).width() >= 0)) {
    $('.navbar-fixed-js').addClass('fixed');
    $('.nav-link').addClass('fixed-color');
    $('.nav-top__header').addClass('nav-top__header--detele');
    $('.hamburger-inner').addClass('js-hamburger');
    $("#iso").addClass('img-size').attr('src', 'assets/img/Logo_CM.png').removeClass('scroll-up');
    $('.nombre-logo').addClass('nombre-logo--black');
  } else {
    $('.navbar-fixed-js').removeClass('fixed');
    $('.nav-link').removeClass('fixed-color');
    $('.nav-top__header').removeClass('nav-top__header--detele');
    $('.hamburger-inner').removeClass('js-hamburger');
    $("#iso").removeClass('img-size').attr('src', 'assets/img/logo-color.png').removeClass('scroll-up');
    $('.nombre-logo').removeClass('nombre-logo--black');
  }
});

$(".hamburger").on("click", function () {
  if (!$(this).hasClass("is-active")) {
    $(this).addClass("is-active")
    $('.navbar-fixed-js').addClass('fixed');
    $('.hamburger-inner').addClass('js-hamburger');
    $('.nav-link').addClass('fixed-color');
    $('body').css('overflow', 'hidden ');
  } else {
    $(this).removeClass("is-active")
    $('body').css('overflow', 'scroll');
    if ($(document).scrollTop() <= 70 && ($(window).width() >= 0)) {
      $('.navbar-fixed-js').removeClass('fixed');
      $('.hamburger-inner').removeClass('js-hamburger');
      $('.nav-link').removeClass('fixed-color');
    }
  }
});

$('.main-team__content').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
$('.main-products__content').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });

  $("#submit").click(function (e) {
    e.preventDefault();
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let name = $("#name")[0].value;
    let email = $("#email")[0].value;
    let message = $("#message")[0].value

    if(name != "" && email != "" && message != ""){
      if(reg.test(email)) {

        $.ajax({
          url: 'http://localhost:3001/mail/enviarEmail',
          method: "POST",
          data: JSON.stringify({
            email: email,
            nombre: name,
            mensaje: message,
            codigo: "enviodecorreosdeEulogio"
          }),
          cache: false,
          contentType: "application/json",
          processData: false,
          success: function(respuesta) {
            if ($("#notificacion")) {
              $("#notificacion").css('display', 'block');
              $("#notificacion").delay(6500).fadeOut(1500,"swing");
            }
          },
          error: function() {
            if ($("#notificacionError")) {
              $("#notificacionError").css('display', 'block');
              $("#notificacionError").delay(6500).fadeOut(1500,"swing");
            }
          }
        });
      }else{
        if ($("#notificacionEmailError")) {
          $("#notificacionEmailError").css('display', 'block');
          $("#notificacionEmailError").delay(6500).fadeOut(1500,"swing");
        }
      }     
    }else{
      if ($("#notificacionVacio")) {
        $("#notificacionVacio").css('display', 'block');
        $("#notificacionVacio").delay(6500).fadeOut(1500,"swing");
      }
    }
  });

});