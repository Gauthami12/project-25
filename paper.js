
class Paper {
    constructor(x,y,width,height) {
      var options = {
          'isStatic' : false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 70;
      this.height = 70;
      this.image = loadImage("sprites/paper.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0, this.width, this.height);
      stroke("black");
      pop();
    }
  }