class Form{
    constructor(){
        this.title=createElement('h2')
        this.input= createInput('Name')
        this.button= createButton('play')
        this.greeting= createElement('h3')
    }
    display(){
      
        this.title.html('Car Racing Game')
        this.title.position(displayWidth/2-50,50);
        
        this.input.position(displayWidth/2-40,displayHeight/2-80);
       
        this.button.position(displayWidth/2-40,displayHeight/2-20);
       
        this.button.mousePressed(()=>{
            this.input.hide();
           this.button.hide();
            player.name=this.input.value()
            playerCount=playerCount+1
            player.index=playerCount
            console.log(playerCount)
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("hello "+player.name)
            this.greeting.position(displayWidth/2-40,displayHeight/2-20);
        })
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
}