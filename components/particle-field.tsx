"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  baseOpacity: number;
  color: string;
  pulsePhase: number;
}

interface ParticleFieldProps {
  variant?: "primary" | "accent" | "subtle" | "mixed";
  density?: "low" | "medium" | "high";
  speed?: "slow" | "medium" | "fast";
}

export function ParticleField({
  variant = "primary",
  density = "medium",
  speed = "medium",
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let time = 0;

    // Configuración de colores según variante y tema
    const getColors = () => {
      if (isLight) {
        // Colores más oscuros/saturados para fondo claro
        switch (variant) {
          case "primary":
            return ["37, 99, 235", "79, 70, 229"]; // Azul vibrante + índigo
          case "accent":
            return ["234, 88, 12", "220, 38, 38"]; // Naranja intenso
          case "subtle":
            return ["148, 163, 184", "100, 116, 139"]; // Gris
          case "mixed":
            return ["37, 99, 235", "234, 88, 12", "100, 116, 139"];
        }
      }
      // Dark mode — original colors
      switch (variant) {
        case "primary":
          return ["59, 130, 246", "99, 102, 241"];
        case "accent":
          return ["251, 146, 60", "249, 115, 22"];
        case "subtle":
          return ["148, 163, 184", "100, 116, 139"];
        case "mixed":
          return ["59, 130, 246", "251, 146, 60", "148, 163, 184"];
      }
    };

    // Configuración de densidad
    const getDensity = () => {
      switch (density) {
        case "low":
          return 40;
        case "medium":
          return 60;
        case "high":
          return 100;
      }
    };

    // Configuración de velocidad
    const getSpeed = () => {
      switch (speed) {
        case "slow":
          return 0.3;
        case "medium":
          return 0.5;
        case "fast":
          return 0.8;
      }
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const createParticles = () => {
      const maxParticles = getDensity();
      const particleCount = Math.min(
        maxParticles,
        Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 12000)
      );
      particles = [];
      const speedMultiplier = getSpeed();
      const colors = getColors();

      for (let i = 0; i < particleCount; i++) {
        const baseOpacity = Math.random() * 0.3 + 0.15;
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * speedMultiplier,
          vy: (Math.random() - 0.5) * speedMultiplier,
          size: Math.random() * 2.5 + 0.5,
          opacity: baseOpacity,
          baseOpacity,
          color,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Actualizar opacidad basada en pulso
      particles.forEach((particle) => {
        const pulse =
          Math.sin(time * 0.002 + particle.pulsePhase) * 0.15 + 0.85;
        particle.opacity = particle.baseOpacity * pulse;
      });

      // Draw connecting lines primero (detrás de las partículas)
      const connectionDistance = 150;
      const mouseInfluence = 200;

      particles.forEach((particle, i) => {
        // Calcular distancia al mouse
        const dxMouse = mouseRef.current.x - particle.x;
        const dyMouse = mouseRef.current.y - particle.y;
        const distanceToMouse = Math.sqrt(
          dxMouse * dxMouse + dyMouse * dyMouse
        );

        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);

            // Intensidad de línea aumenta cerca del mouse
            let lineOpacity = 0.12 * (1 - distance / connectionDistance);

            // Aumentar opacidad si está cerca del mouse
            if (distanceToMouse < mouseInfluence) {
              lineOpacity *= 1 + (1 - distanceToMouse / mouseInfluence) * 2;
            }

            // Limitar opacidad máxima
            lineOpacity = Math.min(lineOpacity, 0.4);

            ctx.strokeStyle = `rgba(${particle.color}, ${lineOpacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Draw particles
      particles.forEach((particle) => {
        // Calcular distancia al mouse
        const dxMouse = mouseRef.current.x - particle.x;
        const dyMouse = mouseRef.current.y - particle.y;
        const distanceToMouse = Math.sqrt(
          dxMouse * dxMouse + dyMouse * dyMouse
        );

        let particleSize = particle.size;
        let particleOpacity = particle.opacity;

        // Aumentar tamaño y opacidad cerca del mouse
        if (distanceToMouse < mouseInfluence) {
          const influence = 1 - distanceToMouse / mouseInfluence;
          particleSize *= 1 + influence * 0.8;
          particleOpacity *= 1 + influence * 0.6;
        }

        // Efecto de brillo
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particleSize * 2
        );
        gradient.addColorStop(0, `rgba(${particle.color}, ${particleOpacity})`);
        gradient.addColorStop(
          0.5,
          `rgba(${particle.color}, ${particleOpacity * 0.5})`
        );
        gradient.addColorStop(1, `rgba(${particle.color}, 0)`);

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particleSize * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Núcleo sólido
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particleSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particle.color}, ${particleOpacity * 1.2})`;
        ctx.fill();
      });
    };

    const updateParticles = () => {
      particles.forEach((particle) => {
        // Aplicar velocidad base
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Aplicar influencia del mouse (repulsión suave)
        const dxMouse = mouseRef.current.x - particle.x;
        const dyMouse = mouseRef.current.y - particle.y;
        const distanceToMouse = Math.sqrt(
          dxMouse * dxMouse + dyMouse * dyMouse
        );

        if (distanceToMouse < 150 && distanceToMouse > 0) {
          const force = (150 - distanceToMouse) / 150;
          particle.x -= (dxMouse / distanceToMouse) * force * 0.5;
          particle.y -= (dyMouse / distanceToMouse) * force * 0.5;
        }

        // Wrap around edges con suavidad
        if (particle.x < -10) particle.x = canvas.offsetWidth + 10;
        if (particle.x > canvas.offsetWidth + 10) particle.x = -10;
        if (particle.y < -10) particle.y = canvas.offsetHeight + 10;
        if (particle.y > canvas.offsetHeight + 10) particle.y = -10;
      });
    };

    const animate = () => {
      time++;
      updateParticles();
      drawParticles();
      animationId = requestAnimationFrame(animate);
    };

    // Mouse movement handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    // Scroll handler

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    resize();
    createParticles();
    animate();

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [variant, density, speed, isLight]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ opacity: isLight ? 0.45 : 0.7 }}
    />
  );
}
