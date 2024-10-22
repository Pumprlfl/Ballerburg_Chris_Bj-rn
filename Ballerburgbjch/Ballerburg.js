window.addEventListener("load", function (_event) {
    var canvas = document.getElementsByTagName("canvas")[0];
    var ctx = canvas.getContext("2d");
    var canvasX = canvas.width;
    var canvasY = canvas.height;
    var worldWidth = 1920;
    var worldHeigth = 1080;
    var worldPosX = 0;
    var worldPosY = 0;
    var canon1;
    var canon2;
    function drawBackground() {
        //draw background
        ctx.fillStyle = "rgb(77, 57, 20)";
        var bg = new Path2D();
        bg.rect(worldPosX, worldPosY, worldWidth, worldHeigth);
        ctx.fill(bg);
    }
    function generateCanons() {
        canon1 = {
            pos: {
                x: 40,
                y: 540 + Math.random() * 540
            },
            dir: {
                x: 0,
                y: 0
            },
            power: 0.5
        };
        canon2 = {
            pos: {
                x: 1820,
                y: 540 + Math.random() * 540
            },
            dir: {
                x: 0,
                y: 0
            },
            power: 0.5
        };
    }
    function drawCanons() {
        var player1 = new Path2D();
        var player2 = new Path2D();
        ctx.fillStyle = ("rgb(0, 0, 0)");
        player1.rect(canon1.pos.x, canon1.pos.y, 100, 40);
        player2.rect(canon2.pos.x, canon2.pos.y, -500, -200);
        ctx.fill(player1);
        ctx.fill(player2);
    }
    function animate() {
        drawBackground();
        drawCanons();
        requestAnimationFrame(animate);
    }
    generateCanons();
    requestAnimationFrame(animate);
});
