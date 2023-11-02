function setup () {
    createCanvas (windowWidth, windowHeight, WEBGL)
    background (0,0,0)
    rectMode(CORNER);
   
}

function draw() {
    fill(255,0,255, 127, 10)
    stroke (0,map(mouseX,0,width,0,255),180,127)
    strokeWeight(2)

    push()
    translate(mouseX - width/2, mouseY - height/2)

    // rotateX(map(mouseX, 0, width, 0, TWO_PI))
    // rotateY(map(mouseX, 0, width, 0, TWO_PI))

    rotateX(frameCount/TWO_PI)
    rotateY(frameCount/TWO_PI)

    scale(map(mouseX,0,width,0.1,2))

    // box(width/4, height/4,30);
    torus(50,20)
    pop()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    background (0,0,0)

    // rect(random(width), random(height), 20, 20)

    // console.log (width, height)
    // console.log ("window resized!")
}