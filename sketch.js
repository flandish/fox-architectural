function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

function liner (base, to){
  push()
  //translate(base.x, base.y)
  line(base.x, base.y, to.x, to.y);
  pop()
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
  
  angleMode(DEGREES);

  let roofSpine = Array.from({length: 6}, () => createVector(50,50));

  let baseVec = createVector(0,20)
  let firstVec = createVector(random(-width/2 + 40, -50), random(0, height-200)) //constrained strating range
  
  roofSpine[0] = firstVec;

  push() //first vector
    //translate(width/2, 0)
    //line(baseVec.x, baseVec.y, firstVec.x, firstVec.y)
  pop()

  push(); //Static vectors

    let v1 = createVector(0,0)
    let v2 = createVector(0,180);
    let v3 = createVector(90,-100);

    let angleBet = v2.angleBetween(v3);

    drawArrow(v1,v2,'orange')
    drawArrow(v2,v3, 'white')

    console.log(`v2: ${v2.heading()} v3: ${v3.heading()}`)
    let adding = v2.heading() + v3.heading();

    console.log(`added: ${adding}`)
    console.log(`anglebet: ${angleBet}`)


    let go = createVector(1,1);
    go.setHeading(angleBet/2)
    // go.setHeading(-adding/HALF_PI); //Div by PI or 2 or HAFL_PI or TWO_PI?!
    //IF over certain angle, div by ____

    //-90 / 2 = 44.99       : yes
    //-104 / 2 = -52        : no
    //-104 / PI = -33       : yes
    //-116 / PI = -37       : yes
    //-131 / PI = -42       : no
    //-131 / 2 = -65        : no
    //-131 / TWO_PI = -21   : yes
    //-142 / TWO_PI = -22   : yes
    //-142 / 2 = -71        : no
    

    console.log(`NEW ANGLE: ${go.heading()}`)
    go.mult(100);
    //angleBet.mult(100)
    drawArrow(v2, go, 'purple')

    //let added = p5.Vector.fromAngle(adding)
    //console.log(added, added.heading())

    stroke('red')
    translate(v2.x, v2.y)
    //point(added.x, added.y)

    // let newBoy = v1.add(v3)
    // console.log(newBoy)
    // liner(v1, newBoy)

    // stroke('purple')
    // strokeWeight(3)

    // let chunky = 50;

    // let added = v3.add(v2)
    // console.log(added)
    // liner(added, v1)
    // let angleFish= v3.angleBetween(v1); 

    // let adding = v2.heading() + v3.heading();
    // console.log(adding)

    // console.log(angleFish);
    // let polar = p5.Vector.fromAngle(angleFish, chunky);
    // let polar = p5.Vector.fromAngle(adding, chunky);

    // translate(v2.x, v2.y)
    // line(0,0, -polar.x, -polar.y)

    //////pvec.heading + cvec.heading ? / 2 ? ////// 
    /// i think this might be it. ///



    
  pop()


  for (let i=1; i<roofSpine.length-1; i++){
    let range = 80;
    let pVec = roofSpine[i-1];
    let cVec = roofSpine[i];
    roofSpine[i].x = random(pVec.x, pVec.x + range);
    roofSpine[i].y = random(100, height - 100);
    // console.log(`1: ${pVec.x}`)
  }

  for (let i=1; i<roofSpine.length-1; i++){
    let range = 80;

    let pVec = roofSpine[i-1];
    let cVec = roofSpine[i];
    let nextVec = roofSpine[i+1];
    // console.log(`2: ${pVec.x}`)

    // cVec.x = random(pVec.x, pVec.x + range);
    // cVec.y = random(100, height - 100);

    let nVec = p5.Vector.sub(pVec, cVec); //Path
    
    let chunk = 30;
    // let angleFace = p5.Vector.angleBetween(pVec, cVec);
    let angleFace = cVec.angleBetween(pVec); //NEEDS TO BE DIVIDED IN HALF SOMEWHERE
    //let angleFace = pVec.heading();
    //console.log(angleFace)
    // console.log(angleFace)
    // console.log(`div ${angleFace / 2}`)
    let outerPole = p5.Vector.fromAngle(angleFace, chunk)
    // console.log(outerPole.heading())
   outerPole = outerPole.setHeading(angleFace)
    // console.log(`h: ${outerPole.heading()}`)
    let innerPole = -outerPole;

    push() 
      translate(width/2, 0)
      //line(baseVec.x, baseVec.y, cVec.x, cVec.y) //vector rays

      translate(cVec.x, cVec.y);
      stroke(240,50,50);
      //line(0, 0, nVec.x, nVec.y) //path
      


      //circle(nVec.x, nVec.y, 20,20)






      // strokeWeight(3);
      // stroke('purple');
      // //line(0, 0, nVec.x, nVec.y); // outer line (add(???)) div? outer = div()
      // //maybe just createVector((pVec.x + 10))
      // line(20,20,nVec.x+20, nVec.y+20)
      // stroke('orange')
      // line(-20,-20,nVec.x-20, nVec.y-20) // not quite.

      //copy() then mult() maybe?
      
      //INCREASE AND DECREASE mag() of 'ray'. Sub() from those.
      //Need to create new vecotrs or modify here.
      //cvert.mag() = more  //line(cvert) idk.
    pop()

    push() //outer poles
      translate(width/2, 0)
      strokeWeight(3)
      stroke('purple');
      translate(cVec.x, cVec.y);
      //rotate(outerPole.heading())
      //line(0,0,outerPole.x, outerPole.y)
    pop()

    // push()
    // translate(width/2, 0)
    //   translate
    //   strokeWeight (3);
    //   stroke('purple')

      // let rayCopy1 = cVec.copy();
      // let pRayCopy1 = pVec.copy();
      // let rayCopy2 = cVec.copy();
      // let pRayCopy2 = pVec.copy();

      // rayCopy1.setMag(cVec.mag() - 30);
      // pRayCopy1.setMag(pVec.mag() - 30);
      // pRayCopy1.mult(0.9);
      // rayCopy1.mult(0.9);
      
      // rayCopy1.x -= 10;
      // pRayCopy1.x -= 10;
      // rayCopy1.y -= 10;
      // pRayCopy1.y -= 10;
     // rayCopy1.y -= 10;
      // rayCopy2.mult(1.05);
      // pRayCopy2.mult(1.05);

      //let rayCopy1nVec = p5.Vector.sub(pRayCopy1, rayCopy1);
      // let rayCopy2nVec = p5.Vector.sub(rayCopy2, pRayCopy2);

      //translate(rayCopy1.x, rayCopy1.y);
     // translate(cVec.x, cVec.y)
      //line(0,0, rayCopy1nVec.x, rayCopy1nVec.y);
  

      // stroke('orange')
      // circle(rayCopy1nVec.x, rayCopy1nVec.y, 20,20)
      
      // console.log(nVec.x, rayCopy1nVec.x);

    //pop()

  //   push()
  //   let s = 100
  //  translate(width/2, 0)
  //     stroke('red')
  //     strokeWeight(10)
  //     //translate(pVec.x, pVec.y);
  //     line(pVec.x,pVec.y, cVec.x, cVec.y);
  //     strokeWeight(2);
  //     stroke('purple')
  //     line(pVec.x + s,pVec.y+s, cVec.x+s, cVec.y+s);
  //     //OK THIS WORKS, but will it be a disadvantage
  //     //not working with the resulting sub() vectors?


  //     //Should I focus on modifying the sub()'d vectors
  //     //to achieve the outcome?
  //     //they literaly head in the right direction.

  //     //is there a way to create vectors pushing opp.
  //     //direction from refrenced vector?


  //   pop()
  }

  noLoop();
}
