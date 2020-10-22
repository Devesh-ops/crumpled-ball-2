class Basket{
    constructor(x,y,width,height){
        var options={
            isStatic : true,
            restitution : 1,
            friction : 0.5,
            density : 1.2
        }
        this.basket = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.basket);
    }
    display(){
        rectMode(CENTER);
        rect(this.basket.position.x,this.basket.position.y, this.width,this.height);
    }
}