"use client";

import { useEffect, useRef } from "react";
import "./guaca-deck.css";

/** Frases que se escriben en la búsqueda de la diapositiva "El problema". */
const SEARCH_QUERIES = ["Moteles en Armenia", "Moteles temáticos en el Quindío", "Motel con jacuzzi cerca"];

/** Inversión inicial en COP: la calculadora de retorno parte de este valor. */
const INVESTMENT = 990000;

const HEART_PATH =
  "M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.6 1.2 4.3 2.4.7-1.2 2.2-2.4 4.3-2.4 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z";

interface Particle {
  x: number;
  y: number;
  r: number;
  vy: number;
  vx: number;
  a: number;
  t: number;
}

const fmt = (v: number) => `$${Math.round(v).toLocaleString("es-CO")}`;
const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Presentación de la propuesta. El marcado (`deck.html`) y los estilos (`guaca-deck.css`,
 * aislados bajo `.gdeck`) vienen del diseño original; este componente le da el comportamiento.
 */
export function GuacaDeck({ html }: { html: string }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const $ = <T extends HTMLElement>(id: string) => root.querySelector<T>(`#${id}`)!;
    const slides = [...root.querySelectorAll<HTMLElement>(".slide")];
    const N = slides.length;
    const dotsEl = $("dots");
    const counter = $("counter");
    const progress = $("progress");
    const glow = $("glow");
    const sweep = $("sweep");
    const prevBtn = $<HTMLButtonElement>("prev");
    const nextBtn = $<HTMLButtonElement>("next");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    let cur = -1;
    let lock = false;
    const timers = new Set<ReturnType<typeof setTimeout>>();
    const later = (fn: () => void, ms: number) => {
      const t = setTimeout(() => {
        timers.delete(t);
        fn();
      }, ms);
      timers.add(t);
      return t;
    };

    // Atajo [data-i] para el índice de aparición escalonada
    root.querySelectorAll<HTMLElement>("[data-i]").forEach((el) => el.style.setProperty("--i", el.dataset.i ?? "0"));

    slides.forEach((_, i) => {
      const b = document.createElement("button");
      b.className = "dot";
      b.setAttribute("aria-label", `Ir a la página ${i + 1}`);
      b.onclick = () => go(i);
      dotsEl.appendChild(b);
    });
    const dots = [...dotsEl.children];

    // ---------- Efectos por diapositiva ----------
    let typingTimer: ReturnType<typeof setInterval> | undefined;
    let countRaf = 0;

    function typeLoop() {
      const el = $("typing");
      let q = 0;
      let i = 0;
      let del = false;
      clearInterval(typingTimer);
      typingTimer = setInterval(() => {
        const s = SEARCH_QUERIES[q];
        if (!del) {
          i++;
          if (i > s.length + 14) del = true;
        } else {
          i -= 2;
          if (i <= 0) {
            del = false;
            i = 0;
            q = (q + 1) % SEARCH_QUERIES.length;
          }
        }
        el.textContent = s.slice(0, Math.min(i, s.length));
      }, 70);
    }

    function countUp(el: HTMLElement, to: number, ms = 1400, delay = 500) {
      if (reduce) {
        el.textContent = fmt(to);
        return;
      }
      el.textContent = fmt(0);
      later(() => {
        const t0 = performance.now();
        const step = (t: number) => {
          const p = Math.min(1, (t - t0) / ms);
          el.textContent = fmt(to * (1 - Math.pow(1 - p, 4)));
          if (p < 1) countRaf = requestAnimationFrame(step);
        };
        countRaf = requestAnimationFrame(step);
      }, delay);
    }

    // Calculadora de retorno
    const rate = $<HTMLInputElement>("rate");
    const rateOut = $("rateOut");
    const need = $("need");
    const couples = $("couples");
    for (let k = 0; k < 20; k++) {
      const c = document.createElement("div");
      c.className = "couple";
      c.style.setProperty("--k", String(k));
      c.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="${HEART_PATH}"/></svg>`;
      couples.appendChild(c);
    }
    function updateRoi(animateCells = true) {
      const v = +rate.value;
      const n = Math.ceil(INVESTMENT / v);
      rateOut.textContent = fmt(v);
      need.textContent = String(n);
      rate.style.setProperty("--p", `${((v - +rate.min) / (+rate.max - +rate.min)) * 100}%`);
      [...couples.children].forEach((c, k) => {
        c.classList.toggle("pay", animateCells && k < n);
        c.classList.toggle("profit", animateCells && k >= n);
      });
    }
    const onRate = () => updateRoi();
    rate.addEventListener("input", onRate);
    updateRoi(false);

    function onEnter(n: number) {
      const s = slides[n];
      const label = s.getAttribute("aria-label");
      clearInterval(typingTimer);
      if (label === "El problema") {
        $("typing").textContent = "";
        later(typeLoop, 900);
      }
      if (label === "Retorno de inversión") {
        updateRoi(false);
        later(() => updateRoi(), 900);
      }
      s.querySelectorAll<HTMLElement>("[data-count]").forEach((el, i) =>
        countUp(el, +(el.dataset.count ?? 0), 1500, 600 + i * 150)
      );
    }

    // ---------- Navegación ----------
    function go(target: number, instant = false) {
      const n = Math.max(0, Math.min(N - 1, target));
      if (n === cur || (lock && !instant)) return;
      const dir = n > cur ? 1 : -1;
      const prev = slides[cur];
      lock = true;
      later(() => (lock = false), reduce ? 50 : 850);

      if (prev) {
        prev.classList.remove("on", "in-from-down", "in-from-up");
        prev.classList.add(dir > 0 ? "out-up" : "out-down");
        later(() => prev.classList.remove("out-up", "out-down"), 1000);
      }
      const next = slides[n];
      next.scrollTop = 0;
      next.classList.remove("out-up", "out-down", "on");
      next.classList.add(dir > 0 ? "in-from-down" : "in-from-up");
      void next.offsetWidth;
      next.classList.add("on");
      next.classList.remove("in-from-down", "in-from-up");

      if (cur !== -1 && !reduce) {
        sweep.style.setProperty("--sy", dir > 0 ? "-45vh" : "45vh");
        sweep.classList.remove("go");
        void sweep.offsetWidth;
        sweep.classList.add("go");
      }
      cur = n;
      const [gx, gy] = (next.dataset.glow || "50,50").split(",");
      glow.style.setProperty("--gx", `${gx}%`);
      glow.style.setProperty("--gy", `${gy}%`);
      dots.forEach((d, i) => d.classList.toggle("on", i === n));
      counter.innerHTML = `<b>${pad(n + 1)}</b> / ${pad(N)}`;
      progress.style.width = `${((n + 1) / N) * 100}%`;
      prevBtn.disabled = n === 0;
      nextBtn.disabled = n === N - 1;
      history.replaceState(null, "", `#${n + 1}`);
      onEnter(n);
    }

    prevBtn.onclick = () => go(cur - 1);
    nextBtn.onclick = () => go(cur + 1);

    // Primero se desplaza dentro de una diapositiva alta, luego cambia de página
    const canScroll = (d: number) => {
      const s = slides[cur];
      return d > 0 ? s.scrollTop + s.clientHeight < s.scrollHeight - 4 : s.scrollTop > 4;
    };

    const toggleFs = () => {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen?.().catch(() => {});
      else document.exitFullscreen?.();
    };
    $("fs").onclick = toggleFs;

    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).matches("input")) return;
      if (["ArrowRight", "PageDown", " "].includes(e.key) || (e.key === "ArrowDown" && !canScroll(1))) {
        e.preventDefault();
        go(cur + 1);
      } else if (["ArrowLeft", "PageUp"].includes(e.key) || (e.key === "ArrowUp" && !canScroll(-1))) {
        e.preventDefault();
        go(cur - 1);
      } else if (e.key === "Home") go(0);
      else if (e.key === "End") go(N - 1);
      else if (e.key.toLowerCase() === "f") toggleFs();
    };

    let wheelAcc = 0;
    let wheelT: ReturnType<typeof setTimeout> | undefined;
    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return;
      const d = Math.sign(e.deltaY);
      if (!d || canScroll(d)) return;
      wheelAcc += e.deltaY;
      clearTimeout(wheelT);
      wheelT = setTimeout(() => (wheelAcc = 0), 200);
      if (Math.abs(wheelAcc) > 60 && !lock) {
        go(cur + d);
        wheelAcc = 0;
      }
    };

    let tx = 0;
    let ty = 0;
    const onTouchStart = (e: TouchEvent) => {
      tx = e.touches[0].clientX;
      ty = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if ((e.target as HTMLElement).closest("input")) return;
      const dx = e.changedTouches[0].clientX - tx;
      const dy = e.changedTouches[0].clientY - ty;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) go(cur + (dx < 0 ? 1 : -1));
    };

    const onHash = () => {
      const h = parseInt(location.hash.slice(1), 10);
      if (h) go(h - 1);
    };

    // El foco de las tarjetas sigue al puntero
    const spotlight = (e: PointerEvent) => {
      const c = e.currentTarget as HTMLElement;
      const r = c.getBoundingClientRect();
      c.style.setProperty("--mx", `${e.clientX - r.left}px`);
      c.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    const cards = [...root.querySelectorAll<HTMLElement>(".card")];
    cards.forEach((c) => c.addEventListener("pointermove", spotlight));

    // ---------- Partículas ambientales ----------
    const cv = $<HTMLCanvasElement>("fx");
    const ctx = cv.getContext("2d")!;
    let W = 0;
    let H = 0;
    let parts: Particle[] = [];
    let drawRaf = 0;
    const size = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      W = cv.width = innerWidth * dpr;
      H = cv.height = innerHeight * dpr;
      cv.style.width = `${innerWidth}px`;
      cv.style.height = `${innerHeight}px`;
      const count = innerWidth < 600 ? 22 : 46;
      parts = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: (Math.random() * 1.8 + 0.4) * dpr,
        vy: -(Math.random() * 0.25 + 0.05) * dpr,
        vx: (Math.random() - 0.5) * 0.15 * dpr,
        a: Math.random() * 0.5 + 0.15,
        t: Math.random() * 6.28,
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of parts) {
        p.x += p.vx;
        p.y += p.vy;
        p.t += 0.02;
        if (p.y < -10) {
          p.y = H + 10;
          p.x = Math.random() * W;
        }
        const a = p.a * (0.6 + 0.4 * Math.sin(p.t));
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        g.addColorStop(0, `rgba(92,206,180,${a})`);
        g.addColorStop(1, "rgba(28,138,118,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 4, 0, 6.29);
        ctx.fill();
      }
      drawRaf = requestAnimationFrame(draw);
    };
    size();
    if (!reduce) draw();

    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("hashchange", onHash);
    window.addEventListener("resize", size);

    const start = parseInt(location.hash.slice(1), 10);
    go(Number.isFinite(start) ? start - 1 : 0, true);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("resize", size);
      rate.removeEventListener("input", onRate);
      cards.forEach((c) => c.removeEventListener("pointermove", spotlight));
      clearInterval(typingTimer);
      clearTimeout(wheelT);
      cancelAnimationFrame(countRaf);
      cancelAnimationFrame(drawRaf);
      timers.forEach(clearTimeout);
      dotsEl.replaceChildren();
      couples.replaceChildren();
    };
  }, []);

  return <div ref={rootRef} className="gdeck" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />;
}
