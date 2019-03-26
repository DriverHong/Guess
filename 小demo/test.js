/* var a=1;
var b=2;

if(!(a<2)){
    console.log("a小于b");
}else{
    console.log("a大于b");
} */

for (var i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }