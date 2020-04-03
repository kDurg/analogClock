// JSON OBJECT TO SHOW THE LENGTH OF A DAY IN HOURS FOR EACH PLANET
// Planet Images Source: https://www.freepik.com/free-vector/milky-way-planets_800857.htm
// Color Palette: https://colorswall.com/palette/134/
let currentPlanet;

const planetData = {
    mercury: 1408,
    venus: 5832,
    earth: 24,
    mars: 25,
    jupiter: 10,
    saturn: 11,
    uranus: 17,
    neptune: 16,
    pluto: 153
}

// GET PLANET DATA TO RENDER CLOCK, PHOTOS AND TIMING
function getCurrentPlanetData() {
    currentPlanet = document.getElementsByName('planetFieldset');
    currentPlanet.forEach(planet => {
        if (planet.checked) { currentPlanet = planet.value }
    });
}

function renderClock() {
    // RENDER THE CLOCK FACE, HOUR MARKERS AND PLANET PHOTO
}

function renderInputBox() {
    // RENDER INPUT BOX ON LOAD TO SELECT PLANET
}

setInterval(function () {
    getCurrentPlanetData();
    console.log('Current Planet: ', currentPlanet);
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    const now = new Date()
    const then = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0, 0, 0)
    const mil = now.getTime() - then.getTime(); // GET MILLISECOND OFFSET FOR SMOOTHER SECOND HAND MOVEMENT

    const h = (mil / (1000 * 60 * 60));
    const m = (h * 60);
    const s = (m * 60);
    // console.log(now)

    const secondDegree = (s * 6);
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    const hourDegree = h * 30 + (h / 2);
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

    const minuteDegree = m * 6;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

}, 1000);

