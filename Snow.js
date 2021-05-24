class Snow {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic: false
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("snow4.webp");
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        noStroke();
        fill("white");
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 5*this.r, 5*this.r);
        //image.scale = 200;
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};