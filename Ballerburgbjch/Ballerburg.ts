window.addEventListener("load", _event => {

    interface canon {

        direction: {
            x: number,
            y: number
        },

        position: {
            x: number,
            y: number
        },

        power: number
    }

    function animate() {

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
});