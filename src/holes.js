class holes {
    constructor(canvas, x, y){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");

        this.x = x;
        this.y = y;
        this.radius= 50;
        this.place = 60;
        this.math = Math.PI / 2, 0, 2 * Math.PI;
    }
    drawHoles(){
            this.ctx.beginPath();
            this.ellipse(this.x, this.y, this.radius, this.place, this.math);
            this.ctx.fillStyle = "#6d2827";
            this.ctx.fill();
    }
}