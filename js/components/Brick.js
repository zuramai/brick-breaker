class Brick {
    constructor() {
        this.brickRow = 3;
        this.brickColumn = 7;
        this.bricks = [];
        this.brickColor = "#ff5252";
        this.brickW = 67;
        this.brickH = 20;
        this.brickOffsetX = 20;
        this.brickOffsetY = 20;
        this.brickPadding = 10;
    }

    Init(ctx) {
        var row = 1;
        while(row <= this.brickRow) {
            var column = 1;
            while(column <= this.brickColumn) {
                this.bricks.push({
                    x: (this.brickW * column) + (this.brickOffsetX*column) - this.brickW,
                    y: (this.brickH * row) + (this.brickOffsetY * row),
                    status: 1
                });
                column++;
            }
            row++;
        }
    }

    Draw(ctx) {

        this.bricks.forEach((brick) => {
            if(!brick.status) return;
            ctx.fillStyle = this.brickColor;
            ctx.fillRect(brick.x, brick.y, this.brickW, this.brickH)
            ctx.fill();
        })
    }

    Update(ctx) {
        this.bricks.forEach((brick) => {
            if (game.ball.x + game.ball.r/2 >= brick.x  &&
                game.ball.x <= brick.x + this.brickW &&
                game.ball.y + game.ball.r / 2  >= brick.y &&
                game.ball.y <= brick.y + this.brickH &&
                brick.status) {
                    brick.status = 0;
                    game.ball.dy = game.ball.dy == 1 ? -1 : 1;
                    game.score++;
                }
        })
    }
}