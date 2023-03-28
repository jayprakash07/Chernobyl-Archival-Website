(function ($) {
  "use strict"
  var GUPPY = {};

  /*--------------------
    * Pre Load
  ----------------------*/
  GUPPY.WebLoad = function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
      'overflow': 'visible'
    });

  }
  /*--------------------
     * Back to Top
  ----------------------*/
  GUPPY.BackToTop = function () {
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 100) {
        $('.back_top').fadeIn();
      } else {
        $('.back_top').fadeOut();
      }
    });
    $('.back_top').click(function () {
      $("html, body").animate({ scrollTop: 0 }, 1000);
      return false;
    });
  }
  /*--------------------
      * Header Class
  ----------------------*/
  GUPPY.HeaderSticky = function () {
    $(".navbar-toggler").on("click", function (a) {
      a.preventDefault(), $(".header").addClass("fixed-header")
    });
  }

  /*--------------------
      * Menu Close
  ----------------------*/
  GUPPY.MenuClose = function () {
    $('.navbar-nav .nav-link').on('click', function () {
      var toggle = $('.navbar-toggler').is(':visible');
      if (toggle) {
        $('.navbar-collapse').collapse('hide');
      }
    });
  }

  /*--------------------
      * Smooth Scroll
  ----------------------*/
  GUPPY.HeaderScroll = function () {
    $('a[href*="#"]:not([href="#"])').on('click', function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 0,
          }, 1000);
          return false;
        }
      }
    });
  }

  /*--------------------
      * Header Fixed
  ----------------------*/
  GUPPY.HeaderFixed = function () {
    if ($(window).scrollTop() >= 60) {
      $('.header').addClass('fixed-header');
    }
    else {
      $('.header').removeClass('fixed-header');
    }
  }

  /*--------------------
      * Type It
  ----------------------*/
  GUPPY.mTypeIt = function () {
    new TypeIt('#type-it', {
      speed: 120,
      loop: true,
      nextStringDelay: [0, 3000],
      strings: [
        'Disaster.',
        'Liquidators.',
        'Radiation.'
      ],
      breakLines: false
    });
  }


  /*--------------------
      * Progress Bar 
  ----------------------*/
  GUPPY.ProgressBar = function () {
    $(".progress .progress-bar").each(function () {
      var bottom_object = $(this).offset().top + $(this).outerHeight();
      var bottom_window = $(window).scrollTop() + $(window).height();
      var progressWidth = $(this).attr('aria-valuenow') + '%';
      if (bottom_window > bottom_object) {
        $(this).css({
          width: progressWidth
        });
      }
    });
  }

  /*--------------------
  * Counter JS
  ----------------------*/
  var a = 0;
  GUPPY.Counter = function () {
    var oTop = $('.counter-box').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
      a = 1;
    }
  }

  /*--------------------
  * Isotope
  ----------------------*/
  GUPPY.MasoNry = function () {
    var portfolioWork = $('.portfolio-content');
    $(portfolioWork).isotope({
      resizable: false,
      itemSelector: '.portfolio-item',
      layoutMode: 'masonry',
      filter: '.Images'
    });
    //Filtering items on portfolio.html
    var portfolioFilter = $('.filter li');
    // filter items on button click
    $(portfolioFilter).on('click', function () {
      var filterValue = $(this).attr('data-filter');
      portfolioWork.isotope({ filter: filterValue });
    });
    //Add/remove class on filter list
    $(portfolioFilter).on('click', function () {
      $(this).addClass('active').siblings().removeClass('active');
    });
  }

  /*--------------------
  * owl Slider
  ----------------------*/
  GUPPY.BlogSlider = function () {
    var testimonials_slider = $('#blog-slider-single');
    testimonials_slider.owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        991: {
          items: 3
        },
        1140: {
          items: 3
        }
      }
    });
  }

  GUPPY.ClientSlider = function () {
    var testimonials_slider = $('#client-slider-single');
    testimonials_slider.owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      items: 2,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1
        },
        991: {
          items: 2
        },
        1140: {
          items: 2
        }
      }
    });
  }


  GUPPY.PopupVideo = function () {
    $('.popup-video').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  }

  GUPPY.LightboxGallery = function () {
    $('.portfolio-content').magnificPopup({
      delegate: '.lightbox-gallery',
      type: 'image',
      tLoading: '#%curr%',
      mainClass: 'mfp-fade',
      fixedContentPos: true,
      closeBtnInside: true,
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 5] // Will preload 0 - before current, and 1 after the current image
      }
    });
  }


  // Window on Load
  $(window).on("load", function () {
    GUPPY.WebLoad();
  });

  $(document).on("ready", function () {
    GUPPY.MasoNry(),
      GUPPY.ClientSlider(),
      GUPPY.MenuClose(),
      GUPPY.BlogSlider(),
      GUPPY.Counter(),
      GUPPY.ProgressBar(),
      GUPPY.HeaderScroll(),
      GUPPY.mTypeIt(),
      GUPPY.PopupVideo(),
      GUPPY.LightboxGallery(),
      GUPPY.HeaderSticky();
    GUPPY.BackToTop();
  });

  $(window).on("scroll", function () {
    GUPPY.Counter(),
      GUPPY.ProgressBar(),
      GUPPY.HeaderFixed();
  });

})(jQuery);


