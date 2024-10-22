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

    function animate() {

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
});