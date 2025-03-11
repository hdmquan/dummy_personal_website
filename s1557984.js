document.addEventListener('DOMContentLoaded', () => {
    createPixelCursor();
});

// Le Fake Cursor
function createPixelCursor() {
    const cursor = document.createElement('div');
    cursor.classList.add('pixel-cursor');

    // Bring the adoption form
    document.body.appendChild(cursor);
    
    cursor.style.position = 'fixed';
    cursor.style.width = '10px';
    cursor.style.height = '10px';
    cursor.style.backgroundColor = '#ffffff';
    cursor.style.zIndex = '9999';
    cursor.style.pointerEvents = 'none';
    cursor.style.imageRendering = 'pixelated';
    
    // Hide the default cursor...
    document.body.style.cursor = 'none';
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
    
    const clickableElements = document.querySelectorAll('a, button');
    clickableElements.forEach(element => {
        
        // Somehow I have to specify this again here?
        element.style.cursor = 'none';

        element.addEventListener('mouseenter', () => {
            cursor.style.backgroundColor = '#00ff00';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.backgroundColor = '#ffffff';
        });
    });
}
