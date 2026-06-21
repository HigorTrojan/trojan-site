// ==========================
// COUNTER TROJAN
// ==========================

const counters = document.querySelectorAll("[data-target]");

let counterStarted = false;

function animateCounters() {

    counters.forEach(counter => {

        const targetText =
            counter.getAttribute("data-target");

        const target =
            parseInt(targetText.replace(/\D/g, ""));

        let current = 0;

        const increment =
            Math.max(1, target / 120);

        function updateCounter() {

            current += increment;

            if (current < target) {

                if (target >= 1000) {

                    counter.textContent =
                        Math.floor(current).toLocaleString("pt-BR");

                } else {

                    counter.textContent =
                        Math.floor(current);

                }

                requestAnimationFrame(updateCounter);

            } else {

                if (target >= 1000) {

                    if (target === 20000) {

                        counter.textContent = "20K+";

                    } else {

                        counter.textContent =
                            target.toLocaleString("pt-BR") + "+";

                    }

                } else {

                    counter.textContent =
                        target + "+";

                }

            }

        }

        updateCounter();

    });

}

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (
                entry.isIntersecting &&
                !counterStarted
            ) {

                counterStarted = true;

                animateCounters();

            }

        });

    },

    {
        threshold: 0.3
    }

);

const numbersSection =
    document.querySelector(".numbers");

if (numbersSection) {

    observer.observe(numbersSection);

}
