function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

function createVectorRay(){
    let firstVec; //constrained strating range
    let curVec; //more than previous, pos. also ranged
    let pVec; //previous vector to compare against

    createVector();

   pVec = curVec;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50,100,100);
  strokeWeight(10);
  stroke(255,150)

  angleMode(DEGREES);

  
  

//   // let ranger = random(-100, 100);
//   // let ranger = constrain(p5.Vector.random2D(), -100, 100);

//   // let roofSpine = Array.from({length: 2}, () => createVector());
  //  let roofSpine = Array.from({length: 7}, () => p5.Vector.random2D()).map(v => v.setHeading(radians(random(-90, 90))));
//   // let roofSpine = Array.from({length: 7}, () => p5.Vector.setHeading(PI));
  // let roofSpine = Array.from({length: 10}, () => p5.Vector.random2D());
  

    // let roofSpine = Array.from({length: 8}, () => {
  //   let curVec = createVector(random(pVec.x, (pVec.x + range)), random(pVec.y, (pVec.y + range))); //more than previous, pos. also ranged
  //   let pVec; //previous vector to compare against
    
    
  //   createVector();

  //   pVec = curVec; 
  // });


  let roofSpine = Array.from({length: 12}, () => createVector());

  let baseVec = createVector(0,20)
  let firstVec = createVector(random(-width/2 + 40, -50), random(0, height-200)) //constrained strating range
  
  roofSpine[0] = firstVec;

  push() //first vector
    translate(width/2, 0)
    line(baseVec.x, baseVec.y, firstVec.x, firstVec.y)
  pop()


  for (let i=1; i<roofSpine.length; i++){
    let range = 80;

    let pVec = roofSpine[i-1];
    let cVec = roofSpine[i];

    cVec.x = random(pVec.x, pVec.x + range);
    cVec.y = random(100, height - 100);

    let nVec = p5.Vector.sub(pVec, cVec)

    push() 
      translate(width/2, 0)
      line(baseVec.x, baseVec.y, cVec.x, cVec.y) //vector rays

      translate(cVec.x, cVec.y);
      stroke(240,50,50);
      line(0, 0, nVec.x, nVec.y) //path

      circle(nVec.x, nVec.y, 20,20)
    pop()
  }


  // for (let i=1; i<roofSpine.length; i++){
  //   let pVert = roofSpine[i-1];
  //   let cVert = roofSpine[i];
  //   let nVert = p5.Vector.sub(pVert, cVert)

  //   push()
  //  translate(width/2, height/2);
    
  //   cVert.mult(100)
  //   // beginShape(LINES);
  //   //   vertex(pVert.x, pVert.y)
  //   //   // cVert.setHeading(0)
  //   //   // translate(prevVert.mag(), 0)
  //   //   vertex(cVert.x, cVert.y)
  //   //   // cVert.rotate(random(-10,10))
  //   //   // translate(cVert.mag(), 0);
  //   // endShape();
    
  //   line(cVert.x, cVert.y, nVert.x, nVert.y)
  //  // translate(pVert.x, pVert.y)
  //   stroke(250,10,10)
  //  line(baseVec.x,baseVec.y,cVert.x, cVert.y)
  //   pop()
  // }

  noLoop();
}

// function setup(){
//   createCanvas(windowWidth, windowHeight);
//   strokeWeight(10);
//   stroke(255,150);
// }

// function draw(){
//   background(50,100,100);

//   let v0 = createVector(0, 0);
//   let v1 = createVector(70, 50);
//   drawArrow(v0, v1, 'red');

//   let v2 = createVector(20, 100);
//   drawArrow(v0, v2, 'blue');

//   let v3 = p5.Vector.sub(v1, v2);
//   drawArrow(v2, v3, 'purple');

//   let v4 = createVector(500,100)
//   drawArrow(v0, v4, 'green')

//   let v5 = p5.Vector.sub(v4, v1)
//   drawArrow(v1, v5, 'purple')

//   let v6 = createVector(600,500)
//   drawArrow(v0, v6, 'grey')

//   let v7 = p5.Vector.sub(v6, v4)
//   drawArrow(v4, v7, 'purple')

//   v7.setHeading(1)
// }

// function drawArrow(base, vec, col) {
//   push();
//   translate(base.x, base.y);
//   stroke(col);
//   line(0, 0, vec.x, vec.y);

//   //triangle
//   rotate(vec.heading());
//   let arrowSize = 7;
//   translate(vec.mag() - arrowSize, 0);
//   triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
//   pop();
// }