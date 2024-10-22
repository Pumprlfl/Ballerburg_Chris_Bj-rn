window.addEventListener("load", _event => {

    interface Canon {

        pos: {
            x: number,
            y: number
        },

        dir: {
            x: number,
            y: number
        },

        power: number
    }

    interface Ball {

        size: number,

        pos: {
            x: number,
            y: number
        },

        dir: {
            x: number,
            y: number
        },

        power: number
    }

    interface Mountain {

        p1: {
            x: number,
            y: number
        }

        p2: {
            x: number,
            y: number
        }

        p3: {
            x: number,
            y: number
        }
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

    function drawBackground() {
        //draw background
        ctx.fillStyle = "rgb(77, 57, 20)";
        const bg: Path2D = new Path2D();
        bg.rect(worldPosX, worldPosY, worldWidth, worldHeigth);
        ctx.fill(bg);
    }

    function generateCanons(){
        canon1 = {
            pos: {
                x: 40,
                y: 540 + Math.random()*540
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
                y: 540 + Math.random()*540
            },
            dir: {
                x: 0,
                y: 0
            },
            power: 0.5
        };
    }

    function drawCanons(){
        const player1: Path2D = new Path2D();
        const player2: Path2D = new Path2D();

        ctx.fillStyle = ("rgb(0, 0, 0)");
        
        player1.rect(canon1.pos.x, canon1.pos.y, 100, 40);
        player2.rect(canon2.pos.x, canon2.pos.y, -100, -40);

        ctx.fill(player1);
        ctx.fill(player2);
    }

    function generateMountain(){
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
                x: 700 + Math.random()*400,
                y: 400 + Math.random()*400
            }

        }
    }

    function drawMountain(){

        ctx.fillStyle = "rgb(0, 0, 0)";

        ctx.beginPath();
        ctx.moveTo(mountain.p1.x, mountain.p1.y);
        ctx.lineTo(mountain.p2.x, mountain.p2.y);
        ctx.lineTo(mountain.p3.x, mountain.p3.y);
        ctx.closePath();

        ctx.fill();
    }

    function animate() {
        
        drawBackground();
        drawCanons();
        drawMountain();
        requestAnimationFrame(animate);
    }

    generateMountain();
    generateCanons();
    requestAnimationFrame(animate);
});