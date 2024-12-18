
// p5.Vector.random2D() is a method that gives a 2d vector a random direction and then multiplied 
// with a value between 2 – 4 , this then gives the speed and direction in which the covid particle object is moving. 
class CovidParticle {
	constructor(x, y) {
	  this.position = createVector(x, y);
	  this.velocity = p5.Vector.random2D().mult(random(2, 4));
	  this.size = 10;
	}
	
	update() {
	  this.position.add(this.velocity);
	  
	// if the covid particle touches the left edge of the canvas make it reaapear on the right and vise versa.
    // if the covid particle touches the bottom edge of the canvas make it reaapear on the top and vise versa.
    // code from lab3 cc2 plane class by john montayne
	  if (this.position.x < 0) this.position.x = width;
	  if (this.position.x > width) this.position.x = 0;
	  if (this.position.y < 0) this.position.y = height;
	  if (this.position.y > height) this.position.y = 0;
	}
	
	//drawign grren circle
	display() {
	  fill(50, 205, 50); 
	  strokeWeight(2);
	  ellipse(this.position.x, this.position.y, this.size, this.size); 
	}
  }