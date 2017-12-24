// smooth menu
$(document).ready(function() {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing');
    });
    // end of smooth menu


// resize element
//     function resize() {
//         var n = $("body").width() / 17 + "px";
//         $("h1").css('fontSize', n);
//     }
//
//     $(window).on("resize", resize);
//     $(document).ready(resize);


// resize element end
//     add portfoliot text

});

