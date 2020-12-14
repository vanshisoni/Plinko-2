class Particle{
    constructor(x,y,radius){
        var options={
            restitution:0.1,
            friction:0.2,
            density:0.02
        }
        this.radius = radius;
        this.body = Bodies.circle(x,y,radius,options)
        this.color = color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body)
        
    }
    display(){
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius);
        
    }
}