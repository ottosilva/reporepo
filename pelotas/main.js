var canvas = document.querySelector('.canvas');
console.log(canvas);
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

/*var random = (min, max) => {

    var num = Math.floor(Math.random()*(max - min + 1)) + min;
    return num;
}; */

function random(min,max) {

    var num = Math.floor(Math.random()* (max - min +1)) + min;
    return num;

};
// esta función recibe dos numeros como argumentos de entrada, el min y el max, y devuelve un numero aleatorio entre ellos

function Ball (x, y, velX, velY, color, size){

    this.x = x;
    this.y= y;
    this.velX= velX;
    this.velY= velY;
    this.color=color;
    this.size=size;
};
//constructor del objeto pelota

Ball.prototype.draw = function() {

    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
    
};

// ok ahora necesitamos que la pelota se mueva
//definimos una funcion de actualización para la pelota

Ball.prototype.update = function(){

    if ((this.x + this.size) >= width){
        this.velX = -(this.velX);
    }

    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
};

//ahora añadimos las pelotas
//primero definimos un sitio donde almacenarlas

var balls = [];

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);
  
    while (balls.length < 25) {
      var size = random(10,20);
      var ball = new Ball(
        // la posición de las pelotas, se dibujará al menos siempre
        // como mínimo a un ancho de la pelota de distancia al borde del
        // canvas, para evitar errores en el dibujo 
        random(0 + size,width - size),
        random(0 + size,height - size),
        random(-7,7),
        random(-7,7),
        'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
        size
      );
      balls.push(ball);
    }
  
    for (var i = 0; i < balls.length; i++) {
      balls[i].draw();
      balls[i].update();
    }
  
    requestAnimationFrame(loop);
  }

  loop();



