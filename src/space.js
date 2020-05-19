class space {
    constructor(canvas, x, y){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");

        this.x = x;
        this.y = y;
        this.width = 66;
        this.height = 80;
    }
    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = "#6d2827";
        this.fillRect(
        this.x,
        this.y,
        this.width,
        this.height);
    };