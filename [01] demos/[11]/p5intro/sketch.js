console.log("is this thing on?")
function setup() {
    createCanvas(innerWidth, innerHeight)

    background(250,150,150)
    rectMode(CENTER)
}

function draw() {
    //background(0,200,100)
    //line(x1,y1,x2,y2)
    let red = map(mouseX, 0, width, 0, 255)
    fill(random(0,255), random(0,255),random(0, 255))
    //noFill()
    strokeWeight(3)
    stroke(mouseX, mouseY, 255)
    rect(mouseX, mouseY, random(10,50), random(10,50))
    //text("fresh", mouseX, mouseY)
}

// an event listener that "listens" for when the pae is resized, if it is, do whatever is in the function
function windowResized(){
    resizeCanvas(innerWidth, innerHeight);
}

