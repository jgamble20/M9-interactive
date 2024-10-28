const timeDisplay = document.getElementById('time');
const dateDisplay = document.getElementById('date');
const toggleTimeButton = document.getElementById('toggleTime');
const toggleDateButton = document.getElementById('toggleDate');

function showTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    timeDisplay.textContent = timeString;
}

function showDate() {
    const now = new Date();
    const dateString = now.toLocaleDateString();
    dateDisplay.textContent = dateString;
}

toggleTimeButton.addEventListener('click', () => {
    if (timeDisplay.textContent) {
        timeDisplay.textContent = '';
    } else {
        showTime();
    }
});

toggleDateButton.addEventListener('click', () => {
    if (dateDisplay.textContent) {
        dateDisplay.textContent = '';
    } else {
        showDate();
    }
});
