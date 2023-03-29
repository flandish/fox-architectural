//  TODO:
    //  [v] create angle between subbedVec, no pVec and cVec.
    //  [v] invert direction of subbedVec heading
    //  [v] create inverse pole
    //  []  create connecting lines on the poles

const c = console

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50,100,100);
  strokeWeight(10);
  stroke(255,150)

  let house = {
    chunk: 30,
    debug: false,
    spine: [],
    path: [],
    angles: [],
    outerPoles: [],
    innerPoles: [],
    outerWalls: [],
    innerWalls: []
  }

  house.spine = Array.from({length: 8}, () => createVector(10,10));
  // house.spine = Array.from({length: 8}, () => p5.Vector.random2D());

  // First Vector
  let firstVec = createVector(random(-width/2 + 40, -50), random(0, height-200)) //constrained strating range
  house.spine.unshift(firstVec)

  // Spine path
  for (let i=1; i<house.spine.length; i++){ 
    let range = 72

    var len = house.spine.length
    var current = house.spine[i]
    var previous = house.spine[(i+len-1)%len]
    var next = house.spine[(i+1)%len]

    house.spine[i].x = random(previous.x + range, previous.x + range);
    house.spine[i].y = random(100, height - 100);

    let subbedVec = p5.Vector.sub(previous, current); //Path
    subbedVec.setHeading(subbedVec.heading()+PI) // Inverse direction
    house.path.push(subbedVec)
    c.log(house.path)

    push() 
      translate(width/2,0)
      beginShape(POINTS)
        vertex(current)
      endShape()
      //drawArrow(previous, current, 'black'); //Path
    pop()
  }

  // //Poles
  // for (let i=1; i<house.path.length || i<house.spine.length-1; i++){
  //   var len = house.path.length
  //   var current = house.path[i]
  //   var previous = house.path[(i+len-1)%len]
  //   var next = house.path[(i+1)%len]

  //   var len = house.spine.length
  //   var currentSpine = house.spine[i]
  //   var previousSpine = house.spine[(i+len-1)%len]
  //   var nextSpine = house.spine[(i+1)%len]

  //   var angleface = previous.angleBetween(current)

  //   let outerPole = current.copy()
  //   outerPole.setHeading(previous.heading()+angleface/2+HALF_PI+PI)
  //   outerPole.setMag(house.chunk)
    
  //   house.outerPoles.push(outerPole)

  //   push()
  //     translate(width/2, 0)
  //     drawArrow(currentSpine, outerPole, 'blue')
  //   pop()
  // }

  // //walls
  // for (let i=1; i<house.outerPoles.length || i<house.spine.length-1; i++){
  //   var len = house.outerPoles.length
  //   var current = house.outerPoles[i]
  //   var previous = house.outerPoles[(i+len-1)%len]
  //   var next = house.outerPoles[(i+1)%len]

  //   var len = house.spine.length
  //   var currentSpine = house.spine[i]
  //   var previousSpine = house.spine[(i+len-1)%len]
  //   var nextSpine = house.spine[(i+1)%len]

  //   push()
  //     translate(width/2, 0)
  //     translate(currentSpine)
  //     //point(currentSpine)
  //     point(0,0)
  //     translate(previous)
  //     point(0,0)
  //     // beginShape(LINES)
  //     // vertex(0,0)
  //     // vertex(previous.x, previous.y)
  //     // endShape()

  //     // vertex, translate, vertex
  //     // beginShape(LINES)
  //     //   vertex(0,0)
  //     //   //translate(current)
  //     //   vertex(previous.x,previous.y)
  //     // endShape()

  //     //I want to do something like this
  //     line('0,0' + translate(current) + '0,0')

  //   pop()
  }











  // for (let i=1; i<roofSpine.length; i++){ 
  //   let range = 80;

  //   let pVec = roofSpine[i-1];
  //   let cVec = roofSpine[i];
  //   roofSpine[i].x = random(pVec.x, pVec.x + range);
  //   roofSpine[i].y = random(100, height - 100);

  //   let subbedVec = p5.Vector.sub(pVec, cVec); //Path
  //   subbedVec.setHeading(subbedVec.heading()+PI) // Inverse direction
  //   path.push(subbedVec)

  //   push() 
  //     translate(width/2, 0)
  //     drawArrow(pVec, subbedVec, 'black'); //Path
  //     // drawArrow(baseVec, cVec, 'white') //Rays
  //   pop()
  



















  
  // Poles
//   for (let i=1; i<path.length || i<roofSpine.length-1; i++){ 
//     let pNVec = path[i-1];
//     let cNVec = path[i];
//     let pVec = roofSpine[i-1];
//     let cVec = roofSpine[i];
//     let chunk = 30 

//     let angleFace = pNVec.angleBetween(cNVec)
//     let outerPole = cVec.copy()
//     // let innerPole = cVec.copy()
//     // console.log(`1: ${outerPole}`)

//     outerPole.setHeading(pNVec.heading()+angleFace/2+HALF_PI+PI)
//     // console.log(`1.5: ${outerPole}`)
//     outerPole.limit(chunk)
//     // console.log(`2: ${outerPole}`)

//     // push()
//     //   translate(width/2,0)
//     //   point(outerPole)
//     // pop()

//     // innerPole.setHeading(0)
//     // innerPole.setMag(chunk)
//     push()
//     translate(width/2, 0)
//     drawArrow(cVec, outerPole, 'lightBlue')

//     translate(cVec)
   
//     stroke('red')
//     strokeWeight(10)
//     point(outerPole)
//     // line(0,0,0,0)
//     // vertex(outerPole.x, outerPole.y)0
//     //drawArrow(outerPole,)
    
//     //drawArrow(cVec, innerPole.rotate(pNVec.heading()+angleFace/2+HALF_PI), 'blue')
//     //drawArrow(outerPole, innerPole, 'white')
//     pop()
//     // console.log(`3: ${outerPole}`)
    
//     outerWall.push(outerPole)
//     //  innerWall.push(innerPole)
//   }
//   // console.log(outerWall)

//   //Connect a line between the poles.
  
//   //The poles at stage 2 seem to all be the same
//   //At stage 3 they all seem to be tiny numbers


//   /////----------///////---------///////  

//   //I think I need to fid out where they are in space,
//   //not their translated values.
//   //I think I can do that with .dist() and then .setMag()
//   //Then maybe I have to do all the complicated roatations etc.
//   //I need to learn what all the vector functions do.

//   /////----------///////---------///////

//   // Walls
//   for (let i=1; i<outerWall.length || i<roofSpine.length-2; i++){
//     let cOuterWall = outerWall[i];
//     let pOuterWall = outerWall[i-1];
//     //let outerPole = path[i];
//     let cVec = roofSpine[i+1];
// // c.log(cOuterWall)
//     // let cInnerWall = innerWall[i];
//     // let pInnerWall = innerWall[i-1];


//     //i think the arraow's second point needs to translate
//     //differently. needs to translate to next vector.

//     // console.log(pOuterWall)
//     // console.log(pOuterWall.dist(cOuterWall))


//     //cOuterWall.mult(chunk)

//     //console.log(p5.Vector.dist(pOuterWall, cOuterWall))
//     // pOuterWall.mult(chunk)
//     // let subbedVec = p5.Vector.sub(pOuterWall, cOuterWall)
//     // subbedVec.setHeading(subbedVec.heading()+PI)

//     // push()
//     // translate(width/2,width/2);
//     // drawArrow(pOuterWall, cOuterWall, 'white')
//     // pop()
//     // beginShape(LINES)
//     // push()
//     //   translate(0,0)
//     //   vertex(0,0)
//     //   vertex(cOuterWall.x,cOuterWall.y)
      
//     // pop()

//     // endShape()

//     let subbedVec = p5.Vector.sub(cOuterWall, pOuterWall); //Path
//     subbedVec.setHeading(subbedVec.heading()+PI) // Inverse direction


//     push()
//       stroke('white')
//       strokeWeight(15)

//       translate(width/2,0)
//       translate(cVec)
//       // translate(cOuterWall)

//       point(cOuterWall)

//       stroke('blue')
//       strokeWeight(6)
//       //drawArrow(pOuterWall, cOuterWall, 'white')
//       line(pOuterWall.x, pOuterWall.y, cOuterWall.x, cOuterWall.y)

//     pop()
//     // push()
//     // translate(width/2,0)
//     // translate(outerWall)
//     // stroke('white')
//     // strokeWeight(12)
//     // point(outerPole)
//     // pop()
//   }

  

