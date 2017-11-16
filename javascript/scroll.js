$(document).ready(function () {

    var $spGlobe = $('#secend');
    $spGlobe.waypoint(function () {
        console.log('waypint');
        $spGlobe.addClass('sp-container sp-content');
    }, {offset: '50%'});
// create h2 elem
    $('.frame-1').append('<h2>HTML5/CSS3</h2>');
    $('.frame-1').css ({
        "opacity" : "0"
    });
$('.frame-2').append('<h2>JavaScript</h2>');
$('.frame-2').css ({
    "opacity" : "0"
});
    $('.frame-3').append('<h2>React JS</h2>');
    $('.frame-3').css ({
        "opacity" : "0"
    });
    $('.frame-4').append('<h2>AJAX</h2>');
    $('.frame-4').css ({
        "opacity" : "0"
    });
    // $('.frame-5').append('<h2><span class="skills">HTML5/CSS3</span> <span class="skills">JavaScript</span> <span class="skills">React JS</span></h2>');
    // $('.frame-5').css ({
    //     "opacity" : "0"
    // });
});
