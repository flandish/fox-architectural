class Arrow{
    constructor(base, vec, colour){
        push();
        stroke(colour);
        strokeWeight(6);
        fill(colour);
        translate(base);
        line(0, 0, vec.x, vec.y);
        rotate(vec.heading());
        let arrowSize = 7;
        translate(vec.mag() - arrowSize, 0);
        triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
        pop();
    }
}