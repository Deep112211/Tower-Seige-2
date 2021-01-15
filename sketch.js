const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25;

var polygon;

var rope;
function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(450, 280, 250, 10);

    ground2 = new Ground(900, 150, 180, 10);

    polygon = new Polygon(200, 200, 50);

    rope = new Rope(polygon.body, {x: 200, y: 200});

    //ground1(level1)
    block1 = new Blocks(420, 270, 30, 40);
    block2 = new Blocks(450, 270, 30, 40);
    block3 = new Blocks(480, 270, 30, 40);
    block4 = new Blocks(510, 270, 30, 40);
    block5 = new Blocks(540, 270, 30, 40);
    block6 = new Blocks(390, 270, 30, 40);
    block7 = new Blocks(360, 270, 30, 40);

    //ground1(level2)
    block8 = new Blocks(390, 220, 30, 40);   
    block9 = new Blocks(420, 220, 30, 40);
    block10 = new Blocks(450, 220, 30, 40);
    block11 = new Blocks(480, 220, 30, 40);
    block12 = new Blocks(510, 220, 30, 40);

    //ground1(level3)
    block13 = new Blocks(420, 180, 30, 40);
    block14 = new Blocks(450, 180, 30, 40);
    block15 = new Blocks(480, 180, 30, 40);

    //ground1(level4)
    block16 = new Blocks(450, 140, 30, 40);

    //ground2(level1)
    block17 = new Blocks(840, 140, 30, 40);
    block18 = new Blocks(870, 140, 30, 40);
    block19 = new Blocks(900, 140, 30, 40);
    block20 = new Blocks(930, 140, 30, 40);
    block21 = new Blocks(960, 140, 30, 40);

    //ground2(level2)
    block22 = new Blocks(870, 90, 30, 40);
    block23 = new Blocks(900, 90, 30, 40);
    block24 = new Blocks(930, 90, 30, 40);

    //ground2(level3)
    block25 = new Blocks(900, 40, 30, 40);
}

function preload() {

}

function draw() {

    background("green");

    Engine.update(engine);

    ground1.display();
    ground2.display();

    polygon.display();

    rope.display();

    //ground1(level1)
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    //ground1(level2)
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    //ground1(level3)
    block13.display();
    block14.display();
    block15.display();
    //ground1(level4)
    block16.display();

    //ground2(level1)
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    //ground2(level2)
    block22.display();
    block23.display();
    block24.display();
    //ground2(level3)
    block25.display();
    
    keyPressed();

    drawSprites();
}

function mouseDragged() {
    Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
    rope.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        rope.attach(this.polygon);
    }
}