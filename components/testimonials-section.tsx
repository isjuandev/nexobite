import { Container } from "@/components/container";
import { AnimatedSection } from "@/components/animated-section";

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
  metric?: string;
  metricLabel?: string;
}

/**
 * TODO (Usuario):
 * Añade testimonios y casos de éxito reales de clientes aquí.
 * Regla estricta: Este componente devuelve `null` automáticamente mientras el array esté vacío
 * para no renderizar contenido ficticio o de relleno en el sitio.
 */
export const testimonials: Testimonial[] = [];

export function TestimonialsSection() {
  // Salvaguarda: No renderiza nada si no hay testimonios reales validados
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonios" className="border-b border-line bg-paper py-20 sm:py-28">
      <Container size="lg">
        <AnimatedSection>
          <div className="mb-3 text-center">
            <span className="eyebrow">CASOS DE ÉXITO Y RESULTADOS</span>
          </div>
          <h2 className="mb-4 text-center text-balance text-3xl font-semibold text-ink sm:text-4xl">
            Lo que dicen las empresas que operan con{" "}
            <span className="text-signal">NexoBite</span>
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-pretty text-base text-ink-soft">
            Resultados medibles en tiempos de respuesta, conversión y retención comercial.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-md border border-line bg-card p-6 flex flex-col justify-between"
            >
              <p className="text-sm text-ink-soft leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                {t.metric && (
                  <div className="mb-3 font-mono text-signal text-lg font-semibold">
                    {t.metric} <span className="text-xs text-ink-mute font-normal">{t.metricLabel}</span>
                  </div>
                )}
                <p className="text-sm font-semibold text-ink">{t.author}</p>
                <p className="text-xs text-ink-mute">
                  {t.role} · {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
