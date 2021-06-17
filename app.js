const startCountdown = () => {
    const comebackDate = new Date("July 9, 2021 09:30:00").getTime();
    const currentDate = new Date().getTime();
    const timeGap = comebackDate - currentDate;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const updateDays = Math.floor(timeGap / days);
    const updateHours = Math.floor((timeGap % days) / hours);
    const updateMinutes = Math.floor((timeGap % hours) / minutes);
    const updateSeconds = Math.floor((timeGap % minutes) / seconds);
    
    document.querySelector(".day").innerText = updateDays;
    document.querySelector(".hour").innerText = updateHours;
    document.querySelector(".minute").innerText = updateMinutes;
    document.querySelector(".second").innerText = updateSeconds;
}
setInterval(startCountdown, 1000);
