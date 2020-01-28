class Game {
    constructor(canvas) {
        this.isStarted = false;
        this.isOver = false;
        this.isPaused = false;
        this.isCountdownScreen = false;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        this.ball = new Ball(canvas);
        this.brick = new Brick(canvas);
        this.player = new Player(canvas);

        this.buttonStart = { x: this.canvas.width / 2 - 100, y: this.canvas.height / 2 - 50, w: 200, h: 50 },
        this.level = 1;
        this.score = 0;
        this.lives = 3;

        this.countdownNumber = 3;
    }

    ShowHomeScreen(ctx) {
        // ctx.fillStyle = "#2c2c54";
        // ctx.rect(this.buttonStart.x, this.buttonStart.y, this.buttonStart.w, this.buttonStart.h);
        // ctx.fill()
        
        ctx.font = "24px Comic Sans MS"
        ctx.fillStyle = "#fff";
        ctx.textAlign = 'center';
        ctx.fillText('Start Game', this.canvas.width/2, this.canvas.height/2- 20)
    }
    
    ShowCountdownScreen() {
        this.ctx.font = "32px Comic Sans MS"
        this.ctx.fillStyle = "#fff";
        this.ctx.textAlign = 'center';
        this.ctx.fillText(this.countdownNumber, this.canvas.width / 2, this.canvas.height / 2 - 20)
    }

    Start() {
        this.isStarted = true;
        this.isCountdownScreen = true;
        this.brick.Init();
        console.log(this.brick.bricks);

        console.log('the game started')

        var countdown = setInterval(() => {
            if (this.countdownNumber == 1) {
                this.isStarted = true;
                this.isCountdownScreen = false;
                clearInterval(countdown)
            }
            this.countdownNumber--;



        }, 1000);
    }

    DrawAll() {
        this.ball.Draw(this.ctx);
        this.player.Draw(this.ctx);
        this.brick.Draw(this.ctx);
    }

    UpdateAll() {
        this.ball.Update(this.ctx);
        this.player.Update(this.ctx);
        this.brick.Update(this.ctx);
    }

    Render(canvas, ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        if(!this.isStarted) {
            this.ShowHomeScreen(ctx);
        }else if(this.isStarted && this.isCountdownScreen){
            // console.log("countdown")
            // console.log("countdown screen")
            this.ShowCountdownScreen();
        }else if(this.isPaused && this.isStarted == true) {
            this.DrawPauseScreen(ctx);
        }else if(this.isStarted && !this.isCountdownScreen){
            this.DrawAll();
            this.UpdateAll();
    
        }
        requestAnimationFrame(() => {
            this.Render(canvas, ctx)
        })
    }

    PauseGame() {
        if(this.isStarted) {
            console.log("pause game gan")
            this.isPaused = !this.isPaused;
            // this.DrawPauseScreen();
        }
    }

    DrawPauseScreen(ctx) {
        ctx.fillStyle = "#fff";
        ctx.fillRect(this.canvas.width/2 - 100, this.canvas.height/2 - 50, 200, 90);
        ctx.fill();

        ctx.font = "32px Comic Sans MS"
        ctx.fillStyle = "#222"
        ctx.fillText("PAUSED", this.canvas.width/2, this.canvas.height/2)

        ctx.font = "14px Comic Sans MS"
        ctx.fillStyle = "#555"
        ctx.fillText("Press P to continue", this.canvas.width/2, this.canvas.height/2 + 20)

    }

    Mati() {
        if(this.lives == 0) {
            this.GameOver();
        }
        this.lives--;
    }

    GameOver() {
        this.ball.StartFromCenter();
    }

}