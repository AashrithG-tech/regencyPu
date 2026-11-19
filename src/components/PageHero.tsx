
import Reveal from "./Reveal";

interface PageHeroProps {
    eyebrow: string;
    title: string;
    highlight?: string;
    description: string;
}

function PageHero({
                      eyebrow,
                      title,
                      highlight,
                      description,
                  }: PageHeroProps) {
    return (
        <section className="bg-regency-cream py-20 md:py-28">
            <div className="container-width">
                <Reveal>
                    <p className="text-regency-rose uppercase tracking-[0.25em] text-xs font-semibold mb-6">
                        {eyebrow}
                    </p>

                    <h1 className="font-heading text-5xl md:text-7xl text-regency-burgundy max-w-4xl leading-tight">
                        {title}
                        {highlight && (
                            <span className="block italic text-regency-rose">
                {highlight}
              </span>
                        )}
                    </h1>

                    <p className="mt-8 text-regency-ink/70 leading-8 max-w-2xl">
                        {description}
                    </p>
                </Reveal>
            </div>
        </section>
    );
}

export default PageHero;
