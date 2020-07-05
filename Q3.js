class Q3 {
   
  constructor() {
    this.button1 = createButton('100');
    this.button2 = createButton('500');
    this.button3 = createButton('1000');
    this.button4 = createButton('More');
    this.button1.position(230,250);
    this.button2.position(270,250);
    this.title = createElement("h2");
    this.created = "true";
    this.title.html(" How much per month would you be willing to pay?");
  }
   
  display(){
    

    this.button1.mousePressed(()=>{
      game.update(5);
    });

    this.button2.mousePressed(()=>{
      game.update(5);
    });

    this.button3.mousePressed(()=>{
      game.update(5);
    });

    this.button4.mousePressed(()=>{
      game.update(5);
    });

  }
}
