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
    const slider1angle = document.getElementById('player1angle');
    const slider2angle = document.getElementById('player2angle');
    const slider1power = document.getElementById('player1power');
    const slider2power = document.getElementById('player2power');
    const button1fire = document.getElementById('player1fire');
    const button2fire = document.getElementById('player2fire');
    const gravity = 10;
    let simulationFrame = 0;
    let simulate = false;
    let oldelapsed;
    let canon1;
    let canon2;
    let mountain;
    let ball;
    let player;
    ball = {
        size: 25,
        pos: {
            x: 0,
            y: 0
        },
        dir: {
            x: 0,
            y: 0
        },
        power: 0
    };
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
            power: 100
        };
        canon2 = {
            pos: {
                x: 1720,
                y: 540 + Math.random() * 540
            },
            angle: 0,
            power: 100
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
    //Angle Input
    function getSlider1Angle() {
        return parseInt(slider1angle.value, 10);
    }
    function getSlider2Angle() {
        return parseInt(slider2angle.value, 10);
    }
    slider1angle.addEventListener('input', () => {
        canon1.angle = getSlider1Angle();
    });
    slider2angle.addEventListener('input', () => {
        canon2.angle = getSlider2Angle();
    });
    //Power Input
    function getSlider1Power() {
        return parseInt(slider1power.value);
    }
    function getSlider2Power() {
        return parseInt(slider2power.value);
    }
    slider1power.addEventListener('input', (_event) => {
        canon1.power = getSlider1Power();
    });
    slider2power.addEventListener('input', (_event) => {
        canon2.power = getSlider2Power();
    });
    button1fire.addEventListener('click', (_event) => {
        simulate = true;
        player = false;
        ball.pos = canon1.pos;
        console.log("fire pressed");
    });
    button2fire.addEventListener('click', (_event) => {
        simulate = true;
        player = true;
        ball.pos = canon2.pos;
    });
    function simulateBall(/*pos: Vector2D,*/ angle, power /*, frametime: number*/) {
        ball.power = power;
        //calculate direction and falloff
        ball.dir.x = Math.cos(angle * Math.PI / 180);
        ball.dir.y = Math.sin(angle * Math.PI / 180);
        ball.pos.x += ball.dir.x * ball.power;
        ball.pos.y -= (ball.dir.y * ball.power - (gravity * simulationFrame)); // account for gravity
        if (ball.pos.x >= 1920 || ball.pos.x <= 0 || ball.pos.y >= 1080 || ball.pos.y <= 0) {
            simulate = false;
            simulationFrame = 0;
        }
    }
    function drawBall() {
        ctx.fillStyle = "rgb(0, 199, 60)";
        ctx.beginPath();
        ctx.fillRect(ball.pos.x, ball.pos.y, 1000, 1000);
        //ctx.ellipse(ball.pos.x, ball.pos.y, ball.size, ball.size, 0, 0, 2 * Math.PI, false);
        ctx.fill();
    }
    function animate(elapsed) {
        ctx.clearRect(0, 0, 1920, 1080);
        if (simulate == true) {
            console.log(ball.pos);
            console.log(ball.power);
            //console.log(ball.dir);
            simulateBall(/*canon1.pos,*/ canon1.angle, canon1.power /*, elapsed - oldelapsed*/);
            simulationFrame++;
            drawBall();
        }
        //console.log(simulationFrame);
        drawBackground();
        drawCanons();
        drawMountain();
        requestAnimationFrame(animate);
        oldelapsed = elapsed;
    }
})(Ballerburg || (Ballerburg = {}));
//# sourceMappingURL=Ballerburg.js.map