// animated background
// function img() {
//     var width = 20;
//     var height = 20;
//     var c = document.createElement("canvas");
//     c.width = width << 3;
//     c.heiht = height << 3;
//     var o = c.getContext("2d");
//     var x, y;
//     //o.fillStyle = "#000";
//     //o.fillRect(0, 0, width << 3, height << 3);
//     o.strokeStyle = "#999";
//     for(y = 0; y < width; y++) {
//         for(x = 0; x < height; x++) {
//             o.beginPath();
//             if(Math.random() < .5) {
//                 o.moveTo(x << 3, y << 3);
//                 o.lineTo(x + 1 << 3, y + 1 << 3);
//             } else {
//                 o.moveTo(x + 1 << 3, y << 3);
//                 o.lineTo(x << 3, y + 1 << 3);
//             }
//             o.stroke();
//         }
//     }
//     var img = c.toDataURL();
//     document.body.style.backgroundImage = "url(\"" + img + "\")";
// }
//
// img();

var c = document.createElement('canvas'),
    ctx = c.getContext('2d'),
    cw = c.width = 200,
    ch = c.height = 200;

for( var x = 0; x < cw; x++ ){
    for( var y = 0; y < ch; y++ ){
        ctx.fillStyle = 'hsl(0, 0%, ' + ( 100 - ( Math.random() * 15 ) ) + '%)';
        ctx.fillRect(x, y, 1, 1);
    }
}

document.body.style.background = 'url(' + c.toDataURL() + ')';
// end of animated background

