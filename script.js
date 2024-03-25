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
    //geam acoperis
        fill("lightblue");
        ellipse(250, 130, 50, 50);
    //horn
        fill("purple");
        stroke("purple");
        rect(300, 75 ,40, 70);
    //linii geam
        stroke("black");
        line(250, 105, 250, 155);
        line(225, 130, 275, 130);
    //geam
        fill("lightblue")
        rect(130, 250 ,50, 70);
        rect(320, 250 ,50, 70);
    //maner
        fill("purple");
        rect(270, 340 ,10, 5);
}