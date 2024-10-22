"use strict";
window.addEventListener("load", _event => {
    const canvas = document.getElementsByTagName("canvas")[0];
    const ctx = canvas.getContext("2d");
    let canvasX = canvas.width;
    let canvasY = canvas.height;
    let worldWidth = 1920;
    let worldHeigth = 1080;
    let worldPosX = 0;
    let worldPosY = 0;
    function drawBackground() {
        //draw background
        ctx.fillStyle = "rgb(77, 57, 20)";
        let bg = new Path2D();
        bg.rect(worldPosX, worldPosY, worldWidth, worldHeigth);
        ctx.fill(bg);
    }
    function animate() {
        drawBackground();
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
});
