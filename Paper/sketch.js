//Todo:
//[] Learn how to buld a path
//[] learn how to work with angles


//Build a path from randomly scattered points
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

let spine = new Path({

})

let myCircle = new Path.Circle({   
    center: view.center,
    radius: 50,
    fillColor:'black',
    selected: false
});

function onMouseDown(event){
    myCircle.position = event.point
    myCircle.radius = 20
    console.log(event.point)
}

function onKeyUp(event){
    if(event.key == 'd'){
        project.activeLayer.selected = !project.activeLayer.selected
    }
}

// console.log("moo")

// let hey = Math.random()*view.size.width;
