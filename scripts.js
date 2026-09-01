/* =========================================================
   OUR STORY — JAVASCRIPT
   Paul ❤️ Mama
========================================================= */


/* =========================================================
   PASSWORD
========================================================= */

const correctPassword = "12032026";


function unlock() {

    const input =
        document.getElementById("password");

    const error =
        document.getElementById("errorMessage");

    const lockScreen =
        document.getElementById("lockScreen");

    const website =
        document.getElementById("website");


    if (input.value.trim() === correctPassword) {

        lockScreen.classList.add("hidden");

        website.classList.remove("hidden");

        window.scrollTo(0, 0);

        startParticles();

        observeAnimations();

    } else {

        error.textContent =
            "Hmm... think about the day we became “us.” ❤️";

        input.value = "";

        input.style.animation =
            "shake .3s";

        setTimeout(() => {

            input.style.animation = "";

        }, 300);

    }

}


/* =========================================================
   ENTER KEY FOR PASSWORD
========================================================= */

document
    .getElementById("password")
    .addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                unlock();

            }

        }
    );


/* =========================================================
   SCROLL BUTTON
========================================================= */

function scrollToSection(id) {

    const section =
        document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================================
   SCROLL ANIMATIONS
========================================================= */

function observeAnimations() {

    const elements =
        document.querySelectorAll(".fade-up");


    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    elements.forEach(element => {

        observer.observe(element);

    });

}


/* =========================================================
   FLOATING HEARTS
========================================================= */

function startParticles() {

    const container =
        document.getElementById("particles");


    const symbols = [
        "❤️",
        "💜",
        "🌸",
        "✦"
    ];


    setInterval(() => {

        const particle =
            document.createElement("span");


        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];


        particle.style.position =
            "fixed";

        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.bottom =
            "-30px";

        particle.style.fontSize =
            (Math.random() * 12 + 10) + "px";

        particle.style.opacity =
            Math.random() * .5 + .2;

        particle.style.transition =
            "transform 7s linear, opacity 7s linear";


        container.appendChild(particle);


        setTimeout(() => {

            particle.style.transform =
                `translateY(-110vh) translateX(${Math.random() * 100 - 50}px)`;

            particle.style.opacity = "0";

        }, 100);


        setTimeout(() => {

            particle.remove();

        }, 7200);


    }, 600);

}


/* =========================================================
   BUTTON HEART EFFECT
========================================================= */

document.addEventListener(
    "click",
    function(event) {

        if (
            event.target.tagName === "BUTTON"
        ) {

            const heart =
                document.createElement("div");


            heart.textContent =
                "❤️";


            heart.style.position =
                "fixed";

            heart.style.left =
                event.clientX + "px";

            heart.style.top =
                event.clientY + "px";

            heart.style.pointerEvents =
                "none";

            heart.style.fontSize =
                "20px";

            heart.style.zIndex =
                "9999";

            heart.style.transition =
                "1s ease";


            document.body.appendChild(heart);


            setTimeout(() => {

                heart.style.transform =
                    "translateY(-80px) scale(1.5)";

                heart.style.opacity =
                    "0";

            }, 50);


            setTimeout(() => {

                heart.remove();

            }, 1100);

        }

    }
);