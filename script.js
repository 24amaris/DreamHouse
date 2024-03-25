function setup() {
    createCanvas(700, 500);
    background("lightblue");
    }
function draw() {
    //casa
        fill("white");
        stroke("black");
    //dreptunghiul
        fill("pink");
        rect(100, 200 ,300, 200);
     //acoperis
        fill("purple");
        triangle(80, 200, 250, 60, 420, 200);
    //nori
        fill("blue");
        stroke("blue");
        circle(50, 80, 55);
        circle(100, 80, 55);
        circle(150, 80, 55);
        circle(80, 50, 55);
        circle(130, 50, 55);
    //usa
        fill("gray");
        stroke("black");
        rect(210, 280, 75, 120);
}