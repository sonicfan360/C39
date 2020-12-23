class Player {
    constructor(){
    this.name = null;
    this.distance = 0;
    this.index = null;
    }
    getCount()
    {
       var countRef =  dataBase.ref("PlayerCount")
       countRef.on("value", function(data){
        playercount = data.val();
       })
    }
   update()
   {
     //update the database with Players /player1 - Name, distance
     var playerIndex  = "Players/player" + this.index;
     dataBase.ref(playerIndex).set({Name:this.name,
                                    distance:this.distance
                                    })
   }
   updateCount(playerCount)
   {
       dataBase.ref("/").update({PlayerCount:playerCount})
   }
    static getPlayerInfo()
    {
       var PlayerInfoRef = dataBase.ref("Players");
       PlayerInfoRef.on("value",(data)=>{allPlayers = data.val();})
    }
}