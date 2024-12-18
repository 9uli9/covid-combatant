class CovidObstacle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.size = random(10, 20);
  }
  
  // weird bacteria like shape that looks like its shaking 
  // This code creates 10 vertices of a polygon and calculates the angle for each by dividing the circle into 10 segements 
  // and the radius is multiplied by a number between 0.8 and 1.2 it uses trigonometry such as cos and sin to determine the vertical and horizontal positions based on the angle and radius of the covidObstacle center point. These points then connect and that is what gives it a weird bacteria shape.
  display() {
    fill(0, 255, 0);
    beginShape();
    for (let i = 0; i < 10; i++) {
      let angle = i * TWO_PI / 10;
      let radius = this.size * random(0.8, 1.2);
      let x = this.position.x + cos(angle) * radius;
      let y = this.position.y + sin(angle) * radius;
      vertex(x, y);
    }
    endShape(CLOSE);
    
    // eyes and their calucaltions based on the side of the covid obstacle
    let eyeOffset = this.size * 0.2;
    let eyeSize = this.size * 0.1;
    
    fill(0);
    ellipse(this.position.x - eyeOffset, this.position.y - eyeOffset, eyeSize, eyeSize);
    ellipse(this.position.x + eyeOffset, this.position.y - eyeOffset, eyeSize, eyeSize);
  }
}

// adding an obstacle
let obstacle = new CovidObstacle(100, 100);
obstacle.display();
