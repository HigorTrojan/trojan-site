const canvas = document.createElement("canvas");

canvas.id = "particles-canvas";

document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

const particles = [];

const particleCount = 120;

class Particle {

    constructor() {

        this.reset();

    }

    reset() {

        this.x = Math.random() * canvas.width;

        this.y = Math.random() * canvas.height;

        this.size = Math.random() * 3 + 1;

        this.speedY = Math.random() * 1.2 + 0.3;

        this.speedX = (Math.random() - 0.5) * 0.5;

        this.opacity = Math.random() * 0.6 + 0.2;

    }

    update() {

        this.y -= this.speedY;

        this.x += this.speedX;

        if (this.y < -20) {

            this.y = canvas.height + 20;
            this.x = Math.random() * canvas.width;

        }

    }

    draw() {

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            `rgba(255,0,0,${this.opacity})`;

        ctx.shadowBlur = 20;
        ctx.shadowColor = "red";

        ctx.fill();

    }

}

for (let i = 0; i < particleCount; i++) {

    particles.push(new Particle());

}

function connectParticles() {

    for (let a = 0; a < particles.length; a++) {

        for (let b = a + 1; b < particles.length; b++) {

            const dx =
                particles[a].x - particles[b].x;

            const dy =
                particles[a].y - particles[b].y;

            const distance =
                Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {

                ctx.beginPath();

                ctx.moveTo(
                    particles[a].x,
                    particles[a].y
                );

                ctx.lineTo(
                    particles[b].x,
                    particles[b].y
                );

                ctx.strokeStyle =
                    `rgba(255,0,0,${
                        0.15 - distance / 1000
                    })`;

                ctx.lineWidth = 1;

                ctx.stroke();

            }

        }

    }

}

function animate() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach((particle) => {

        particle.update();

        particle.draw();

    });

    connectParticles();

    requestAnimationFrame(animate);

}

animate();
