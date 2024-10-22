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

        size: number,

        yPos: number
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