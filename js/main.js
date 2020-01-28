const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = "#474787"
ctx.fillRect(0,0,canvas.width, canvas.height)

const game = new Game(canvas);
requestAnimationFrame(function() {
    game.Render(canvas,ctx)
})
