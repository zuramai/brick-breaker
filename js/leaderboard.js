


const leaderboard = document.getElementById('leaderboard');
leaderboard.width = leaderboard.clientWidth;
leaderboard.height = leaderboard.clientHeight;

const ctx2 = leaderboard.getContext('2d');

function draw() {
    ctx2.font = "24px Comic Sans MS"
    ctx2.fillStyle = "#fff";
    ctx2.fillText("BRICK BREAKER", 10, 40);
    
    ctx2.fillText("GAME", 10, 70);

    ctx2.font = "14px Comic Sans MS"
    ctx2.fillText("Level: "+game.level, 10, 150);
    ctx2.fillText("Lives left: "+game.lives, 10, 180);
    ctx2.fillText("Press P to Pause", 10, 250);
    ctx2.font = "24px Comic Sans MS"
    ctx2.fillText("Your Score: "+game.score, 10, 350);
    ctx2.font = "14px Comic Sans MS"
    // ctx2.fillText("Made by ahmadsaugi.com", 10, leaderboard.height-20);

    // console.log('draw')
}

function update() {

}

function loop() {
    ctx2.clearRect(0,0,canvas.width,canvas.height)
    draw() 
    update()

    requestAnimationFrame(loop)
}
requestAnimationFrame(loop)

