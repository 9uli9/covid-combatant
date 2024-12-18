// global variables
let player;
let particles = [];
let obstacles = [];
let medications = []; 
let startTime;
let elapsedTime = 0;
let gameOver = false;
let health = 100; 

// importing a custom image
function preload() {
  waitingRoomImage = loadImage('waitingRoom.jpg');
}

function setup() {
  createCanvas(600, 400);
  player = new Player();
  //in seconds and milisecons
  startTime = millis();
  
  // create 5 covid obstacles and push them into the obstacles array 
  for (let i = 0; i < 5; i++) {
    obstacles.push(new CovidObstacle(random(width), random(height)));
  }
  
  // create 3 medications and push them into the medications array
  for (let i = 0; i < 3; i++) {
    medications.push(new Medication(random(width), random(height)));
  }
}

function draw() {
  background(waitingRoomImage);
  
  // if the game is not over then draw this code:
  // so if the game is being played do this:
  if (!gameOver) {
    // elapsedTime calculated the time passed since the start to the end of the game in miliseconds
    elapsedTime = millis() - startTime;
    fill(0);
    textSize(10);
    // fixed to 2 decimal points
    text("Time: " + (elapsedTime / 1000).toFixed(2) + "s", width - 100, 20);
    text("Health: " + health + "%", 50, 20);
  
    // update and display player
    player.update();
    player.display();
  
    // add new particles randomly at 2% chance, at any position inside the constrains of the canvas. this is so the gameplay is less predictable( i think the amount of particles increases anyway)
    if (random() < 0.02) {
      particles.push(new CovidParticle(random(width), random(height)));
    }
  
    // forloop that updates and display each particles, iterate backwards over array of particles and displayes the updates and the particles so they move contantly 
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].display();
      
      // check collision with player and particles, if true, decrease health by 5% when player hits a particle, remove the last  particle from the index
      if (player.collide(particles[i])) {
        particles.splice(i, 1);
        health -= 5;
      }
    }
    
    // display and check obstacles, if the player and the large covid obstacle collide then boolean becomes true and the game ends
    for (let obstacle of obstacles) {
      obstacle.display();
      if (player.collide(obstacle)) {
        gameOver = true;
      }
    }
   // display and check medications, if medication collides with the player , increase health by 15% when player collects medication but dont allow player health to go over 100% and remove the last  medication object from the medications array (iterating backwards) .
   for (let i = medications.length - 1; i >= 0; i--) {
    medications[i].display();
    if (medications[i].collide(player)) {
      medications.splice(i, 1);
      health += 15;
      health = min(100, health);
    }
  }
    // using a boolean:
    // if players health is less or equal to zero THEN show game over screen and show the gameover screen
    // this includes the game over text and the time it took for the game to run(them surviving) rounded to two decimal points .
    if (health <= 0) {
      gameOver = true;
    }
  } else {
    fill(0);
    textSize(30);
    
    textAlign(CENTER, CENTER);
    text("Game Over!", width/2, height/2 - 50);
    text("You Survived For: " + (elapsedTime / 1000).toFixed(2) + "s", width/2, height/2);
    textSize(20);
    text("Press any key to restart", width/2, height/2 + 50);
  }
}

// also on the game over screen
// if a key is pressed reset the game run the resetGame function
function keyPressed() {
  if (gameOver) {
    resetGame();
  }
}

//use the reset game function, reset everything to default settings, empty the arrays , reset start time to 0, change the boolean to false and reset player health back to 100.
function resetGame() {
  particles = [];
  obstacles = [];
  medications = [];
  startTime = millis(); 
  elapsedTime = 0;
  gameOver = false;
  health = 100; 
  player.reset();
  
  // after resent do this again:
  // create 5 covid bstacles and push them into the obstacles array 
  for (let i = 0; i < 5; i++) {
    obstacles.push(new CovidObstacle(random(width), random(height)));
  }
  
   // create 5 medications and push them into the medications  array 
  for (let i = 0; i < 3; i++) {
    medications.push(new Medication(random(width), random(height)));
  }
}











