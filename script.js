function showSurprise() {
    const surpriseElement = document.getElementById('surprise');
    surpriseElement.classList.remove('hidden');

    // Adding a confetti animation
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 3000);
}
