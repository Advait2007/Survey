class Q2 {
   
  constructor() {
    this.button1 = createButton('yes');
    this.button2 = createButton('no');
    this.button1.position(230,250);
    this.button2.position(270,250);
    this.title = createElement("h2");
    this.created = "true";
    this.title.html(" Would you be willing to contribute a small amount every month for such a program?");
  }
   
  display(){
    

    this.button1.mousePressed(()=>{
      game.update(4);
    });

    this.button2.mousePressed(()=>{
      game.update(4);
    });

  }
}
