
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { collegeInfo } from "../data/college";

function AboutSection() {
    return (
        <section className="section-padding bg-regency-cream">
            <div className="container-width grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

                <Reveal>
                    <div className="relative bg-regency-burgundy rounded-t-[180px] rounded-b-3xl min-h-[380px] md:min-h-[480px] overflow-hidden flex items-center justify-center">

                        <div className="absolute w-[340px] h-[340px] border border-white/20 rounded-full" />
                        <div className="absolute w-[440px] h-[440px] border border-regency-gold/20 rounded-full" />

                        <div className="relative text-center px-8">
                            <p className="uppercase tracking-[0.3em] text-regency-gold text-xs mb-6">
                                Since 2010
                            </p>

                            <h3 className="font-heading text-white text-5xl md:text-6xl">
                                Rooted in
                                <br />
                                <span className="italic text-regency-gold">
                  Values.
                </span>
                            </h3>

                            <p className="text-white/70 text-sm mt-6">
                                Inspired by possibilities.
                            </p>
                        </div>
                    </div>
                </Reveal>

                <div>
                    <Reveal>
                        <p className="text-regency-rose uppercase tracking-[0.25em] text-xs font-semibold mb-5">
                            About Regency
                        </p>

                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-regency-burgundy leading-tight">
                            Where learning meets purpose.
                        </h2>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <p className="mt-7 text-regency-ink/75 leading-8">
                            Established in {collegeInfo.established},
                            Regency PU College is located in Vidyaranyapura,
                            Bengaluru. The institution is committed to
                            academic excellence, character building and
                            holistic development.
                        </p>

                        <p className="mt-5 text-regency-ink/75 leading-8">
                            {collegeInfo.mission}
                        </p>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <Link
                            to="/about"
                            className="inline-flex items-center gap-3 mt-9 text-regency-burgundy font-semibold border-b border-regency-gold pb-2 hover:gap-5 transition-all"
                        >
                            Discover Our Story
                            <ArrowUpRight size={19} />
                        </Link>
                    </Reveal>
                </div>

            </div>
        </section>
    );
}

export default AboutSection;
