
// animated background
var livePatern = {
    canvas: null,
    context: null,
    cols: 0,
    rows: 0,
    colors: [252, 251, 249, 248, 241, 240],
    triangleColors: [],
    destColors: [],

    init: function(){
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
        this.cols = Math.floor(document.body.clientWidth / 24);
        this.rows = Math.floor(document.body.clientHeight / 24) + 1;

        this.canvas.width = document.body.clientWidth;
        this.canvas.height = document.body.clientHeight;

        this.drawBackground();
        this.animate();
    },

    drawTriangle: function(x, y, color, inverted){
        inverted = inverted == undefined ? false : inverted;

        this.context.beginPath();
        this.context.moveTo(x, y);
        this.context.lineTo(inverted ? x - 22 : x + 22, y + 11);
        this.context.lineTo(x, y + 22);
        this.context.fillStyle = "rgb("+color+","+color+","+color+")";
        this.context.fill();
        this.context.closePath();
    },

    getColor: function(){
        return this.colors[(Math.floor(Math.random() * 6))];
    },

    drawBackground: function(){
        var eq = null;
        var x = this.cols;
        var destY = 0;
        var color, y;

        while(x--){
            eq = x % 2;
            y = this.rows;

            while(y--){
                destY = Math.round((y-0.5) * 24);

                this.drawTriangle(x * 24 + 2, eq == 1 ? destY : y * 24, this.getColor());
                this.drawTriangle(x * 24, eq == 1 ? destY  : y * 24, this.getColor(), true);
            }
        }
    },

    animate: function(){
        var me = this;

        var x = Math.floor(Math.random() * this.cols);
        var y = Math.floor(Math.random() * this.rows);
        var eq = x % 2;

        if (eq == 1) {
            me.drawTriangle(x * 24, Math.round((y-0.5) * 24) , this.getColor(), true);
        } else {
            me.drawTriangle(x * 24 + 2, y * 24, this.getColor());
        }

        setTimeout(function(){
            me.animate.call(me);
        }, 10);
    },

};

!function(){livePatern.init();}()

// end of animated background

// CV button

var moveForce = 30; // max popup movement in pixels
var rotateForce = 20; // max popup rotation in deg

$(document).mousemove(function(e) {
    var docX = window.innerWidth;
    var docY = window.innerHeight;

    var moveX = (e.pageX - docX/2) / (docX/2) * -moveForce;
    var moveY = (e.pageY - docY/2) / (docY/2) * -moveForce;

    var rotateY = (e.pageX / docX * rotateForce*2) - rotateForce;
    var rotateX = -((e.pageY / docY * rotateForce*2) - rotateForce);

    $('.popup')
        .css('left', moveX+'px')
        .css('top', moveY+'px')
        .css('transform', 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');
});
// CV button end

