class Blocks{
    constructor(x, y, width, height) {
        var options = {
            restitution: 0.8,
            density: 1,
            friction: 1,
            isStatic: false
          }

        this.visiblity = 225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.color = color(random(0, 225), random(0, 225), random(0, 225));


        this.width = width;
        this.height = height;

        World.add(world, this.body)
    }
    display() {
            console.log(this.body.speed);
            if (this.body.speed < 3) {
                var angle = this.body.angle;
                var pos = this.body.position;
            push();
            fill(this.color);
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect( 0, 0, this.width, this.height);
            pop();
            }
            else {
                push();
                this.visiblity = this.visiblity - 5;
                pop();
            }
        }
    }


