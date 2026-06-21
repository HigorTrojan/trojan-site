/* ===================================
   TROJAN CYBER EXPERIENCE
=================================== */

/* LOADING SCREEN */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 1000);

        }, 2000);

    }

});

/* SCROLL REVEAL */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(
".about, .genres, .agenda, .gallery, .contact, .social"
).forEach(el => {

    observer.observe(el);

});

/* GLITCH TROJAN */

const title = document.querySelector(".hero h1");

if(title){

    setInterval(() => {

        title.style.textShadow = `
        0 0 10px red,
        0 0 20px red,
        0 0 40px red,
        3px 0 red,
        -3px 0 #ff4444
        `;

        setTimeout(() => {

            title.style.textShadow = `
            0 0 10px red,
            0 0 20px red,
            0 0 40px red
            `;

        }, 150);

    }, 5000);

}

/* PARTICULAS */

const particlesContainer =
document.getElementById("particles");

if(particlesContainer){

    for(let i = 0; i < 50; i++){

        const particle =
        document.createElement("span");

        particle.classList.add("particle");

        particle.style.left =
        Math.random() * 100 + "%";

        particle.style.animationDelay =
        Math.random() * 8 + "s";

        particle.style.animationDuration =
        (5 + Math.random() * 10) + "s";

        particlesContainer.appendChild(
        particle
        );

    }

}

/* EFEITO NOS CARDS */

const cards =
document.querySelectorAll(
".genre-card, .event, .gallery-item"
);

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const x =
        e.offsetX;

        const y =
        e.offsetY;

        card.style.background =
        `radial-gradient(
        circle at ${x}px ${y}px,
        rgba(255,0,0,.15),
        #111
        )`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
        "#111";

    });

});

/* BOTÃO AGENDAR SHOW */

const form =
document.querySelector("form");

if(form){

    form.addEventListener("submit", e => {

        e.preventDefault();

        alert(
        "Solicitação enviada com sucesso! Entraremos em contato em breve."
        );

    });

}

/* CONTADOR CYBER */

let counter = 0;

const cyberCounter =
document.getElementById("cyberCounter");

if(cyberCounter){

    const interval =
    setInterval(() => {

        counter += 7;

        cyberCounter.innerText =
        counter;

        if(counter >= 999){

            clearInterval(interval);

        }

    }, 10);

}

/* EFEITO PARALLAX */

window.addEventListener("scroll", () => {

    const hero =
    document.querySelector(".hero-character img");

    if(hero){

        const value =
        window.scrollY * 0.15;

        hero.style.transform =
        `translateY(${value}px)`;

    }

});

/* TEXTO DIGITANDO */

const typingElement =
document.querySelector(".typing");

if(typingElement){

    const text =
    "WELCOME TO TROJAN EXPERIENCE";

    let index = 0;

    function typeText(){

        if(index < text.length){

            typingElement.innerHTML +=
            text.charAt(index);

            index++;

            setTimeout(typeText, 80);
        }

    }

    typeText();

}

/* FLASH VERMELHO */

setInterval(() => {

    document.body.classList.add("flash");

    setTimeout(() => {

        document.body.classList.remove("flash");

    }, 120);

}, 12000);

/* ANIMAÇÃO DOS BOTÕES */

const buttons =
document.querySelectorAll(
".btn-red, .btn-dark"
);

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform =
        "translateY(-5px) scale(1.03)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform =
        "translateY(0) scale(1)";

    });

});
