import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealKind = "up" | "scale" | "left" | "right";

/** Aparición escalonada al entrar a la diapositiva (`i` = orden). Estilos en `.deck-slide [data-a]`. */
export function Reveal({
  i = 0,
  kind = "up",
  className,
  children,
}: {
  i?: number;
  kind?: RevealKind;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      data-a={kind === "up" ? "" : kind}
      style={{ "--i": i } as CSSProperties}
      className={className}
    >
      {children}
    </div>
  );
}

/** Una línea de titular que sube desde una máscara. */
export function Line({
  i = 0,
  className,
  children,
}: {
  i?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span className={cn("deck-line", className)} style={{ "--i": i } as CSSProperties}>
      <span>{children}</span>
    </span>
  );
}
