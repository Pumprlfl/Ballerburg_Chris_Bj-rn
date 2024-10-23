namespace Ballerburg {

    interface Vector2D{
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

    let canon1: Canon;
    let canon2: Canon;
    let mountain: Mountain;

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
    const slider1angle:HTMLInputElement = document.getElementById('player1angle') as HTMLInputElement;
    const slider2angle:HTMLInputElement = document.getElementById('player2angle') as HTMLInputElement;

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
    const slider1power:HTMLInputElement = document.getElementById('player1angle') as HTMLInputElement;
    const slider2power:HTMLInputElement = document.getElementById('player2angle') as HTMLInputElement;

    function getSlider1Power(): number {
        return parseInt(slider1angle.value, 10);
    }

    function getSlider2Power(): number {
        return parseInt(slider2angle.value, 10);
    }

    slider1power.addEventListener('input', () => {
        canon1.power = getSlider1Power();
    });

    slider2power.addEventListener('input', () => {
        canon2.power = getSlider2Power();
    });

    function simulateBall(pos: Vector2D, direction: Vector2D, power: number){
        
    }


    function animate() {
        ctx.clearRect(0,0,1920,1080);

        drawBackground();
        drawCanons();
        drawMountain();
        requestAnimationFrame(animate);
    }
}