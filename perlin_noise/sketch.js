let xPos = 300;
let yPos = 300;
let xnoise = 0;
let ynoise = 10000;

function setup() {
    createCanvas(600, 600);
    background(0, 0, 0);
}

function draw() {
    // paint a black background
    background(0, 0, 0);

    // draw a green circle
    fill(0, 255, 0);
    ellipse(xPos, yPos, 25, 25);

    // get a value between 0 and 1 from a Perlin noise graphic based on xnoise
    let xvalue = noise(xnoise);
    
    // map xvalue to xmove
    let xmove = map(xvalue, 0, 1, -2, 2);

    // change xPos based on xmove
    xPos += xmove;

    // change xnoise by a small amount
    xnoise += 0.01;
    
    // get a value between 0 and 1 from a Perlin noise graphic based on ynoise
    let yvalue = noise(ynoise);
    
    // map yvalue to ymove
    let ymove = map(yvalue, 0, 1, -2, 2);

    // change yPos based on ymove
    yPos += ymove;

    // change ynoise by a small amount
    ynoise += 0.01;

    // posX += random(-5, 5);
    // posY += random(-5, 5);
}