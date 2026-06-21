// ==========================
// TROJAN GALLERY SLIDER
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const gallery =
        document.querySelector(".gallery-slider");

    if (!gallery) return;

    const images =
        gallery.querySelectorAll("img");

    if (images.length <= 1) return;

    let currentIndex = 0;

    gallery.style.display = "flex";
    gallery.style.transition = "transform .8s ease";
    gallery.style.willChange = "transform";

    function updateSlider() {

        const imageWidth =
            images[0].offsetWidth + 20;

        gallery.style.transform =
            `translateX(-${currentIndex * imageWidth}px)`;

    }

    function nextSlide() {

        currentIndex++;

        if (currentIndex >= images.length) {

            currentIndex = 0;

        }

        updateSlider();

    }

    let autoPlay =
        setInterval(nextSlide, 3500);

    gallery.addEventListener("mouseenter", () => {

        clearInterval(autoPlay);

    });

    gallery.addEventListener("mouseleave", () => {

        autoPlay =
            setInterval(nextSlide, 3500);

    });

    window.addEventListener(
        "resize",
        updateSlider
    );

    // ==========================
    // SWIPE MOBILE
    // ==========================

    let startX = 0;

    gallery.addEventListener("touchstart", (e) => {

        startX =
            e.touches[0].clientX;

    });

    gallery.addEventListener("touchend", (e) => {

        const endX =
            e.changedTouches[0].clientX;

        const diff =
            startX - endX;

        if (diff > 50) {

            currentIndex++;

            if (
                currentIndex >= images.length
            ) {

                currentIndex = 0;

            }

            updateSlider();

        }

        if (diff < -50) {

            currentIndex--;

            if (
                currentIndex < 0
            ) {

                currentIndex =
                    images.length - 1;

            }

            updateSlider();

        }

    });

    // ==========================
    // LIGHTBOX
    // ==========================

    const overlay =
        document.createElement("div");

    overlay.className =
        "gallery-lightbox";

    overlay.innerHTML =
        '<img>';

    document.body.appendChild(overlay);

    const lightboxImg =
        overlay.querySelector("img");

    images.forEach(img => {

        img.addEventListener("click", () => {

            lightboxImg.src = img.src;

            overlay.classList.add("active");

        });

    });

    overlay.addEventListener("click", () => {

        overlay.classList.remove("active");

    });

});
