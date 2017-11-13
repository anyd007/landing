// smooth menu
$(document).ready(function(){
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing');
    });
    // back to the top
// 1. lets first listen for the scroll event
    $(window).scroll(function(){

        // top value in this case 0
        var wScroll = $(this).scrollTop();


        // determine when to show button
        var showScrollButton = 200;

        // fadein / fadeout back to  top button
        if (wScroll > showScrollButton) {
            $('#top').fadeIn(200);
        } else {
            $('#top').fadeOut(200);
        }
    });

// 2. lets create the button
    $('body').append('<a id="top" href="#">Powrót</a>');

// 3. lets create the css properties
//     $('#top').css({
//         "bottom" : "200px",
//         "right" : "20px",
//         "position" : "fixed",
//         "cursor" : "pointer",
//         "z-index" : "1",
//         "display" : "none",
//         "background-color" : "rgba(0,0,0,0.7)",
//         "padding" :"20px 40px",
//         "color" : "#ffffff"
//     });

// 4. lets create the on click
    $('#top').click(function () {
        $('body,html').animate({

            // position you want to scroll to
            scrollTop: 0
        }, 700);

        // stop anchor link behavior
        return false;
    });
    // end back to the top
});