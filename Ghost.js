 class Ghost{
    constructor(x, y,w,h,ghostpos) {
        // var options = {
        //     'restitution':0,
        //     'friction':1.0,
        //     'density':1.0
        // }
       // this.visibility = 255;
      
       this.body = Bodies.rectangle(x,y,w,h,);
       this.w=w;
       this.h=h;
       this.ghostposition=ghostpos;
       this.image = loadImage("Catapult.png"); 
       World.add(world, this.body);
      }

      remove(index) {
        setTimeout(() => {
          Matter.World.remove(world, ghost[index].body);
          delete ghost[index];
        }, 2000);
      }
      display(){
      //  if(this.body.speed < 2){
        //  console.log(this.body.speed);
            var pos = this.body.position
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            imageMode(CENTER);
           // ellipseMode(CENTER);
            image(this.image, 0, this.ghostposition, this.w,this.h);
            pop();
           
      //  }
//         // else{
//         //     World.remove(world,this.body);
//         //     // push()
//         //     // tint(255,this.visibility)
//         //     // this.visibility = this.visibility-5;
//         //     // pop()
//         // }

     }
}