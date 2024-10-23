namespace Ballerburg {

    interface Vector2D {
        x: number,
        y: number
    }

    interface Canon {

        pos: Vector2D,

        angle: number,

        power: number
    }

    interface Ball {

        size: number,

        pos: Vector2D,

        dir: Vector2D,

        power: number
    }

    interface Mountain {

        p1: Vector2D,

        p2: Vector2D,

        p3: Vector2D
    }

    const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

    const canvasX: number = canvas.width;
    const canvasY: number = canvas.height;
    const worldWidth: number = 1920;
    const worldHeigth: number = 1080;
    const worldPosX: number = 0;
    const worldPosY: number = 0;

    const slider1angle: HTMLInputElement = document.getElementById('player1angle') as HTMLInputElement;
    const slider2angle: HTMLInputElement = document.getElementById('player2angle') as HTMLInputElement;
    const slider1power: HTMLInputElement = document.getElementById('player1angle') as HTMLInputElement;
    const slider2power: HTMLInputElement = document.getElementById('player2angle') as HTMLInputElement;

    const button1fire: HTMLInputElement = document.getElementById('player1fire') as HTMLInputElement;
    const button2fire: HTMLInputElement = document.getElementById('player2fire') as HTMLInputElement;

    const gravity: number = 10;

    let simulationFrame: number = 0;
    let simulate: boolean = false;
    let oldelapsed: number;

    let canon1: Canon;
    let canon2: Canon;
    let mountain: Mountain;
    let ball: Ball;

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
    }

    window.addEventListener("load", start);

    function start(_event: Event): void {
        generateMountain();
        generateCanons();
        requestAnimationFrame(animate);

    }

    function drawBackground() {
        //draw background
        ctx.fillStyle = "rgb(77, 57, 20)";
        const bg: Path2D = new Path2D();
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
        const player1: Path2D = new Path2D();
        const player2: Path2D = new Path2D();

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

        }
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
    function getSlider1Angle(): number {
        return parseInt(slider1angle.value, 10);
    }

    function getSlider2Angle(): number {
        return parseInt(slider2angle.value, 10);
    }

    slider1angle.addEventListener('input', () => {
        canon1.angle = getSlider1Angle();
    });

    slider2angle.addEventListener('input', () => {
        canon2.angle = getSlider2Angle();
    });

    //Power Input
    function getSlider1Power(): number {
        return parseInt(slider1angle.value, 10);
    }

    function getSlider2Power(): number {
        return parseInt(slider2angle.value, 10);
    }

    slider1power.addEventListener('input', (_event) => {
        canon1.power = getSlider1Power();
    });

    slider2power.addEventListener('input', (_event) => {
        canon2.power = getSlider2Power();
    });

    button1fire.addEventListener('click', (_event) => {
        simulate = true;
        console.log("fire pressed");
    });

    button2fire.addEventListener('click', (_event) => {
        simulate = true;
    });

    function simulateBall(/*pos: Vector2D,*/ angle: number, power: number/*, frametime: number*/) {

        if (simulationFrame == 0) {
            ball.pos = canon1.pos;
        }

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


    function animate(elapsed: number) {
        ctx.clearRect(0, 0, 1920, 1080);

        if (simulate == true) {

            console.log(ball.pos);
            //console.log(ball.dir);

            simulateBall(/*canon1.pos,*/ canon1.angle, canon1.power/*, elapsed - oldelapsed*/);
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
}