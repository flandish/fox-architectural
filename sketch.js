//  TODO:
    //  [ ] create angle between nVec, no pVec and cVec.
    //  [v] invert direction of nVec heading

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
    let v2 = createVector(100,80);
    let v3 = createVector(0,90);

    let angleBet = v2.angleBetween(v3);
    // let angleBet = v2.dot(v3)


    drawArrow(v1,v2,'orange')
    drawArrow(v1,v3, 'white')

    // console.log(`v2: ${v2.heading()} v3: ${v3.heading()}`)
    
    // console.log(`anglebet: ${angleBet}`)

    let go = createVector(1,1);
    console.log(go.heading())
    
    go.setHeading(0);


    // console.log(`NEW ANGLE: ${go.heading()}`)
    go.mult(100);
    drawArrow(v1, go.rotate(v2.heading()+angleBet/2), 'purple');

    // let added = v3.add(v2);
    // let addMag = added.mag();
    // drawArrow(v1, added, 'green')

    // let outerPole = createVector(1,1)
    // outerPole.mult(25)
    // outerPole.setHeading(addMag/2);


    // drawArrow(v2, outerPole, 'purple')

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

  //console.log(path)

  for (let i=1; i<path.length || i<roofSpine.length-1; i++){ 
    let pNVec = path[i-1];
    let cNVec = path[i];
    let pVec = roofSpine[i-1];
    let cVec = roofSpine[i]; 

    let angleFace = cNVec.angleBetween(pNVec)
    let outerPole = createVector(1,1)
    outerPole.setHeading(angleFace)
    outerPole.mult(30)
    push()
    translate(width/2, 0)
   // drawArrow(pVec, outerPole, 'purple')
    pop()
  }


  noLoop();
}
