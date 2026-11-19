
import { Link } from "react-router-dom";
import { ArrowUpRight, UserRound } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

function PrincipalMessage() {
    return (
        <main>
            <PageHero
                eyebrow="About Regency / Leadership"
                title="A message from"
                highlight="our Principal."
                description="Leadership, guidance and a commitment to meaningful education."
            />

            <section className="section-padding bg-white">
                <div className="container-width grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
                    <Reveal className="lg:col-span-2">
                        <div className="relative min-h-[360px] md:min-h-[460px] bg-regency-cream rounded-t-[180px] rounded-b-3xl flex flex-col items-center justify-center p-8 text-center">
                            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                                <UserRound size={42} className="text-regency-burgundy" />
                            </div>

                            <p className="font-heading text-2xl text-regency-burgundy mt-8">
                                College Leadership
                            </p>

                            <p className="text-regency-ink/60 text-sm mt-3">
                                Official photograph and name pending
                            </p>
                        </div>
                    </Reveal>

                    <Reveal className="lg:col-span-3" delay={0.1}>
                        <p className="text-regency-rose uppercase tracking-[0.25em] text-xs font-semibold mb-5">
                            Principal's Message
                        </p>

                        <h2 className="font-heading text-4xl md:text-5xl text-regency-burgundy leading-tight">
                            Guiding students towards a purposeful future.
                        </h2>

                        <p className="text-regency-ink/75 leading-8 mt-7">
                            At Regency PU College, academic learning and personal
                            development are central to the educational experience.
                            The institution emphasises discipline, curiosity,
                            character building and holistic growth.
                        </p>

                        <p className="text-regency-ink/70 leading-8 mt-5">
                            The Principal's official message will be published
                            here after review and approval by the college.
                        </p>

                        <Link
                            to="/about"
                            className="inline-flex items-center gap-3 mt-9 font-semibold text-regency-burgundy"
                        >
                            Learn More About Regency
                            <ArrowUpRight size={18} />
                        </Link>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}

export default PrincipalMessage;
