document.addEventListener('DOMContentLoaded', () => {
    const shapesContainer = document.querySelector('.flying-shapes');

    setInterval(() => {
        const shape = document.createElement('div');
        shape.className = 'random-shape';
        shape.style.left = `${Math.random() * 100}%`;
        shape.style.animationDuration = `${Math.random() * 3 + 2}s`;
        shapesContainer.appendChild(shape);

        setTimeout(() => shape.remove(), 5000);
    }, 500);
});
