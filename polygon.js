class polygon{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.image=loadImage("sprites/polygon.png")
        polygon=Bodies.circle(50,200,20)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
}

 