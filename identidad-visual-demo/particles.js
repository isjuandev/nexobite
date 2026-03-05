document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("particle-canvas");
    const ctx = canvas.getContext("2d");

    let particles = [];
    let mouse = { x: -1000, y: -1000 };

    // Configuración
    const particleCount = 70;
    const connectionDistance = 150;
    const mouseInfluence = 200;
    const colors = ["59, 130, 246", "251, 146, 60"]; // Azul y Naranja RGB

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resize);
    resize();

    window.addEventListener("mousemove", (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    window.addEventListener("mouseleave", () => {
        mouse.x = -1000;
        mouse.y = -1000;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 0.5;
            this.baseOpacity = Math.random() * 0.3 + 0.15;
            this.opacity = this.baseOpacity;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.pulsePhase = Math.random() * Math.PI * 2;
        }

        update(time) {
            this.x += this.vx;
            this.y += this.vy;

            // Mouse repel
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 150 && dist > 0) {
                const force = (150 - dist) / 150;
                this.x -= (dx / dist) * force * 1.5;
                this.y -= (dy / dist) * force * 1.5;
            }

            // Screen wrap
            if (this.x < -10) this.x = canvas.width + 10;
            if (this.x > canvas.width + 10) this.x = -10;
            if (this.y < -10) this.y = canvas.height + 10;
            if (this.y > canvas.height + 10) this.y = -10;

            // Pulse opacity
            const pulse = Math.sin(time * 0.002 + this.pulsePhase) * 0.15 + 0.85;
            this.opacity = this.baseOpacity * pulse;
        }

        draw() {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            let currentSize = this.size;
            let currentOpacity = this.opacity;

            if (dist < mouseInfluence) {
                const influence = 1 - (dist / mouseInfluence);
                currentSize *= (1 + influence * 0.8);
                currentOpacity *= (1 + influence * 0.6);
            }

            ctx.beginPath();
            ctx.arc(this.x, this.y, currentSize, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.color}, ${currentOpacity})`;
            ctx.fill();
        }
    }

    function init() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    let time = 0;
    function animate() {
        time++;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update
        particles.forEach(p => p.update(time));

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            const p1 = particles[i];

            const dxMouse = mouse.x - p1.x;
            const dyMouse = mouse.y - p1.y;
            const distToMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < connectionDistance) {
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);

                    let lineOpacity = 0.15 * (1 - dist / connectionDistance);

                    if (distToMouse < mouseInfluence) {
                        lineOpacity *= 1 + (1 - distToMouse / mouseInfluence) * 2;
                    }

                    lineOpacity = Math.min(lineOpacity, 0.4);

                    ctx.strokeStyle = `rgba(${p1.color}, ${lineOpacity})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }

        // Draw particles
        particles.forEach(p => p.draw());

        requestAnimationFrame(animate);
    }

    init();
    animate();
});
