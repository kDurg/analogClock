// Planet Images Source: https://www.freepik.com/free-vector/milky-way-planets_800857.htm
// Color Palette: https://colorswall.com/palette/134/

setInterval(function () {
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');
    const now = new Date()
    const midnight = new Date( // GET TIME FROM MIDNIGHT
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0, 0, 0)
    const mil = now.getTime() - midnight.getTime(); // GET MILLISECOND OFFSET FOR SMOOTHER SECOND HAND MOVEMENT
    const h = (mil / (1000 * 60 * 60));
    const m = (h * 60);
    const s = (m * 60);
    
    const hourDegree = h + (h / 2);
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    
    const minuteDegree = m * 3;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    
    const secondDegree = (s * 6);
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
}, 1000);