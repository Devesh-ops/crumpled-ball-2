class Paper{
    constructor(x,y,r){
        var options={
            restitution : 1.2,
            friction : 0.5,
            density : 1.0
        }
        this.paper = Bodies.circle(x,y,r,options);
        this.r = r;
        this.img =loadImage("paper.png") 
        World.add(world,this.paper);
    }
    display(){
        var angle = this.paper.angle;
        push();
        translate(this.paper.position.x, this.paper.position.y);
        rotate(angle);
        imageMode(CENTER);
        image( this.img,0,0 , 60,60);
        pop();
    }
}