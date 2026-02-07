// POPUP
const btn = document.getElementById("loveBtn");
const popup = document.getElementById("popup");
const close = document.getElementById("close");

btn.onclick = () => popup.style.display = "flex";
close.onclick = () => popup.style.display = "none";

// TIMER (FROM 24 FEB 2009 FOREVER)
const birthDate = new Date("2009-02-24T00:00:00");

function updateTimer() {
    const now = new Date();
    let diff = now - birthDate;

    const years = Math.floor(diff / (1000*60*60*24*365.25));
    diff -= years * (1000*60*60*24*365.25);

    const days = Math.floor(diff / (1000*60*60*24));
    diff -= days * (1000*60*60*24);

    const hours = Math.floor(diff / (1000*60*60));
    diff -= hours * (1000*60*60);

    const minutes = Math.floor(diff / (1000*60));
    diff -= minutes * (1000*60);

    const seconds = Math.floor(diff / 1000);

    document.getElementById("timer").innerHTML =
        `${years} Years ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

setInterval(updateTimer, 1000);
updateTimer();

// FALLING PHOTOS
const photoContainer = document.querySelector(".falling-photos");
const totalPhotos = 8;

function createPhoto() {
    const img = document.createElement("img");
    const num = Math.floor(Math.random() * totalPhotos) + 1;

    img.src = `photos/pic${num}.jpg`;

    img.style.left = Math.random() * window.innerWidth + "px";
    img.style.animationDuration = (5 + Math.random() * 5) + "s";
    img.style.opacity = Math.random();

    photoContainer.appendChild(img);

    setTimeout(() => img.remove(), 10000);
}

setInterval(createPhoto, 600);

