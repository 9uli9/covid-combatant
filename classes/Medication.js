class Medication {
    constructor(x, y) {
      this.position = createVector(x, y);
      this.width = 20; 
      this.height = 20; 
    }

    //first drawing red cross then white box
    
    display() {
      fill(255, 255, 255); 
      rect(this.position.x, this.position.y, this.width, this.height); 
      fill(255, 0, 0); 
      rect(this.position.x + 5, this.position.y + 8, 10, 4);
      rect(this.position.x + 8, this.position.y + 5, 4, 10);
    }
    
    // checking if the player and medication are collidng this happens when the distance is the middle point of the player.
    collide(player) {
      let d = dist(this.position.x, this.position.y, player.position.x, player.position.y);
      return d < this.width / 2 + player.size / 2;
    }
  }