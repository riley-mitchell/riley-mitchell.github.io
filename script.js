document.addEventListener("DOMContentLoaded", () => {
    const spinButton = document.getElementById("spin-button");
    const reels = [
        document.getElementById("reel-1"),
        document.getElementById("reel-2"),
        document.getElementById("reel-3"),
    ];
    const resultText = document.getElementById("result");

    // Slot options (emojis)
    const slotOptions = ["🍎", "🍒", "🍇", "🔔", "💎"];

    // Spin reels
    spinButton.addEventListener("click", () => {
        resultText.textContent = ""; // Clear old result

        reels.forEach(reel => {
            reel.style.animation = "spin 1s ease-in-out";
        });

        setTimeout(() => {
            reels.forEach(reel => {
                const randomSymbol =
                    slotOptions[Math.floor(Math.random() * slotOptions.length)];
                reel.style.animation = ""; // Stop animation
                reel.textContent = randomSymbol; // Update symbol
            });

            // Display result
            const reelSymbols = reels.map(reel => reel.textContent);
            resultText.textContent = `You got: ${reelSymbols.join(", ")}`;
        }, 1000); // Match animation duration
    });
});
