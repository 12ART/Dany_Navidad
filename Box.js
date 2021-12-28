class Box{
    constructor(x, y) {
        var options = {
          'density':1.5,
          'friction': 1.0,
          'restitution':0.5
        }
        
        this.body = Bodies.rectangle(x, y, 50, 70, options);
        this.width = 100;
        this.height = 100;
        this.image=loadImage("stand1.png");
        World.add(world, this.body);
      }

      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,150,150);
        pop();
      }
}
