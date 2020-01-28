class Ball {
    constructor(canvas) {
        this._x = canvas.width/2;
        this._y = canvas.height/2;
        this.x = canvas.width/2;
        this.y = canvas.height/2;
        this.r = 20;
        this.dx = 1;
        this.dy = 1;
        this.color = 'blue';
        this.canvas = canvas;
    }

    Draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI)
        ctx.fill();
        ctx.closePath();
    }

    Update(ctx) {
        for(var i = 1; i <= 5; i++) {
            this.x += this.dx; 
            this.y += this.dy; 

            if(this.isIntersect()) {
                console.log("intersect gan")
                this.dy = -1;
            }
            this.isMentok()
                
        }
    }

    isIntersect() {
        if(this.x - this.r/2 >= game.player.x && 
            this.x <= game.player.x + game.player.w &&
            this.y >= game.player.y && 
            this.y <= game.player.y + game.player.h) {
                return true;
            }
    }

    isMentok() {
        // MENTOK KANAN
        if(this.x + this.r/2 >= this.canvas.width) {
            this.dx = -1;
        }
        
        // MENTOK BAWAH
        if(this.y + this.r/2 >= this.canvas.height) {
            game.Mati();
        }
        
        // MENTOK ATAS
        if(this.y - this.r/2 <= 0) {
            this.dy = 1;
        }
        
        // MENTOK KIRI
        if(this.x - this.r/2 <= 0) {
            this.dx = 1;
        }
    }
    
    StartFromCenter() {
        this.x = this._x;
        this.y = this._y;
    }
}