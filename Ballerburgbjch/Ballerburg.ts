window.addEventListener("load", _event => {

    function animate() {
        
        requestAnimationFrame(animate);
    }
    
    requestAnimationFrame(animate);
});