class Form
{
    constructor()
    {
        this.title = createElement('h1');
        this.title.html("Car Racing");
        this.input = createInput('Name');
        //this.input.size(w,h);
        //
        this.button = createButton('Play');
        this.greeting = createElement('h2');
    }
    hide()
    {
        this.button.hide();
        this.title.hide();
        this.input.hide();
        this.greeting.hide();
    }
    display()
    {
        this.title.position(displayWidth/2 + 100,20);
        this.input.position(displayWidth/2 + 100,350);
        this.button.position(displayWidth/2 + 150,400);
        
        this.button.mousePressed(() =>

        {
            this.input.hide();
            this.button.hide();
            this.title.hide();
            player.name = this.input.value();
            playerCount = playerCount +  1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello, " +  player.name);
            this.greeting.position(displayWidth/2 + 50,300);

        }
        )
    }
}