document.addEventListener("DOMContentLoaded", () => {
    // Select elements
    const formalView = document.getElementById('formal-view');
    const slotMachineView = document.getElementById('slot-machine');
    const transformButton = document.getElementById('transform-button');
    const spinButton = document.getElementById('spin-button');
    const resultText = document.getElementById('result');
    const reels = [
        document.getElementById('reel-1'),
        document.getElementById('reel-2'),
        document.getElementById('reel-3'),
    ];

    // Slot machine data
    const info = ["🎉 Creative", "🏠 Real Estate Pro", "💼 Finance Guru", "🚀 Entrepreneur", "⭐ Team Leader"];

    // Transform button functionality
    transformButton.addEventListener('click', () => {
        formalView.classList.add('hidden');
        slotMachineView.classList.remove('hidden');
    });

    // Spin functionality
    spinButton.addEventListener('click', () => {
        resultText.textContent = ""; // Clear previous result
        reels.forEach(reel => {
            reel.style.animation = "spin 1s ease-in-out";
        });

        setTimeout(() => {
            // Stop spinning and assign random info
            reels.forEach(reel => {
                const randomInfo = info[Math.floor(Math.random() * info.length)];
                reel.style.animation = ""; // Reset animation
                reel.textContent = randomInfo;
            });

            // Display result
            const results = reels.map(reel => reel.textContent);
            resultText.textContent = `You got: ${results.join(", ")}`;
        }, 1000); // Match the spin animation duration
    });
});


