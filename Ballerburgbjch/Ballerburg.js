"use strict";
var Ballerburg;
(function (Ballerburg) {
    const canvas = document.getElementsByTagName("canvas")[0];
    const ctx = canvas.getContext("2d");
    const canvasX = canvas.width;
    const canvasY = canvas.height;
    const worldWidth = 1920;
    const worldHeigth = 1080;
    const worldPosX = 0;
    const worldPosY = 0;
    let canon1;
    let canon2;
    let mountain;
    window.addEventListener("load", start);
    function start(_event) {
        generateMountain();
        generateCanons();
        requestAnimationFrame(animate);
    }
    function drawBackground() {
        //draw background
        ctx.fillStyle = "rgb(77, 57, 20)";
        const bg = new Path2D();
        bg.rect(worldPosX, worldPosY, worldWidth, worldHeigth);
        ctx.fill(bg);
    }
    function generateCanons() {
        canon1 = {
            pos: {
                x: 140,
                y: 540 + Math.random() * 540
            },
            angle: 0,
            power: 0.5
        };
        canon2 = {
            pos: {
                x: 1720,
                y: 540 + Math.random() * 540
            },
            angle: 0,
            power: 0.5
        };
    }
    function drawCanons() {
        const player1 = new Path2D();
        const player2 = new Path2D();
        ctx.fillStyle = ("rgb(0, 0, 0)");
        ctx.translate(canon1.pos.x, canon1.pos.y);
        ctx.rotate(-Math.PI * canon1.angle / 180);
        ctx.fillRect(0, 0, 100, -40);
        ctx.rotate(Math.PI * canon1.angle / 180);
        ctx.translate(-canon1.pos.x, -canon1.pos.y);
        ctx.translate(canon2.pos.x, canon2.pos.y);
        ctx.rotate(Math.PI * canon2.angle / 180);
        ctx.fillRect(0, 0, -100, -40);
        ctx.rotate(-Math.PI * canon2.angle / 180);
        ctx.translate(-canon2.pos.x, -canon2.pos.y);
    }
    function generateMountain() {
        mountain = {
            p1: {
                x: 500,
                y: 1080
            },
            p2: {
                x: 1500,
                y: 1080
            },
            p3: {
                x: 700 + Math.random() * 400,
                y: 400 + Math.random() * 400
            }
        };
    }
    function drawMountain() {
        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.beginPath();
        ctx.moveTo(mountain.p1.x, mountain.p1.y);
        ctx.lineTo(mountain.p2.x, mountain.p2.y);
        ctx.lineTo(mountain.p3.x, mountain.p3.y);
        ctx.closePath();
        ctx.fill();
    }
    const slider1 = document.getElementById('player1angle');
    const slider2 = document.getElementById('player2angle');
    function getSlider1Value() {
        return parseInt(slider1.value, 10);
    }
    function getSlider2Value() {
        return parseInt(slider2.value, 10);
    }
    slider1.addEventListener('input', () => {
        canon1.angle = getSlider1Value();
    });
    slider2.addEventListener('input', () => {
        canon2.angle = getSlider2Value();
    });
    function animate() {
        ctx.clearRect(0, 0, 1920, 1080);
        drawBackground();
        drawCanons();
        drawMountain();
        requestAnimationFrame(animate);
    }
})(Ballerburg || (Ballerburg = {}));
//# sourceMappingURL=Ballerburg.js.map