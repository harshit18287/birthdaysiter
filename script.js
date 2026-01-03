// Set the date we're counting down to (YYYY-MM-DD format)
const targetDate = new Date('2026-01-05T00:00:00').getTime(); // Replace with her birthday

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;
    
    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
    } else {
        document.getElementById('timer').innerHTML = '<div>Happy Birthday! 🎂</div>';
    }
}

 Update every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call
