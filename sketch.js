var gameState;
var canvas;
var vote, q1,q2,q3;

function setup(){
    canvas = createCanvas(500,500);
    database = firebase.database();
    gameState  = database.ref('gameState');
    gameState.on("value",function(data){
       gameState = data.val();
    })
    game = new Game();
}


 function draw(){
    background(254);
    //getState();
   
    console.log(gameState);
    updateState();
}  

function updateState(){
   
    console.log("surveyState:");
    console.log(gameState);

    if(gameState == 1 ){
        vote = new Vote();
        vote.display();
    }else{
        if(vote!=undefined){
            vote.hide();
        }
      
    }

    if(gameState == 2 ){
        if(q1==undefined){
           q1 = new Q1();    
        }    
       q1.display();
    }

    if(gameState == 3){
        if(q2==undefined){
            q2 = new Q2();    
         }
        q2.display();
    }

    if(gameState == 4){
        if(q3==undefined){
            q3 = new Q3();    
         }
        q3.display();
    }

    if(gameState == 5){
        text("Thanks for voting",250,200);
    }
    

}

