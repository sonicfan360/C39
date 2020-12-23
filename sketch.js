var form;
var game;
var player;
var gamestate=0;
var playercount=0;
var allPlayers;
var car1, car1Image;
var car2, car2Image;
var car3, car3Image;
var car4, car4Image;
var cars
var Track

function preload(){
Track = loadImage("images/track.jpg")
car1Image = loadImage("images/car1.png")
car2Image = loadImage("images/car2.png")
car3Image = loadImage("images/car3.png")
car4Image = loadImage("images/car4.png")
}
var dataBase;
function setup(){
    createCanvas(windowWidth,windowHeight);
    resetButton = createButton("reset");
    resetButton.position(width-50,50)
    resetButton.mousePressed(clearData)
    dataBase = firebase.database();
    game = new Game();
    game.getState();
    game.startGame();
    
    
}

function draw(){
    background("grey");
    if(playercount === 4){
        game.update(1)
    }
    if(gamestate===1)
    {
        game.play();
        
    }
    if(gamestate === 2){
        game.end()
    }
   
}

function clearData()
{
    database.ref("/").update({"PlayerCount" : 0});
    database.ref("/").update({"GameState" : 0});
    database.ref("/Players").remove()

}

