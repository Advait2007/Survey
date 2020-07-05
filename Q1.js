class Q1 {
   
    constructor() {
      this.button1 = createButton('yes');
      this.button2 = createButton('no');
      this.button1.position(230,250);
      this.button2.position(270,250);
      this.title = createElement("h2");
      this.created = "true";
      this.title.html(" Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
    }
     
    display(){
      
  
      this.button1.mousePressed(()=>{
        game.update(3);
      });

      this.button2.mousePressed(()=>{
        game.update(3);
      });
  
    }
  }
  