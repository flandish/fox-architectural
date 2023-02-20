function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(190);
  strokeWeight(10);

  

  //Vectors plz
  
  //create a line of random direction that leads on from previous vector



  //for 10 times{
    //lineFunc(prevVec, randomVec2D())
    //randomScalar (mult())
  //}

  //line drawing function(base, vec)
    //push
      //translate(base.x, base.y)
      //line(0,0,vec.x, vec.y)
      //rotate(vec.heading())
    //pop

  let v0 = createVector(0,0);
  
  // let roofSpine = Array.from({length: 30},  () => p5.Vector.random2D());



  // console.log(roofSpine)

  // roofSpine.forEach(function (pos, i){
  //  if(i>0){
  //    drawLine(prevVec, pos);
  //   // console.log(`pos: ${pos.x} index: ${i}`)
  //   console.log(pos)
  //   //let prevVec = pos
  //  } else {
  //   drawLine(v0, pos)
  //  }

  // });
  

  // for(let i=0; i<roofSpine.length; i++){
  //   if(i>0){
  //     let prevVec = roofSpine[i-1];
  //     drawLine(prevVec, roofSpine[i]);
  //     console.log(roofSpine[i], i, roofSpine[i-1]);
  //   } else {
  //     drawLine(v0, roofSpine[i]);
  //   }
  // }

  // function drawLine(base, vec){
  //   push()
  //     vec.add(base)
  //     //vec.mult(randomNumber(10))
  //     translate(base.x, base.y)
  //     line(0,0,vec.x, vec.y)
  //     //rotate(vec.heading())
  //   pop()
  // }

  let roofSpine = Array.from({length: 5},  () => new Object({"x":randomNumber(windowWidth), "y":randomNumber(windowHeight)}));

  for (let i=1; i<roofSpine.length; i++){
    let prevVert = roofSpine[i-1];
    beginShape(LINES);
    //push()
      vertex(prevVert.x, prevVert.y);
      vertex(roofSpine[i].x, roofSpine[i].y);
      // vertex(10,35);
      // vertex(90,35)
    //pop()
    endShape();
  }


  // let roofSpine = Array.from({length: 10},  () => createVector(0,1));
  // console.log(roofSpine);

  // let v0 = createVector()

  // push()
  // translate(100, windowHeight/2);

  // for (v of roofSpine){
  //   console.log(v.x)
  // }
  
  // strokeWeight(10)

  // for (let i=0; i<10; i++){
  //   let v0 = p5.Vector.random2D();
    
    
  //   line(0,0,v0.x,v0.y)
    
  //   console.log(v0.x)
  // }


  // pop()









  // function roofSpineLines(){
    
  //   //Add this to the toolbox
  // function randomNumber(max) {
  //   return Math.floor(Math.random() * max);
  // }

  //   //Add this to the toolbox
  //   // let roofSpine = Array.from({length: randomNumber(10)},  () => new Object({"x":randomNumber(windowWidth), "y":randomNumber(windowHeight)}));
    
  //   // strokeWeight(10)

  //   // roofSpine.forEach((c,i) => {
  //   //   //make a line. Use every previous coordinate as the next first. 
  //   //   //line(i.x, i.y, i-1.x, i-1.y)
  //   //   //if first point, just forget it. ok?

  //   //   //change the index position while accessing data with 'c'

  //   //   // if (i = 0){
  //   //   //   c.x c.y etc
  //   //   // } else {
  //   //   //   //does point object need to be like {x1, y1, x2, y2}
  //   //   // }



  //   // })


  //   // for (x of roofSpine){
  //   //   point(x.x, x.y)
  //   //   console.log(x)
  //   // }
  //   //let roofSpine = new Array(randomNumber(10));
  //   //let roofSpine = new Array(10);
  //   // console.log(`Number of roof spines: ${roofSpine.length}`);
  //   // console.log(`points: ${roofSpine}`)
  //   //strokeWeight(10);    


  //   // for (let x of roofSpine){
  //   //   //create new vertex. Continue from previous.
  //   //   //roofSpine.push(vertex(randomNumber(windowWidth), randomNumber(windowHeight)))
  //   //   //console.log(`Vertex: ${x}`);
  //   //   console.log(x)
  //   // }

  //   //roofSpine.map(vertex(random(windowWidth), random(windowHeight)))
   
  //   // roofSpine.fill({"x": 0, "y":0})
  //   // .map((o) => {
  //   //   o.x = randomNumber(windowWidth);
  //   //   o.y = randomNumber(windowHeight);
  //   //   //console.log(o.y)
  //   // })

  //   //let arrayTest = [];
  //   //console.log(roofSpine)

  //   // roofSpine.map(funtion(){
  //   //     return {"x": randomNumber(windowWidth)}
  //   // })
    
  //   //"The indices of empty slots are still empty in the returned array"

  // // console.log(roofSpine)
  
  // }

  // roofSpineLines();


  noLoop();
}




//A program that generates birds-eye-view of hip-joint roofs.

//Create a line that changes at 90deg angles
//Place rectangles on top of lines
//Rectangle end-caps have hip-join 'V' shape
//Corners have a 45deg connecting line with opposite partner

//Add bay windows

// function draw() {
//   background(50);

//   for(let i = 0; i < circles.length; i++) {
//     let c = circles[i];
//     c.y++;
//     circle(c.x, c.y, 25);
//   }
// }

// function mouseDragged() {
//   circles.push(new p5.Vector(mouseX, mouseY));
// }