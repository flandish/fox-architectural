function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50,100,100);
  strokeWeight(10);
  stroke(255,150)

  angleMode(DEGREES);

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

    let nVec = p5.Vector.sub(pVec, cVec);

    push() 
      translate(width/2, 0)
      line(baseVec.x, baseVec.y, cVec.x, cVec.y) //vector rays

      translate(cVec.x, cVec.y);
      stroke(240,50,50);
      line(0, 0, nVec.x, nVec.y) //path

      circle(nVec.x, nVec.y, 20,20)
    pop()
  }

  noLoop();
}
