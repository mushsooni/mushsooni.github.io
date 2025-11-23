document.addEventListener('DOMContentLoaded', () => {
    const fontToggle = document.getElementById('fontToggle');
    const previewArea = document.getElementById('previewArea');
    const fontSizeInput = document.getElementById('fontSize');
    const sizeValueDisplay = document.getElementById('sizeValue');

    // Font Toggle Logic
    fontToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            previewArea.style.fontFamily = "'MulmaruMono', monospace";
        } else {
            previewArea.style.fontFamily = "'Mulmaru', sans-serif";
        }
    });

    // Font Size Logic
    fontSizeInput.addEventListener('input', (e) => {
        const size = e.target.value;
        previewArea.style.fontSize = `${size}px`;
        sizeValueDisplay.textContent = `${size}px`;
    });
});
