window.addEventListener("load", _event => {

    interface canon {

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

    interface ball {

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

    interface mountain {

        size: number,

        yPos: number
    }

    function animate() {

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
});