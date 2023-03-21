//  TODO:
    //  [v] create angle between nVec, no pVec and cVec.
    //  [v] invert direction of nVec heading
    //  [v] create inverse pole
    //  []  create connecting lines on the poles

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(6);
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
  
{ //Static Vectors (closure to hide in ide)
  push()
    //translate(width/2, 0)
    //drawArrow(baseVec, firstVec, 'white')
  pop()

  /// --- Static Vectors --- ///

  let baseVec = createVector(0,0)

  push(); 
    translate(width/2,height/2)
    let v1 = createVector(0,0)
    let v2 = createVector(100,100);
    let v3 = createVector(-10,-200);

    let angleBet = v2.angleBetween(v3);
  
    // drawArrow(v1,v2,'orange')
    // drawArrow(v2,v3, 'white')
    let go = createVector(1,1);
    let go2 = createVector(1,1);

    // console.log(go.heading())
    // console.log(angleBet)
    
    go.mult(70);
    go2.mult(70);
    go.setHeading(0);
    go2.setHeading(0)
    // drawArrow(v2, go.rotate(v2.heading()+angleBet/2+HALF_PI), 'purple');
    // drawArrow(v2, go2.rotate(v2.heading()+angleBet/2+PI+HALF_PI), 'purple');

    pop()
}

  // --- Dynamic Vectors -----------------

  let roofSpine = Array.from({length: 8}, () => createVector(50,50));
  
  // First Vector
  let firstVec = createVector(random(-width/2 + 40, -50), random(0, height-200)) //constrained strating range
  roofSpine[0] = firstVec;

  let path = [];
  let outerWall = [];
  let innerWall = [];

  let chunk = 30;

  // Spine path
  for (let i=1; i<roofSpine.length; i++){ 
    let range = 80;

    let pVec = roofSpine[i-1];
    let cVec = roofSpine[i];
    roofSpine[i].x = random(pVec.x, pVec.x + range);
    roofSpine[i].y = random(100, height - 100);

    let nVec = p5.Vector.sub(pVec, cVec); //Path
    nVec.setHeading(nVec.heading()+PI) // Inverse direction
    path.push(nVec)

    push() 
      translate(width/2, 0)
      drawArrow(pVec, nVec, 'black'); //Path
      // drawArrow(baseVec, cVec, 'white') //Rays
    pop()


  }

  // Poles
  for (let i=1; i<path.length || i<roofSpine.length-1; i++){ 
    let pNVec = path[i-1];
    let cNVec = path[i];
    let pVec = roofSpine[i-1];
    let cVec = roofSpine[i];
    let chunk = 30 

    let angleFace = pNVec.angleBetween(cNVec)
    let outerPole = cVec.copy()
    let innerPole = cVec.copy()
    // console.log(`1: ${outerPole.x}`)

    outerPole.setHeading(0)
    // console.log(`1.5: ${outerPole.x}`)
    outerPole.setMag(chunk)
    // console.log(`2: ${outerPole.x}`)

    innerPole.setHeading(0)
    innerPole.setMag(chunk)
    push()
    translate(width/2, 0)
    drawArrow(cVec, outerPole.rotate(pNVec.heading()+angleFace/2+HALF_PI+PI), 'lightBlue')
    //drawArrow(cVec, innerPole.rotate(pNVec.heading()+angleFace/2+HALF_PI), 'blue')
    //drawArrow(outerPole, innerPole, 'white')
    pop()
    // console.log(`3: ${outerPole.x}`)
    
     outerWall.push(outerPole)
     innerWall.push(innerPole)
  }

  //Connect a line between the poles.
  
  //The poles at stage 2 seem to all be the same
  //At stage 3 they all seem to be tiny numbers


  /////----------///////---------///////  

  //I think I need to fid out where they are in space,
  //not their translated values.
  //I think I can do that with .dist() and then .setMag()
  //Then maybe I have to do all the complicated roatations etc.
  //I need to learn what all the vector functions do.

  /////----------///////---------///////

  // Walls
  for (let i=1; i<outerWall.length; i++){
    let cOuterWall = outerWall[i];
    let pOuterWall = outerWall[i-1];
    // let cInnerWall = innerWall[i];
    // let pInnerWall = innerWall[i-1];


    //i think the arraow's second point needs to translate
    //differently. needs to translate to next vector.

    // console.log(pOuterWall)
    // console.log(pOuterWall.dist(cOuterWall))


    //cOuterWall.mult(chunk)

    //console.log(p5.Vector.dist(pOuterWall, cOuterWall))
    // pOuterWall.mult(chunk)
    // let nVec = p5.Vector.sub(pOuterWall, cOuterWall)
    // nVec.setHeading(nVec.heading()+PI)

    // push()
    // translate(width/2,width/2);
    // drawArrow(pOuterWall, cOuterWall, 'white')
    // pop()
    // beginShape(LINES)
    // push()
    //   translate(0,0)
    //   vertex(0,0)
    //   vertex(cOuterWall.x,cOuterWall.y)
      
    // pop()

    // endShape()
  }



  noLoop();
}
