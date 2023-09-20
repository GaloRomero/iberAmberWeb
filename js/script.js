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


//Counter 

function visible(partial) {
  var $t = partial,
      $w = jQuery(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

  return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

}

$(window).scroll(function(){

if(visible($('.count-digit')))
  {
    if($('.count-digit').hasClass('counter-loaded')) return;
    $('.count-digit').addClass('counter-loaded');
    
$('.count-digit').each(function () {
var $this = $(this);
jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
  duration: 5000,
  easing: 'swing',
  step: function () {
    $this.text(Math.ceil(this.Counter));
  }
});
});
  }
})

