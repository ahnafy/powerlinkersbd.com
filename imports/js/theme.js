/**
 * Factoryline
 *
 * This file contains all template JS functions
 *
 * @package Factoryline
--------------------------------------------------------------
                   Contents
--------------------------------------------------------------

 * 01 - Owl Carousel
          - Home Slider
          - About Us Slider
          - Project Slider
          - Testimonial Slider
          - Provide Slider
          - Blog Slider
 * 02 - Facts Count 
 * 03 - Video Play 
 * 04 - Event Countdown
 * 05 - Portfolio Lightbox Gallery
 * 06 - Animation On Scroll
 * 07 - Mailchimp Form
 * 08 - Preloader

--------------------------------------------------------------*/

(function($) {
  "use strict";

// Owl Carousel 
  // Home Slider
    $("#home-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: true,
      nav: false,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      slideSpeed: 8000,
      smartSpeed: 2000,
      navText: ['', ''],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: false,
            dots: false,
        },
        1100: {
            items: 1,
            dots: true,
        }
      }
    });

// About Us Slider
    $("#abt-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: false,
      nav: false,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      slideSpeed: 300,
      smartSpeed: 2000,
      navText: ['', ''],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: false,
        },
        1100: {
            items: 1,
            nav: false,
        }
      }
    });

  // Project Slider
    $("#project-slider").owlCarousel({
      loop: true,
      items: 3,
      dots: true,
      nav: false,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 30,
      autoplay: true,
      slideSpeed: 300,
      smartSpeed: 2000,
      navText: ['', ''],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 2,
            nav: false,
        },
        1100: {
            items: 3,
            nav: false,
        }
      }
    });

  // Testimonial Slider
    $("#testimonial-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: false,
      nav: true,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: false,
      slideSpeed: 300,
      smartSpeed: 2000,
      navText: ['<i class="fa fa-angle-left"</i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: false,
        },
        1100: {
            items: 1,
            nav: true,
        }
      }
    });
    
  // Provide Slider
    $("#provide-slider").owlCarousel({
      loop: true,
      items: 6,
      dots: true,
      nav: false,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 30,
      autoplay: true,
      slideSpeed: 300,  
      navText: ['', ''],
      responsive: {
        0: {
            items: 2,
            nav: false,
            dots: false,
        },
        600: {
            items: 2,
            nav: false,
            dots: false,
        },
        768: {
            items: 3,
            nav: false,
            dots: false,
        },
        1100: {
            items: 6,
            nav: false,
            dots: true,
        }
      }
    });

  // Blog Slider
    $("#blog-block-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: true,
      nav: true,
      autoplayTimeout: 10000,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      slideSpeed: 600,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: false,
            dots: false,
        },
        1100: {
            items: 1,
            nav: false,
            dots: false,
        }
      }
    });
  
// Navigation / Menu
    $("#cssmenu").menumaker({
      title: "Menu",
      format: "multitoggle"
    });

// Facts Count
  if ($('.counter').length) {         
    $('.counter').counterUp({
      delay: 20,
      time: 2000
    });
  }
    
// Video Play 
    $('.btn-video-play').on('click',function() {
      $('.video-item .video-preview').append(video_url);
      $(this).hide();
    }); 

// Event Countdown
    if($('.coming-countdown').length){  
      $('.coming-countdown').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
        var $this = $(this).html(event.strftime('' + '<div class="counter-col-days"><span class="count-days">%D </span>:</div> ' + '<div class="counter-col"><span class="count-hours">%H</span> <span class="count-number">:</span> </div>  ' + '<div class="counter-col"><span class="count-minutes">%M</span> <span class="count-number">:</span> </div>  ' + '<div class="counter-col"><span class="count-seconds">%S</span></div>'));
      });
     });
    }

// Portfolio Lightbox Gallery    

      $('.popup-gallery').magnificPopup({
        delegate: '.portfolio-img a',
        type: 'image',    
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',    
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          titleSrc: function(item) {
            return item.el.attr('title') + '<small>by Factoryline</small>';
          }
        }
      }); 

// Animation On Scroll
    AOS.init({
     duration: 1000
    });

// Mailchimp Form
    $('#subscribe-form').ajaxChimp({
        url: 'http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh9'
    });

// Preloader
    $(window).on('load', function()  { 
      $('.status').fadeOut();
      $('.preloader').delay(350).fadeOut('slow'); 
    }); 

})(jQuery);