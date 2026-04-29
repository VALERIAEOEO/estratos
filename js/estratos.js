// filepath: js/estratos.js
document.addEventListener('DOMContentLoaded', function() {
    const circleContainer = document.querySelector('.circle-container');
    
    // Make circle follow mouse
    document.addEventListener('mousemove', function(e) {
        circleContainer.style.left = e.clientX + 'px';
        circleContainer.style.top = e.clientY + 'px';
    });
    
    // Initial position at center
    circleContainer.style.left = '50%';
    circleContainer.style.top = '50%';
});