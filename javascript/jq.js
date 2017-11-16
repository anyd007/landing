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
        return false;

        // stop anchor link behavior

    });
});
    // end back to the top

// resize element
function resize() {
    var n = $("body").width() / 17 + "pt";
    $("h1").css('fontSize', n);
}
$(window).on("resize", resize);
$(document).ready(resize);

// letter drop
(function($) {

    $.fn.letterDrop = function() {
        // Chainability
        return this.each( function() {

            var obj = $( this );

            var drop = {
                arr : obj.text().split( '' ),

                range : {
                    min : 1,
                    max : 9
                },

                styles : function() {
                    var dropDelays = '\n', addCSS;

                    for ( i = this.range.min; i <= this.range.max; i++ ) {
                        dropDelays += '.ld' + i + ' { animation-delay: 1.' + i + 's; }\n';
                    }

                    addCSS = $( '<style>' + dropDelays + '</style>' );
                    $( 'head' ).append( addCSS );
                },

                main : function() {
                    var dp = 0;
                    obj.text( '' );

                    $.each( this.arr, function( index, value ) {

                        dp = dp.randomInt( drop.range.min, drop.range.max );

                        if ( value === ' ' )
                            value = '&nbsp \n';

                        obj.append( '<span class="letterDrop ld' + dp + '">' + value + '</span>' );
                    });

                }
            };

            Number.prototype.randomInt = function ( min, max ) {
                return Math.floor( Math.random() * ( max - min + 1 ) + min );
            };


            // Create styles
            drop.styles();


            // Initialise
            drop.main();
        });

    };

}(jQuery));


// USAGE
$( '.main' ).letterDrop();

