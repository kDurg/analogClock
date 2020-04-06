// Color Palette: https://colorswall.com/palette/134/
let loaded = false;

function startClock() {

    setInterval(function () {
        let i = 0;
        const hourHand = document.querySelector('.hour-hand');
        const minuteHand = document.querySelector('.minute-hand');
        const secondHand = document.querySelector('.second-hand');
        const now = new Date();
        const midnight = new Date( // GET TIME FROM MIDNIGHT
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            0, 0, 0
        );
            
        // GET MILLISECOND OFFSET FOR SMOOTHER SECOND HAND MOVEMENT
        const mil = now.getTime() - midnight.getTime(); 
        const h = (mil / 1000 / 60 / 60);
        const m = (h * 60);
        const s = (m * 60);

        // ROTATE HANDS
        const hourDegree = h * 30 + (h / 2) + 90;
        hourHand.style.transform = `rotate(${hourDegree}deg)`;

        const minuteDegree = m * 6 + 90;
        minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

        const secondDegree = (s * 6);
        secondHand.style.transform = `rotate(${secondDegree}deg)`;

        if (i > 0) {
            document.querySelector(".clock").addClass("transform");
        }
        i++;

        if (loaded === false){
            loaded = true;
            makeStars();
        } else {
            moveStars();
        }

    }, 1000);
}

// MOVE STARS RANDOMLY BASED ON SCREEN SIZE
function moveStars() {

    let stars = document.querySelectorAll('div.star')
    const randomSize = size => {
        return parseInt(size* Math.random(), 10)
    }
    const randomNumber = size => {
        return parseInt(size * Math.random(), 3);
    }

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const browser = Math.min(windowWidth, windowHeight);
    stars.forEach(star => {
        let w = randomNumber(browser);

        // LIMIT TO SCREEN SIZE
        let x = randomSize((windowWidth - w));
        let y = randomSize((windowHeight - w));

        star.style.width = w + 'px';
        star.style.height = w + 'px';
        star.style.top = y + 'px';
        star.style.left = x + 'px';

        // MOVE STARS
        star.style.transition = (randomSize(100) + 900) + 'ms';
    })
}

// MAKE 50 STARS TO FLY AROUND THE CLOCK
function makeStars() {

    for (let i = 0; i < 50; i++){
        let starDiv = document.createElement("div");
        starDiv.setAttribute('class', 'star');
        document.getElementById('stars').appendChild(starDiv);
    }
}

startClock();