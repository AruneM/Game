class virus {
    constructor(canvas, x, y){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");

        this.x = x;
        this.y = y;
        this.virusimg = new Image();
        this.virusimg.src = "/img/red.png";
    }
    drawVirus(){
        this.ctx.drawImage(
            this.virusimg,
            this.x,
            this.y
        )
    }
}