
//Arrow back to top

$(document).ready(function() {
    // Show or hide the sticky footer button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });
    
    // Animate the scroll to top
    $('.go-top').click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({scrollTop: 0}, 200);
    })
});

    // Animate the scroll to top

    $('.expand-button').on('click', function(){
        $('.special-text').toggleClass('-expanded');
        
        if ($('.special-text').hasClass('-expanded')) {
          $('.expand-button').html('Less');
        } else {
          $('.expand-button').html('More');
        }
      });

      // Animate the scroll to top

    $('.expand-button-2').on('click', function(){
        $('.special-text-2').toggleClass('-expanded');
        
        if ($('.special-text-2').hasClass('-expanded')) {
          $('.expand-button-2').html('Less');
        } else {
          $('.expand-button-2').html('More');
        }
      });












