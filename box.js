class Dustbin {
    constructor(x,y,width,height) {
      var options = {
        isStatic: true
      }

      this.body = Bodies.rectangle(x,y,width,height, options);
      this.width = 1;
      this.height = 1;
      this.image = loadImage("sprites/dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;

      imageMode(CENTER);
      image(this.image,pos.x, pos.y, 170,170);
    }
  };