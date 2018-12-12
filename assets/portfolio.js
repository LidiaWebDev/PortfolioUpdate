/* Thinny Theme Scripts */

(function($) {
  "use strict";

  $(window).on("load", function() {
    $("body").addClass("loaded");
  });

  /*=========================================================================
	Sticky Header
=========================================================================*/

  $(function() {
    var header = $("#header"),
      yOffset = 0,
      headerHeight = $(".header_section").height(),
      triggerPoint = 10;
    $(window).on("scroll", function() {
      yOffset = $(window).scrollTop();

      if (yOffset >= triggerPoint) {
        header.addClass("fixed-top");
      } else {
        header.removeClass("fixed-top");
      }
    });
    $(".header_height").css("margin-top", headerHeight);
  });

  /*=========================================================================
    Typed js Active
=========================================================================*/
  $(".typed").typed({
    strings: ["Jhon Doe.", "Designer.", "Creative."],
    loop: true,
    typeSpeed: 150
  });

  /*=========================================================================
	NiceScroll Active
=========================================================================*/
  $(window).on("load", function() {
    $("html").niceScroll({
      background: "#fff",
      cursorcolor: "#ddd",
      cursorwidth: "10px",
      scrollspeed: 40,
      mousescrollstep: 60,
      cursorborder: "0px solid #eaeaea",
      cursorborderradius: "0px",
      autohidemode: false,
      zindex: "999"
    });
  });

  /*=========================================================================
	Service Carousel
=========================================================================*/
  $("#service-carousel").owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    smartSpeed: 500,
    dots: false,
    nav: true,
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fa fa-chevron-right"></i>'
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2,
        margin: 10
      },
      1000: {
        items: 4
      }
    }
  });

  /*=========================================================================
    Isotope Active
=========================================================================*/
  $(".portfolio_items").imagesLoaded(function() {
    // Add isotope click function
    $(".portfolio_filter li").on("click", function() {
      $(".portfolio_filter li").removeClass("active");
      $(this).addClass("active");

      var selector = $(this).attr("data-filter");
      $(".portfolio_items").isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false
        }
      });
      return false;
    });

    $(".portfolio_items").isotope({
      itemSelector: ".single_item",
      layoutMode: "masonry"
    });
  });

  /*=========================================================================
    Initialize smoothscroll plugin
=========================================================================*/
  smoothScroll.init({
    offset: 60
  });

  /*=========================================================================
        Active venobox
=========================================================================*/
  var vbSelector = $(".img_popup");
  vbSelector.venobox({
    numeratio: true,
    infinigall: true
  });

  /*=========================================================================
    Scroll To Top
=========================================================================*/

  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 100) {
      $("#scroll-to-top").fadeIn();
    } else {
      $("#scroll-to-top").fadeOut();
    }
  });
})(jQuery);

particlesJS("particles-js", {
  particles: {
    number: {
      value: 355,
      density: {
        enable: true,
        value_area: 789.1476416322727
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.48927153781200905,
      random: false,
      anim: {
        enable: true,
        speed: 0.2,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 83.91608391608392,
        size: 1,
        duration: 3,
        opacity: 1,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});

$(function() {
  // Get the form.
  var form = $("#ajax_form");

  // Get the messages div.
  var formMessages = $("#form-messages");

  // Set up an event listener for the contact form.
  $(form).submit(function(event) {
    // Stop the browser from submitting the form.
    event.preventDefault();

    // Serialize the form data.
    var formData = $(form).serialize();
    // Submit the form using AJAX.
    $.ajax({
      type: "POST",
      url: $(form).attr("action"),
      data: formData
    })
      .done(function(response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass("alert-danger");
        $(formMessages).addClass("alert-success");

        // Set the message text.
        $(formMessages).text(response);

        // Clear the form.
        $("#name").val("");
        $("#email").val("");
        $("#message").val("");
      })
      .fail(function(data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass("alert-success");
        $(formMessages).addClass("alert-danger");

        // Set the message text.
        if (data.responseText !== "") {
          $(formMessages).text(data.responseText);
        } else {
          $(formMessages).text(
            "Oops! An error occured and your message could not be sent."
          );
        }
      });
  });
});
