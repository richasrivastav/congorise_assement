function startCountdown() {
    const countdownDate = new Date(document.getElementById('datetime').value).getTime();

    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = formatTime(days);
        document.getElementById('hours').innerHTML = formatTime(hours);
        document.getElementById('minutes').innerHTML = formatTime(minutes);
        document.getElementById('seconds').innerHTML = formatTime(seconds);

        if (distance < 0) {
            clearInterval(timer);
            document.querySelector('.timer').innerHTML = 'Countdown Expired';
        }
    }, 1000);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
