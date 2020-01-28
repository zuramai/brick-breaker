class Player {
    constructor(canvas) {
        this.x = canvas.width/2;
        this.y = canvas.height-50;
        this.w = 100;
        this.h = 20;
        this.dx = 0;
        this.canvas = canvas;
    }

    Draw(ctx) {
        ctx.fillStyle = "#cc8e35"
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }

    Update() {
        for(var i=1; i<=10; i++) {
            if(this.x <= 0) {
                this.dx = 0;
                this.x = 1;
            } else if (this.x + this.w >= this.canvas.width) {
                this.dx = 0;
                this.x = this.canvas.width-1 - this.w;
            }

            this.x += this.dx;

        }
    }

    moveRight() {
        this.dx = 1;
    }

    moveLeft() {
        this.dx = -1;
    }

    stopMove() {
        this.dx = 0;
    }
}