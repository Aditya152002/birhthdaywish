// script.js
function playSong() {
    const song = document.getElementById('birthdaySong');
    song.play();
}

function triggerConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const numberOfConfetti = 100; // Number of confetti particles

    for (let i = 0; i < numberOfConfetti; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Randomize confetti position, size, and color
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 2 + 3 + 's'; // 3-5 seconds
        confetti.style.backgroundColor = randomColor();
        confettiContainer.appendChild(confetti);

        // Remove confetti after animation ends
        setTimeout(() => {
            confetti.remove();
        }, 5000); // Adjust this to match animation duration
    }
}

// Helper function to generate random colors
function randomColor() {
    const colors = ['#ff6666', '#ffcc66', '#66ff66', '#66ccff', '#ff66ff', '#cc66ff'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Optionally, trigger confetti on page load
window.onload = () => {
    triggerConfetti();
    createInteractiveElements();
};

// Create stars and clickable balloons
function createInteractiveElements() {
    const container = document.getElementById('interactive-container');
    
    // Create 20 stars
    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        // Random position
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.onclick = popElement;
        container.appendChild(star);
    }

    // Create 10 clickable balloons
    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('clickable-balloon');
        // Random position
        balloon.style.top = Math.random() * 100 + 'vh';
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.onclick = popElement;
        container.appendChild(balloon);
    }
}

// Pop the element and play sound
function popElement(event) {
    const popSound = document.getElementById('popSound');
    popSound.play();
    // Apply pop effect and remove element
    event.target.classList.add('pop');
    setTimeout(() => {
        event.target.remove();
    }, 200); // Wait for the pop animation to finish
}
