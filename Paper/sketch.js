//Todo:
//[] Learn how to buld a path
//[] learn how to work with angles

// let canvas = document.querySelector('myCanvas')

//Build a path from randomly scattered points
let rw = Math.random()*view.size.width;
let rh = Math.random()*view.size.height;



let building = {
    chunk: 30,
    lineThick: 5,
    segs: 6,
    spine: [],
    outerWall: [],
    innerWall: [],
    outerPoels: [],
    innerPoles: []
}



console.log()

strokeWidth = 10

let spine = new Path({
    segments: [[50,50], [100,100], [200, 100], [220,200]],
    strokeColor: 'black',
    strokeWidth: 10,
    strokeCap: 'round',
    strokeJoin: 'round'
})


//random points where each X is larger than the last
let vec1 = spine.segments[1].point - spine.segments[0].point
let vec2 = spine.segments[2].point - spine.segments[1].point



// let pole = new Path()
// let p = spine.segments[1].point
// let q = spine.segments[2].point

// let joe = new Point(p+20)
// joe.angle = 10

// pole.add(p,joe)
let chunk = 30

let hello = PaperOffset.offset(spine, chunk)
let goodbye = PaperOffset.offset(spine, -chunk)

let pole = new Path({
    segments: [hello.segments[1], goodbye.segments[2]],
    strokeWidth: 10,
    strokeColor: 'black'
}) //maybe: connect all odd indexes of hello with all even of goodbye

// pole.add(hello.segments[1], goodbye.segments[2])

// let qole = new Path()
// qole.add(q, q+20)
// qole.add(q, q+20)
// qole.segments[1].angle = 90

// let p1 = new Point([0,0], [50,50])
// let p2 = new Point([0,0, [100,100]])

// let vec = p2-p1







let j = new Point(vec1.getDirectedAngle(vec2))
console.log(
    vec1.getDirectedAngle(vec2)
)



//some things to play with
// Point.random()
// Point.angle
// getAngle(point)
// getDirectedAngle(point)

//create Points with set limitatons on .angle to avoid sharper corners

// console.log(spine.segemnts[0])

project.activeLayer.selected = true;

function onKeyUp(event){
    if(event.key == 'd'){
        project.activeLayer.selected = !project.activeLayer.selected
    }
}

// console.log("moo")
//let myCircle = new Path.Circle({   
    //     center: view.center,
    //     radius: 50,
    //     fillColor:'black',
    //     selected: false
    // });
    
    // function onMouseDrag(event){
    //     if(myCircle.hitTest(event.point)){
    //     myCircle.position = event.point
    //     }
    //     myCircle.radius = 20
    //     console.log(event.point)
    // }

