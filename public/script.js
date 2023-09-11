document.addEventListener('DOMContentLoaded', function () {
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    
    setInterval(function () {
        const currentTime = new Date().toUTCString();
        currentUTCTimeElement.textContent = Date.parse(currentTime);
    }, 1000); // Update every second

    setInterval(function () {
        const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
        currentDayOfTheWeek.textContent = currentDay;
    }, 1000); 
});