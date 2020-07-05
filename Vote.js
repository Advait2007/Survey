class Vote {

    constructor() {
      //this.input = createInput("Name");
      this.button1 = createButton('BJP');
      this.button2 = createButton('TRS');
      this.button3 = createButton('CONG');
    }
    
    hide(){
     
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
       
    }
  
    display(){
      var title = createElement('h2')
      title.html(" Please Vote ");
      title.position(200,200);
  
      
      this.button1.position(200, 300);
      this.button2.position(200, 350);
      this.button3.position(200, 400);

      this.button1.mousePressed(()=>{
        game.update(2);
      });

      this.button2.mousePressed(()=>{
        game.update(2);
      });
  
      this.button3.mousePressed(()=>{
        game.update(2);
      });
      
    }
  }
  
  