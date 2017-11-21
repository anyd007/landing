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
                        dropDelays += '.ld' + i + ' { animation-delay: 0.4' + i + 's; }\n';
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
$(".main2").delay(2000).queue(function(next) {
    $(this).addClass("main2show").letterDrop();
    next();
});
$(".main3").delay(4000).queue(function(next) {
    $(this).addClass("main3show").letterDrop();
    next();
});

// end of letter drop
