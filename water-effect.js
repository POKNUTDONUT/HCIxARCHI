document.addEventListener('DOMContentLoaded', function() {
    const waterBackground = document.querySelector('.water-background');
    
    // Create initial ripples
    createRipples();
    
    // Create bubbles
    createBubbles();
    
    // Create random ripples periodically
    setInterval(createRipples, 3000);
    
    // Create random ripple on click
    document.addEventListener('click', function(e) {
        createRippleAt(e.clientX, e.clientY);
    });
    
    function createRipples() {
        // Create 2-3 random ripples
        const count = Math.floor(Math.random() * 2) + 2;
        for (let i = 0; i < count; i++) {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            createRippleAt(x, y);
        }
    }
    
    function createRippleAt(x, y) {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        // Random size and duration
        const size = Math.random() * 20 + 10;
        ripple.style.width = size + 'px';
        ripple.style.height = size + 'px';
        
        const duration = Math.random() * 3 + 3;
        ripple.style.animationDuration = duration + 's';
        
        waterBackground.appendChild(ripple);
        
        // Remove after animation completes
        setTimeout(() => {
            ripple.remove();
        }, duration * 1000);
    }
    
    function createBubbles() {
        // Create 15-20 bubbles
        const count = Math.floor(Math.random() * 6) + 15;
        
        for (let i = 0; i < count; i++) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            
            // Random properties
            const size = Math.random() * 15 + 5;
            const left = Math.random() * 100;
            const duration = Math.random() * 15 + 10;
            const delay = Math.random() * 5;
            
            bubble.style.width = size + 'px';
            bubble.style.height = size + 'px';
            bubble.style.left = left + 'vw';
            bubble.style.bottom = '-20px';
            bubble.style.animationDuration = duration + 's';
            bubble.style.animationDelay = delay + 's';
            
            waterBackground.appendChild(bubble);
        }
        
        // Create new bubbles periodically
        setTimeout(createBubbles, 10000);
    }
});