//  TODO:
    //  [v] create angle between nVec, no pVec and cVec.
    //  [v] invert direction of nVec heading
    //  [v]  create inverse pole
    //  []  create connecting lines on the poles

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50,100,100);
  strokeWeight(10);
  stroke(255,150)
  
  let roofSpine = Array.from({length: 8}, () => createVector(50,50));
  let baseVec = createVector(0,0)
  
  /// --- First Vector --- ///

  let firstVec = createVector(random(-width/2 + 40, -50), random(0, height-200)) //constrained strating range
  roofSpine[0] = firstVec;

  push()
    translate(width/2, 0)
    //drawArrow(baseVec, firstVec, 'white')
  pop()

  /// --- Static Vectors --- ///

  push(); 
    translate(width/2,height/2)
    let v1 = createVector(0,0)
    let v2 = createVector(100,100);
    let v3 = createVector(-10,-200);

    let angleBet = v2.angleBetween(v3);
  
    drawArrow(v1,v2,'orange')
    drawArrow(v2,v3, 'white')
    let go = createVector(1,1);
    let go2 = createVector(1,1);

    console.log(go.heading())
    console.log(angleBet)
    
    go.mult(70);
    go2.mult(70);
    go.setHeading(0);
    go2.setHeading(0)
    drawArrow(v2, go.rotate(v2.heading()+angleBet/2+HALF_PI), 'purple');
    drawArrow(v2, go2.rotate(v2.heading()+angleBet/2+PI+HALF_PI), 'purple');

    pop()

  /// --- Dynamic Vectors --- ///

  //Give vecs random values and allows for nextVec.
  //Not needed if nextVec doesn't get uesed. Just put in the other for-loop
  for (let i=1; i<roofSpine.length; i++){
    let range = 80;
    let pVec = roofSpine[i-1];
    let cVec = roofSpine[i];
    roofSpine[i].x = random(pVec.x, pVec.x + range);
    roofSpine[i].y = random(100, height - 100);
  }

  let path = [];

  for (let i=1; i<roofSpine.length; i++){ 
    let range = 80;
    let chunk = 30;

    let pVec = roofSpine[i-1];
    let cVec = roofSpine[i];
    let nextVec = roofSpine[i+1]
    let nVec = p5.Vector.sub(pVec, cVec); //Path
    nVec.setHeading(nVec.heading()+PI)
    path.push(nVec)
    //console.log(nVec)
    // let nVec = createVector(pVec, cVec);

    // let angleFace = pVec.angleBetween(cVec) //wrong.
    
    // let outerPole = createVector(1,1)
    // outerPole.setHeading(angleFace/2)
    // outerPole.mult(chunk);

    // let innerPole = -outerPole;

    push() 
      translate(width/2, 0)
      //drawArrow(baseVec, cVec, 'white') //Rays
      //drawArrow(pVec, nVec, 'black'); //Path
      //I don't think im drawing the right thing
    pop()
  }

  for (let i=1; i<path.length || i<roofSpine.length-1; i++){ 
    let pNVec = path[i-1];
    let cNVec = path[i];
    let pVec = roofSpine[i-1];
    let cVec = roofSpine[i]; 

    let angleFace = pNVec.angleBetween(cNVec)
    let outerPole = createVector(1,1)
    outerPole.setHeading(0)
    outerPole.mult(30)
    push()
    translate(width/2, 0)
    //drawArrow(cVec, outerPole.rotate(pNVec.heading()+angleFace/2+HALF_PI+PI), 'purple')
    pop()
  }
  noLoop();
}
