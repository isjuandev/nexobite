"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { FaChevronLeft, FaChevronRight, FaExpand } from "react-icons/fa";
import { cn } from "@/lib/utils";

export interface DeckSlide {
  label: string;
  content: ReactNode;
}

const SlideActiveContext = createContext(false);

/** `true` mientras la diapositiva donde vive el componente está a la vista. */
export const useSlideActive = () => useContext(SlideActiveContext);

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Presentación a pantalla completa: una diapositiva por pantalla, con flechas, puntos,
 * teclado, rueda, deslizamiento táctil y enlace directo por `#n`.
 */
export function ProposalDeck({ slides, brand }: { slides: DeckSlide[]; brand: ReactNode }) {
  const total = slides.length;
  const [cur, setCur] = useState(-1);
  const [sweep, setSweep] = useState({ key: 0, dir: 1 });
  const curRef = useRef(-1);
  const lockRef = useRef(false);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);

  const go = useCallback(
    (target: number, instant = false) => {
      const n = Math.max(0, Math.min(total - 1, target));
      const prev = curRef.current;
      if (n === prev || (lockRef.current && !instant)) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      lockRef.current = true;
      setTimeout(() => (lockRef.current = false), reduce ? 50 : 850);
      slideRefs.current[n]?.scrollTo({ top: 0 });
      if (prev !== -1 && !reduce) setSweep((s) => ({ key: s.key + 1, dir: n > prev ? 1 : -1 }));
      curRef.current = n;
      setCur(n);
      history.replaceState(null, "", `#${n + 1}`);
    },
    [total]
  );

  const canScroll = useCallback((d: number) => {
    const s = slideRefs.current[curRef.current];
    if (!s) return false;
    return d > 0 ? s.scrollTop + s.clientHeight < s.scrollHeight - 4 : s.scrollTop > 4;
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.().catch(() => {});
    else document.exitFullscreen?.();
  }, []);

  useEffect(() => {
    const fromHash = () => {
      const h = parseInt(location.hash.slice(1), 10);
      return Number.isFinite(h) ? h - 1 : 0;
    };
    go(fromHash(), true);

    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).matches("input")) return;
      const cur = curRef.current;
      if (["ArrowRight", "PageDown", " "].includes(e.key) || (e.key === "ArrowDown" && !canScroll(1))) {
        e.preventDefault();
        go(cur + 1);
      } else if (["ArrowLeft", "PageUp"].includes(e.key) || (e.key === "ArrowUp" && !canScroll(-1))) {
        e.preventDefault();
        go(cur - 1);
      } else if (e.key === "Home") go(0);
      else if (e.key === "End") go(total - 1);
      else if (e.key.toLowerCase() === "f") toggleFullscreen();
    };

    // Rueda: primero se desplaza dentro de una diapositiva alta, luego cambia de página
    let acc = 0;
    let accTimer: ReturnType<typeof setTimeout>;
    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return;
      const d = Math.sign(e.deltaY);
      if (!d || canScroll(d)) return;
      acc += e.deltaY;
      clearTimeout(accTimer);
      accTimer = setTimeout(() => (acc = 0), 200);
      if (Math.abs(acc) > 60 && !lockRef.current) {
        go(curRef.current + d);
        acc = 0;
      }
    };

    // Táctil: el deslizamiento horizontal cambia de página; el vertical desplaza el contenido
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
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) go(curRef.current + (dx < 0 ? 1 : -1));
    };
    const onHash = () => go(fromHash());

    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("hashchange", onHash);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("hashchange", onHash);
      clearTimeout(accTimer);
    };
  }, [go, canScroll, toggleFullscreen, total]);

  const arrow =
    "inline-flex h-11 items-center gap-2 rounded-sm border border-line bg-card px-4 font-mono text-label text-ink transition-colors hover:border-signal hover:text-signal disabled:pointer-events-none disabled:opacity-30";

  return (
    <div className="fixed inset-0 overflow-hidden bg-paper">
      <div
        className="absolute left-0 top-0 z-30 h-0.5 bg-signal transition-[width] duration-700 ease-out"
        style={{ width: `${((cur + 1) / total) * 100}%` }}
      />

      <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between border-b border-line bg-paper/90 px-4 py-3 backdrop-blur sm:px-8">
        {brand}
        <div className="flex items-center gap-3">
          <span className="tnum font-mono text-label text-ink-mute">
            <b className="font-semibold text-ink">{pad(Math.max(cur, 0) + 1)}</b> / {pad(total)}
          </span>
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label="Pantalla completa"
            title="Pantalla completa (F)"
            className="grid h-9 w-9 place-items-center rounded-sm border border-line text-ink-soft transition-colors hover:border-signal hover:text-signal"
          >
            <FaExpand className="h-3.5 w-3.5" />
          </button>
        </div>
      </header>

      <main className="absolute inset-0 z-10">
        {slides.map((s, i) => {
          const state = i === cur ? "on" : i < cur ? "above" : "below";
          return (
            <section
              key={s.label}
              ref={(el) => {
                slideRefs.current[i] = el;
              }}
              aria-label={s.label}
              data-state={state}
              inert={state !== "on"}
              className="deck-slide"
            >
              <SlideActiveContext.Provider value={state === "on"}>
                <div className="deck-inner">{s.content}</div>
              </SlideActiveContext.Provider>
            </section>
          );
        })}
      </main>

      {sweep.key > 0 && (
        <div
          key={sweep.key}
          className="deck-sweep"
          aria-hidden="true"
          style={{ "--sy": sweep.dir > 0 ? "-45vh" : "45vh" } as CSSProperties}
        >
          <i />
        </div>
      )}

      <nav
        aria-label="Navegación de la presentación"
        className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between gap-3 border-t border-line bg-paper/90 py-3 pb-[calc(12px+env(safe-area-inset-bottom))] pl-4 pr-20 backdrop-blur sm:pl-8 sm:pr-24"
      >
        <div className="flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.label}
              type="button"
              onClick={() => go(i)}
              aria-label={`Ir a la página ${i + 1}: ${s.label}`}
              aria-current={i === cur}
              className={cn(
                "h-2 rounded-sm transition-all duration-500",
                i === cur ? "w-7 bg-signal" : "w-2 bg-line-strong hover:bg-ink-mute"
              )}
            />
          ))}
        </div>
        <span className="hidden font-mono text-label text-ink-mute lg:inline">
          ← → o desliza para navegar
        </span>
        <div className="flex gap-2">
          <button type="button" className={arrow} onClick={() => go(cur - 1)} disabled={cur <= 0} aria-label="Anterior">
            <FaChevronLeft className="h-3 w-3" />
            <span className="hidden sm:inline">ANTERIOR</span>
          </button>
          <button
            type="button"
            className={arrow}
            onClick={() => go(cur + 1)}
            disabled={cur >= total - 1}
            aria-label="Siguiente"
          >
            <span className="hidden sm:inline">SIGUIENTE</span>
            <FaChevronRight className="h-3 w-3" />
          </button>
        </div>
      </nav>
    </div>
  );
}
