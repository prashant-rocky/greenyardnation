// navbar scolled
document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { // adjust scroll value as needed
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// typewriter
// ---- CONFIG ----
const words = ["green.", "healthy.", "thriving."," beautiful"]; // <-- change these
const typeSpeed = 120;    // ms per character when typing
const deleteSpeed = 70;   // ms per character when deleting
const holdTime = 1400;    // ms to wait after a full word is typed
const pauseBetween = 400; // small pause before typing next word
// ----------------

const el = document.getElementById("type");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeTick() {
    const current = words[wordIndex % words.length];
    if (!isDeleting) {
        // typing
        el.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {

            isDeleting = true;
            setTimeout(typeTick, holdTime);
        } else {
            setTimeout(typeTick, typeSpeed);
        }
    } else {
        // deleting
        el.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            
            isDeleting = false;
            wordIndex++;
            setTimeout(typeTick, pauseBetween);
        } else {
            setTimeout(typeTick, deleteSpeed);
        }
    }
}

// start after a short delay
setTimeout(typeTick, 600);