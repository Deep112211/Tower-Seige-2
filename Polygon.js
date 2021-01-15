class Polygon{
    constructor(x, y, radius){
        var options={
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.image = loadImage("polygon.png");

        this.radius = radius;

        this.x = x;
        this.y = y;
        
        World.add(world, this.body);

        
    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}