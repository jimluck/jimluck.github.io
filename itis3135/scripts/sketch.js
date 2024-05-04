function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(220); // Set background to a light grey
    if (mouseIsPressed) {
        fill(0); // Fill black if mouse is pressed
    } else {
        fill(255); // Fill white otherwise
    }
    ellipse(mouseX, mouseY, 80, 80); // Draw ellipse at mouse position
}
