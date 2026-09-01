/* =========================================================
   FOR MAMA — 6 MONTHS
   JAVASCRIPT
========================================================= */


/* =========================================================
   PASSWORD
========================================================= */

const correctPassword = "12032026";

const lockScreen =
    document.getElementById("lockScreen");

const website =
    document.getElementById("website");

const passwordInput =
    document.getElementById("password");

const unlockButton =
    document.getElementById("unlockButton");

const errorMessage =
    document.getElementById("errorMessage");


/* =========================================================
   UNLOCK FUNCTION
========================================================= */

function unlockWebsite() {

    const enteredPassword =
        passwordInput.value.trim();


    /* WRONG PASSWORD */

    if (enteredPassword !== correctPassword) {

        errorMessage.textContent =
            "Hmm... think about the day we became “us.” ❤️";

        passwordInput.value = "";

        passwordInput.style.animation =
            "shake .3s";

        setTimeout(() => {

            passwordInput.style.animation = "";

        }, 300);

        return;
    }


    /* =====================================================
       CORRECT PASSWORD
       SHOW WEBSITE IMMEDIATELY
    ===================================================== */

    errorMessage.textContent = "";

    lockScreen.classList.add("hidden");

    website.classList.remove("hidden");

    document.body.style.overflowX = "hidden";

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
    });


    /* Start effects */

    startParticles();

    observeAnimations();
}


/* =========================================================
   UNLOCK BUTTON
========================================================= */

unlockButton.addEventListener(
    "click",
    unlockWebsite
);


/* =========================================================
   ENTER KEY
========================================================= */

passwordInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            unlockWebsite();
        }

    }
);


/* =========================================================
   ENTER OUR STORY BUTTON
========================================================= */

const enterStoryButton =
    document.getElementById(
        "enterStoryButton"
    );

const heroSection =
    document.getElementById("hero");


enterStoryButton.addEventListener(
    "click",
    function () {

        heroSection.scrollIntoView({
            behavior: "smooth"
        });

    }
);


/* =========================================================
   SCROLL ANIMATIONS
========================================================= */

function observeAnimations() {

    const elements =
        document.querySelectorAll(
            ".fade-up"
        );


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "show"
                            );

                            observer.unobserve(
                                entry.target
                            );
                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    elements.forEach(
        function (element) {

            observer.observe(element);

        }
    );
}


/* =========================================================
   FLOATING HEARTS
========================================================= */

let particlesStarted = false;


function startParticles() {

    /* Prevent multiple particle timers */

    if (particlesStarted) {
        return;
    }

    particlesStarted = true;


    const container =
        document.getElementById(
            "particles"
        );


    const symbols = [
        "❤️",
        "💜",
        "🌸",
        "✦"
    ];


    setInterval(
        function () {

            const particle =
                document.createElement(
                    "span"
                );


            particle.textContent =
                symbols[
                    Math.floor(
                        Math.random()
                        *
                        symbols.length
                    )
                ];


            particle.style.position =
                "fixed";

            particle.style.left =
                Math.random() * 100 + "vw";

            particle.style.bottom =
                "-30px";

            particle.style.fontSize =
                (
                    Math.random() * 12
                    +
                    10
                )
                +
                "px";

            particle.style.opacity =
                Math.random() * .5 + .2;

            particle.style.transition =
                "transform 7s linear, opacity 7s linear";


            container.appendChild(
                particle
            );


            setTimeout(
                function () {

                    particle.style.transform =
                        `translateY(-110vh) translateX(${Math.random() * 100 - 50}px)`;

                    particle.style.opacity =
                        "0";

                },
                100
            );


            setTimeout(
                function () {

                    particle.remove();

                },
                7200
            );


        },
        700
    );
}


/* =========================================================
   BUTTON HEART EFFECT
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        if (
            event.target.tagName !==
            "BUTTON"
        ) {
            return;
        }


        const heart =
            document.createElement(
                "div"
            );


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


        document.body.appendChild(
            heart
        );


        setTimeout(
            function () {

                heart.style.transform =
                    "translateY(-80px) scale(1.5)";

                heart.style.opacity =
                    "0";

            },
            50
        );


        setTimeout(
            function () {

                heart.remove();

            },
            1100
        );

    }
);