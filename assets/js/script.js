$(document).ready(function(){
    $('.main-wrapper,.inner-wrapper').css('min-height', $(window).height() + 'px');    


    //        new UIMorphingButton( document.querySelector( '.morph-button' ), {
    //            closeEl : '.icon-close',
    //        } );

    $('.work-wrapper').siblings('.navigation-wrapper').addClass('worknav');

    var imgheight = $('.office-image img').height() + 'px';
    $('#contact iframe').css('height', imgheight);

    $(window).resize(function() {
        var imgheight = $('.office-image img').height() + 'px';
        $('#contact iframe').css('height', imgheight);
    });



    //hide navigation wrap when clicked esc key

    $(document).keyup(function(event) {
        if(event.which === 27) {
            $('.navigation-wrap').hide();
        }
    });

    $('.impact-wrap svg').hover(function() {
        $(this).parent('.impact-image').addClass('impactover');
    },function(){
        $(this).parent('.impact-image').removeClass('impactover');
    });


    $(".trigger").click( function(event){
        $(this).toggleClass("inactive"); 
        $(this).toggleClass("active"); 
        $(this).parents('.navigation-wrapper').toggleClass('scroll');
        $('body').toggleClass('fixed');
        event.preventDefault();
        if ($(this).hasClass("inactive") ) {
            $( ".navigation-wrap" ).animate({
                'opacity': '0',
                'width': '0%',
                'height': '100%',
                'top': '400px',
                'left': '50%'
            },400, function() {
                // Animation complete.
            });
        } else {
            $( ".navigation-wrap" ).animate({
                'opacity': '1',
                'width': '100%',
                'height': '100%',
                'top': '0',
                'left': '0'
            }, 400, function() {
                // Animation complete.
            });
        }
        return false;
    });



    $(window).scroll(function() {
        if ($(window).width() > 1280) {
        var scrollVal = $(this).scrollTop();
        var imgHeight = $('.image-wrap').height()/2;
            if ( scrollVal > imgHeight) {
                $('.image-wrap').addClass('imagefixed-wrap');
            }
            else {
                $('.image-wrap').removeClass('imagefixed-wrap');
            }
        }
    });

    $(window).resize(function(){
        $(window).scroll(function() {
            if ($(window).width() > 1280) {
            var scrollVal = $(this).scrollTop();
            var imgHeight = $('.image-wrap').height()/2;
                if ( scrollVal > imgHeight) {
                    $('.image-wrap').addClass('imagefixed-wrap');
                }
                else {
                    $('.image-wrap').removeClass('imagefixed-wrap');
                }
            }
        });
    });


    $( "#target" ).toggle(function() {
        alert( "First handler for .toggle() called." );
    }, function() {
        alert( "Second handler for .toggle() called." );
    });




    //scrollit

    $.scrollIt();


    //    $(window).scroll(function() {
    //        var wrapVal = $(this).scrollTop();
    //        var wrapheight = $('.wrap-out').height() - 390;
    //       
    //        if ( wrapVal > wrapheight) {
    //            $('.slide-navigation').addClass('nav-circ');
    //        }
    //        else {
    //           
    //        }
    //    });
    //    
    //    $(window).scroll(function() {
    //        var quotVal = $(this).scrollTop();
    //        var qheight = $('.wrap-out').height();
    //        var quoteheight = $('.quote-wrapper').height();
    //        var totalheight = qheight+quoteheight+1000;
    //        if ( quotVal > totalheight) {
    //            $('.slide-navigation').removeClass('nav-circ');
    //        }
    //        else {
    //            
    //        }
    //    });


    // for touch devices

    if (!("ontouchstart" in document.documentElement)) {
        document.documentElement.className += " no-touch";
    }

    var ua = navigator.userAgent;
    function is_touch_device() {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }
    }


    if ((is_touch_device()) || ua.match(/(iPhone|iPod|iPad)/) || ua.match(/BlackBerry/) || ua.match(/Android/)) {
        $('.slide-navigation').css('display','none');
        $('.call').css('display','none');
        $('.tel').css('display','block');


        $(window).scroll(function() {
            var wrapVal = $(this).scrollTop();

            if ( wrapVal >= 10 ) {
                $('.contact .navigation-wrapper').addClass('contact-nav');
            }
            else {
                $('.contact .navigation-wrapper').removeClass('contact-nav');
            }
        });
    }



    //for non touch devices

    if (!("ontouchstart" in document.documentElement)) {
        document.documentElement.className += " no-touch";
    }

    var ua1 = navigator.userAgent;
    function is_touchd_device() {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }
    }

    if (!((is_touchd_device()) || ua1.match(/(iPhone|iPod|iPad)/) || ua1.match(/BlackBerry/) || ua1.match(/Android/))) {
        // Hide Header on on scroll down
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $('.navigation-wrapper').outerHeight();
        var topHeight = '-' + navbarHeight + 'px';

        $(window).scroll(function(event){
            didScroll = true;
        });

        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 100);

        function hasScrolled() {
            var st = $(this).scrollTop();
            var unpin = $('.unpin').scrollTop();

            // Make sure they scroll more than delta
            if(Math.abs(lastScrollTop - st) <= delta)
                return;

            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down
                $('.navigation-wrapper').removeClass('nav-down').addClass('nav-up');

            }
            else if(st + $(window).height() < $(document).height()) {
                $('.navigation-wrapper').removeClass('nav-up').addClass('nav-down');
                if ($(this).scrollTop() <= 0){
                    $('.navigation-wrapper').addClass('docked_nav');
                }
                else if ($(this).scrollTop() >= 110) {
                    $('.navigation-wrapper').removeClass('docked_nav');
                }

            }

            lastScrollTop = st;
        }



    }


    $('.contact-wrapper').parents('body').addClass('contact');
});