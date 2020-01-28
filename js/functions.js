function isButtonStartClicked(e) {
    let clickLocation = getClickLocation(e);

    if(clickLocation.x >= game.buttonStart.x &&
        clickLocation.x <= game.buttonStart.x + game.buttonStart.w && 
        clickLocation.y >= game.buttonStart.y &&
        clickLocation.y <= game.buttonStart.y + game.buttonStart.h &&
        game.isStarted == false && game.isCountdownScreen == false) {
            console.log("button diklik bos")
            game.Start();
        }
}

function getClickLocation(e) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    }
}

function keyUp(e) {
    if(e.key == "a" || e.key == "d") {
        game.player.stopMove();
    }
}

function keyDown(e) {
    if(e.key == "p") game.PauseGame();
    if(e.key == "a") game.player.moveLeft();
    if(e.key == "d") game.player.moveRight();
}


document.addEventListener('click', isButtonStartClicked, false)
document.addEventListener('keyup', keyUp, false)
document.addEventListener('keydown', keyDown, false)