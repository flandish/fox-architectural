function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(190);
  strokeWeight(10);
  
  let roofSpine = Array.from({length: 7}, () => p5.Vector.random2D());

  for (let i=1; i<roofSpine.length; i++){
    let prevVert = roofSpine[i-1];
    push()
    translate(width/2, height/2)
    beginShape(LINES);
      // vertex(prevVert.x, prevVert.y);
      // vertex(roofSpine[i].x, roofSpine[i].y);
      roofSpine[i].mult(120)
      vertex(prevVert.x, prevVert.y)
      vertex(roofSpine[i].x, roofSpine[i].y)
    endShape();
    pop()
  }

  noLoop();
}