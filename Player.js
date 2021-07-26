class Player{
    constructor(){
        this.index=0
        this.name=null
        this.distance=0
    }
    getCount(){
        database.ref('playerCount').on("value",function(data){
        playerCount=data.val();
        })
        
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(){
        console.log(playerCount)
        var playerIndex= "players/player"+this.index
        console.log(playerIndex)
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
    static getPlayerInfo(){
        database.ref('players').on("value",(data)=>{
        allPlayers=data.val()
        })
    }
}
