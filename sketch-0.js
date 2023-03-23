class Arrow{
  constructor(base, vec, colour){
    this.base = base
    this.vec = vec
    this.colour = colour
    this.debug = false;
    this.debugColours = ['red', 'white', 'green', 'blue', 'orange']
  }

  disp(){
    push();
      stroke(this.colour);
      strokeWeight(6);
      fill(this.colour);
      translate(this.base);
      line(0, 0, this.vec.x, this.vec.y);
      rotate(this.vec.heading());
        this.arrowSize = 7;
        translate(this.vec.mag() - this.arrowSize, 0);
        triangle(0, this.arrowSize / 2, 0, -this.arrowSize / 2, this.arrowSize, 0);
      // if (this.debug == true){
      //   stroke(random(this.debugColours));
      //   rotate(this.vec.heading());
      //   this.arrowSize = 7;
      //   translate(this.vec.mag() - this.arrowSize, 0);
      //   triangle(0, this.arrowSize / 2, 0, -this.arrowSize / 2, this.arrowSize, 0);
      // }
    pop();
  }

}

class Pole extends Arrow{

}



function setup(){
  createCanvas(windowWidth, windowHeight);
  background(50,100,100)
  
  //create a spine vector

  let v0 = createVector(0,0);

  for(let i = 0; i<10; i++){
    let vec = p5.Vector.random2D()
    vec.mult(random(100))
    let arrow = new Arrow(v0, vec, 'black')
    arrow.disp()
  }


}

function draw(){

}

