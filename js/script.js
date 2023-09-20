
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
    
    $('.go-top').click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({scrollTop: 0}, 200);
    })
});

    // More-Less Team

    $('.expand-button').on('click', function(){
        $('.special-text').toggleClass('-expanded');
        
        if ($('.special-text').hasClass('-expanded')) {
          $('.expand-button').html('Less');
        } else {
          $('.expand-button').html('More');
        }
      });

    // More-Less Team-Cards

    
    $('.expand-button-cards').on('click', function(){
      $('.special-text-cards').toggleClass('-expanded');
      
      if ($('.special-text-cards').hasClass('-expanded')) {
        $('.expand-button-cards').html('Less');
      } else {
        $('.expand-button-cards').html('More');
      }
    });



      // More-Less Project

    $('.expand-button-2').on('click', function(){
        $('.special-text-2').toggleClass('-expanded');
        
        if ($('.special-text-2').hasClass('-expanded')) {
          $('.expand-button-2').html('Less');
        } else {
          $('.expand-button-2').html('More');
        }
      });


// Clipboard js 

new ClipboardJS('.btn');







