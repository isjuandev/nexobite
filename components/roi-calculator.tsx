"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const formatCop = (value: number) => `$${value.toLocaleString("es-CO")}`;

const TOTAL_SLOTS = 24;

interface RoiCalculatorProps {
  /** Inversión inicial en COP. */
  investment: number;
  min: number;
  max: number;
  step: number;
  initialRate: number;
}

/** Cuántas ventas hacen falta para recuperar una inversión, según la tarifa promedio. */
export function RoiCalculator({ investment, min, max, step, initialRate }: RoiCalculatorProps) {
  const [rate, setRate] = useState(initialRate);
  const needed = Math.ceil(investment / rate);
  const recovered = Math.min(needed, TOTAL_SLOTS);

  return (
    <div className="rounded-md border border-line bg-card p-6 sm:p-8">
      <div className="mb-3 flex items-baseline justify-between gap-4">
        <label htmlFor="rate" className="font-mono text-label text-ink-mute">
          TARIFA PROMEDIO POR RATO
        </label>
        <output htmlFor="rate" className="tnum font-display text-xl font-extrabold text-ink">
          {formatCop(rate)}
        </output>
      </div>
      <input
        id="rate"
        type="range"
        min={min}
        max={max}
        step={step}
        value={rate}
        onChange={(e) => setRate(Number(e.target.value))}
        className="w-full accent-[#1C8A76]"
      />
      <div className="tnum mt-1 flex justify-between font-mono text-micro text-ink-mute">
        <span>{formatCop(min)}</span>
        <span>{formatCop(max)}</span>
      </div>

      <div className="mt-8 flex items-center gap-5 border-t border-line pt-6">
        <span className="tnum font-display text-6xl font-extrabold leading-none text-copper">
          {needed}
        </span>
        <p className="text-sm text-ink-soft">
          parejas nuevas recuperan los{" "}
          <strong className="tnum font-semibold text-ink">{formatCop(investment)}</strong> de
          inversión inicial.
        </p>
      </div>

      <div
        className="mt-6 grid grid-cols-12 gap-1.5"
        role="img"
        aria-label={`${needed} parejas recuperan la inversión; el resto es ganancia neta`}
      >
        {Array.from({ length: TOTAL_SLOTS }, (_, i) => (
          <span
            key={i}
            className={cn("h-3 rounded-sm", i < recovered ? "bg-copper" : "bg-signal")}
          />
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-mono text-label text-ink-mute">
        <span className="inline-flex items-center gap-1.5">
          <i className="h-2 w-2 rounded-sm bg-copper" /> Recuperan la inversión
        </span>
        <span className="inline-flex items-center gap-1.5">
          <i className="h-2 w-2 rounded-sm bg-signal" /> Ganancia neta
        </span>
      </div>
    </div>
  );
}
