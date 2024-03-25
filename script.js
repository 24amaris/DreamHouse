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
}