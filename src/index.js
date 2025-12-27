// News Dashboard Application
// Main entry point

console.log('News Dashboard - Hello World!');

// Display current date and time
function updateTimestamp() {
    const timestampElement = document.getElementById('timestamp');
    if (timestampElement) {
        const now = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        timestampElement.textContent = `Current time: ${now.toLocaleDateString('en-US', options)}`;
    }
}

// Update timestamp when page loads
document.addEventListener('DOMContentLoaded', () => {
    updateTimestamp();
    // Update timestamp every second
    setInterval(updateTimestamp, 1000);
});
