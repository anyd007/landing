$('body').append('<div class="cssloader"><div class="sh1"></div><div class="sh2"></div><h4 class="lt">WCZYTUJE</h4></div>');
$(window).on('load', function(){
    setTimeout(removeLoader,400); //wait for page load PLUS two seconds.
});
function removeLoader(){
    $( ".cssloader" ).fadeOut(200, function() {
        // fadeOut complete. Remove the loading div
        $( ".cssloader" ).remove(); //makes page more lightweight
    });
}
