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

    function drawBackground() {
        //draw background
        ctx.fillStyle = "rgb(77, 57, 20)";
        const bg: Path2D = new Path2D();
        bg.rect(worldPosX, worldPosY, worldWidth, worldHeigth);
        ctx.fill(bg);
    }

    function animate() {
        drawBackground();
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
});