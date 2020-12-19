class Ball{
    constructor(x,y,rad){
        var options = {	
            restitution:1,
            frictionAir:0.005,
			density:1
        }
        this.body = Bodies.circle(x,y,rad,options);
        this.r = rad;
        this.x = x;
        this.y = y;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill('green');
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}
