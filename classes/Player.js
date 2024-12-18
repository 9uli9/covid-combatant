class Player {
    constructor() {
      this.position = createVector(width / 2, height / 2);
      this.size = 25; 
      this.speed = 8;
    }
    
    // KeyIsDown method that allows the program to know if the key is pressed to move a
    // particular arrow in a particular direction in a positive or negative manner on either the x or y axis. 
    update() {
      if (keyIsDown(LEFT_ARROW)) {
        this.position.x -= this.speed;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        this.position.x += this.speed;
      }
      if (keyIsDown(UP_ARROW)) {
        this.position.y -= this.speed;
      }
      if (keyIsDown(DOWN_ARROW)) {
        this.position.y += this.speed;
      }
      // constrains the player inside of the canvas boundaries so the player can be seen at all times
      this.position.x = constrain(this.position.x, 0, width);
      this.position.y = constrain(this.position.y, 0, height);
    }
    
    display() {
      
      fill(255); 
      stroke(0); 
      strokeWeight(2);
      ellipse(this.position.x, this.position.y, this.size, this.size); 
    }
    
   // checking if the player and an object are collidng this happens when both the objects have touched eachothers midpoint so the distance is the middle point of the player and the middle point of the object.
    collide(object) {
      let d = dist(this.position.x, this.position.y, object.position.x, object.position.y);
      return d < this.size / 2 + object.size / 2;
    }
    // reseting the vector to the middle of the canvas
    reset() {
      this.position = createVector(width / 2, height / 2);
    }
  }
  