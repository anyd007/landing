
// (function($) {
//     function mediaSize2() {
//         if (window.matchMedia('(min-width : 320px) and (max-width : 768px)').matches) {
//             $('#first');
//         } else {
//             var c = document.createElement('canvas'),
//                 ctx = c.getContext('2d'),
//                 cw = c.width = weather_img,
//                 ch = c.height = weather_img;
//
//             for( var x = 0; x < cw; x++ ){
//                 for( var y = 0; y < ch; y++ ){
//                     ctx.fillStyle = 'hsl(0, 0%, ' + ( 100 - ( Math.random() * 15 ) ) + '%)';
//                     ctx.fillRect(x, y, 1, 1);
//                 }
//             }
//
//             document.body.style.background = 'url(' + c.toDataURL() + ')';
//         }
//     };
//     mediaSize2();
//     window.addEventListener('resize', mediaSize2, false);
// })(jQuery);

 // phone typing
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
    splitLetters(words[i]);
}

function changeWord() {
    var cw = wordArray[currentWord];
    var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
    for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
    }

    for (var i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
    }

    currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
    setTimeout(function() {
        cw[i].className = 'letter out';
    }, i*80);
}

function animateLetterIn(nw, i) {
    setTimeout(function() {
        nw[i].className = 'letter in';
    }, 340+(i*80));
}

function splitLetters(word) {
    var content = word.innerHTML;
    word.innerHTML = '';
    var letters = [];
    for (var i = 0; i < content.length; i++) {
        var letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
    }

    wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);
// phone typing end

// snow canvas

window.onload = function() {

    window.requestAnimFrame = (function() {

        return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||

            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    function createSnow() {

        var particles = [];
        var particleSize = 1.75;
        var maxParticles = 5000;
        var particleOpacity = .9;

        // Initialize canvas
        var canvas  = document.getElementById('snow');
        var ctx     = canvas.getContext('2d');

        // Get window width & height
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;

        // Apply canvas size based on window width & height.
        // This can be changed to bound within an element instead.
        canvas.width = windowWidth;
        canvas.height = windowHeight;

        // Push particle iteration
        for (var i = 0; i < maxParticles; i++) {

            particles.push({

                // Particle x position
                x: Math.random() * windowWidth,

                // Particle y position
                y: Math.random() * windowHeight,

                // Particle radius
                r: Math.random(Math.min(particleSize)) * particleSize,

                // Particle density
                d: Math.random() * maxParticles,
            });
        }

        // Render particles
        function render() {

            ctx.clearRect(0, 0, windowWidth, windowHeight);
            ctx.fillStyle = 'rgba(255, 255, 255, ' + particleOpacity + ')';
            ctx.beginPath();

            for(var i = 0; i < maxParticles; i++) {

                // Iterate the particles.
                var p = particles[i];

                // Move particles along x, y.
                ctx.moveTo(p.x, p.y);

                // Draw particle.
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
            }

            ctx.fill();
            update();
        }

        // To create a more dynamic and organic flow, we need to apply an
        // incremental 'angle' that will iterate through each particle flow.
        var angle = 0.005;

        // Update particles
        function update() {

            // Incremental angle.
            angle += 0.005;

            for (var i = 0; i < maxParticles; i++) {

                var p = particles[i];

                // Offset the particles flow based on the angle.
                p.y += Math.cos(p.d) + p.r;
                p.x += Math.sin(angle) * Math.PI / 10;

                // Re-iterate the particles to the top once the particle has
                // reached the bottom of the window.
                if (p.y > windowHeight) {

                    particles[i] = {

                        x: Math.random() * windowWidth,
                        y: 0,
                        r: p.r,
                        d: p.d
                    };
                }
            }
        }
        // Call function.
        (function runtime() {
            requestAnimFrame(runtime);
            render();
        })();
    } createSnow();
}
// snow canvas end