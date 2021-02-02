class Throw1{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 20,12, options);
        this.width = 20;
        this.height = 12;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        rectMode(CENTER)
        fill("purple")
        rect(0,0,this.width,this.height)
        pop();
      }
}