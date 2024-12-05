document.addEventListener("DOMContentLoaded", () => {
    // Select elements
    const formalView = document.getElementById('formal-view');
    const slotMachineView = document.getElementById('slot-machine');
    const transformButton = document.getElementById('transform-button');
    const spinButton = document.getElementById('spin-button');
    const reels = [
        document.getElementById('reel-1'),
        document.getElementById('reel-2'),
        document.getElementById('reel-3'),
    ];

    // Slot machine data
    const info = ["Creative", "Real Estate Enthusiast", "Finance Pro", "Entrepreneur", "Team Leader"];

    // Transform button functionality
    transformButton.addEventListener('click', () => {
        formalView.classList.add('hidden');
        slotMachineView.classList.remove('hidden');
    });

    // Spin functionality
    spinButton.addEventListener('click', () => {
        reels.forEach(reel => {
            const randomInfo = info[Math.floor(Math.random() * info.length)];
            reel.textContent = randomInfo;
        });
    });
});

