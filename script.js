document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');

    // Add floating shapes
    setInterval(() => {
        const shape = document.createElement('div');
        shape.className = 'random-shape';
        shape.style.left = `${Math.random() * 100}%`;
        shape.style.animationDuration = `${Math.random() * 3 + 2}s`;
        container.appendChild(shape);

        // Remove shapes after animation
        setTimeout(() => shape.remove(), 3000);
    }, 500);
});
