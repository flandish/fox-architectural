function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(190);
  strokeWeight(10);
  
  // let roofSpine = Array.from({length: 5},  () => new Object({
  //   "x":randomNumber(windowWidth),
  //   "y":randomNumber(windowHeight)
  // }));

  let roofSpine = Array.from({length: 5}, () => new Object({
    "x":randomNumber(windowWidth)
    //constrain(randomNumber(),prevVertex, max)
    ,"y":randomNumber(windowHeight)
  }));

  for (let i=1; i<roofSpine.length; i++){
    let prevVert = roofSpine[i-1];
    beginShape(LINES);
      vertex(prevVert.x, prevVert.y);
      vertex(roofSpine[i].x, roofSpine[i].y);
    endShape();
  }

  noLoop();
}