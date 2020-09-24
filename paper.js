class Paper {
    constructor(x, y,radius) {
      var options = {
        'isStatic':false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
      }
      this.body = Bodies.circle(x, y, radius,options);
      this.radius =radius;
      //this.radius1 = 20;
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
     
     
      
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y, this.radius,this.radius );
      
    }
  };


  /*class Paper {
    constructor(x, y) {
      var options = {
        'isStatic':false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
      }
      this.body = Bodies.rectangle(x, y, 50,50, options);
      this.width =50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };*/
  





















