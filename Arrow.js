class Arrow extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("Arrow.jpg");
    this.x=x;
    this.y=y;
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
