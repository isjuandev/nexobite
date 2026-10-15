"use client";

import { useEffect, useState } from "react";
import { useSlideActive } from "@/components/proposal-deck";

const formatCop = (value: number) => `$${Math.round(value).toLocaleString("es-CO")}`;

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Escribe y borra frases en bucle, como una barra de búsqueda. Texto fijo si hay movimiento reducido. */
export function TypingText({ phrases }: { phrases: string[] }) {
  const active = useSlideActive();
  const [text, setText] = useState(phrases[0]);

  useEffect(() => {
    if (!active || prefersReducedMotion()) return;
    let q = 0;
    let i = 0;
    let deleting = false;
    let timer: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      setText("");
      timer = setInterval(() => {
        const s = phrases[q];
        if (!deleting) {
          i++;
          if (i > s.length + 14) deleting = true;
        } else {
          i -= 2;
          if (i <= 0) {
            deleting = false;
            i = 0;
            q = (q + 1) % phrases.length;
          }
        }
        setText(s.slice(0, Math.min(i, s.length)));
      }, 70);
    }, 900);
    return () => {
      clearTimeout(start);
      clearInterval(timer);
      setText(phrases[0]);
    };
  }, [active, phrases]);

  return <>{text}</>;
}

/** Cuenta de $0 hasta el valor cada vez que la diapositiva entra. */
export function CountUp({ to, delay = 600 }: { to: number; delay?: number }) {
  const active = useSlideActive();
  const [value, setValue] = useState(to);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!active || prefersReducedMotion()) return;
    let raf = 0;
    const start = setTimeout(() => {
      setStarted(true);
      const t0 = performance.now();
      const step = (t: number) => {
        const p = Math.min(1, (t - t0) / 1500);
        setValue(to * (1 - Math.pow(1 - p, 4)));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, delay);
    return () => {
      clearTimeout(start);
      cancelAnimationFrame(raf);
      setStarted(false);
    };
  }, [active, to, delay]);

  const shown = !active || prefersReducedMotion() ? to : started ? value : 0;
  return <span className="tnum">{formatCop(shown)}</span>;
}
