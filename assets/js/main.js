// Sticky navbar
// =========================
jQuery(document).ready(function () {
  // Custom function which toggles between sticky class (is-sticky)
  var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
    var stickyHeight = sticky.outerHeight();
    var stickyTop = stickyWrapper.offset().top;

    if (scrollElement.scrollTop() > stickyTop) {
      stickyWrapper.height(stickyHeight);
      sticky.addClass("is-sticky");
    } else {
      sticky.removeClass("is-sticky");
      stickyWrapper.height('auto');
    }
  };

  // Find all data-toggle="sticky-onscroll" elements
  jQuery('[data-toggle="sticky-onscroll"]').each(function () {
    var sticky = jQuery(this);
    var stickyWrapper = jQuery('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
    sticky.before(stickyWrapper);
    sticky.addClass('sticky');

    // Scroll & resize events
    jQuery(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
      stickyToggle(sticky, stickyWrapper, jQuery(this));
    });

    // On page load
    stickyToggle(sticky, stickyWrapper, jQuery(window));
  });
});

jQuery(function () {
  if (jQuery('.main-menu').length) {
    jQuery(document).on('click', function (e) {
      var el = '.main-menu';
      if (jQuery(e.target).closest(el).length) return;
      jQuery('.main-menu').collapse('hide');
    });
  } else {};
});


jQuery(function () {
  if ((window.location.href.indexOf("?success=") > -1) && (jQuery('.popup#pop-success').length)) {
	Fancybox.show(
  	[{
		src: "#pop-success",
		type: "inline"
    }]);

  } else {};
});


jQuery(function () {
  if (jQuery('.partner-slider').length) {
      jQuery('.partner-slider').slick({
                  slidesToShow: 5,
                  slidesToScroll: 2,
                  dots: false,
                  centerMode: false,
                  arrows: false,
                  vertical: false,
                  focusOnSelect: false,
                  infinite: true,
                  draggable: true,
                  autoplay: true,
                  autoplaySpeed: 4000,
                  fade: false,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2,
                        infinite: true
                      }
                    },
                    {
                      breakpoint: 800,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                      }
                    },
                    {
                      breakpoint: 640,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
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
  } else {};
});


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        jQuery('.main-menu').collapse('hide');
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.focus(); // Set focus again
          };
          
        });
      }
    }
  });

$(function () {
  if ($('.w-custom-select').length) {
      $('.w-custom-select').selectpicker();
      $('.w-custom-select.custom-select').each(function(){
        var attrName = $(this).attr('data-name');
        $(this).attr('name',attrName);
      })
  } else {};
});


$(function () {
  if ($('.reveal').length) {
    
      function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
    
    window.addEventListener("scroll", reveal);

  // To check the scroll position on page load
  reveal();

    
    
  } else {};
});
