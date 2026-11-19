
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import { collegeInfo } from "../data/college";

function VisionMission() {
    return (
        <main>
            <PageHero
                eyebrow="About Regency"
                title="Our purpose."
                highlight="Our guiding values."
                description="Discover the principles that shape the educational philosophy of Regency PU College."
            />

            <section className="section-padding bg-white">
                <div className="container-width grid lg:grid-cols-2 gap-8">

                    <Reveal>
                        <div className="h-full bg-regency-burgundy rounded-3xl p-9 md:p-14">
                            <p className="text-regency-gold uppercase tracking-[0.25em] text-xs font-semibold">
                                Our Mission
                            </p>

                            <h2 className="font-heading text-4xl text-white mt-8">
                                Education with purpose.
                            </h2>

                            <p className="text-white/80 leading-8 mt-7">
                                {collegeInfo.mission}
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <div className="h-full bg-regency-cream rounded-3xl p-9 md:p-14">
                            <p className="text-regency-rose uppercase tracking-[0.25em] text-xs font-semibold">
                                Our Educational Philosophy
                            </p>

                            <h2 className="font-heading text-4xl text-regency-burgundy mt-8">
                                Learning beyond textbooks.
                            </h2>

                            <p className="text-regency-ink/75 leading-8 mt-7">
                                Regency PU College emphasises academic excellence,
                                critical thinking, creativity, problem-solving and
                                character building as part of holistic student development.
                            </p>
                        </div>
                    </Reveal>

                </div>
            </section>

            <section className="section-padding bg-regency-cream">
                <div className="container-width">
                    <Reveal>
                        <h2 className="font-heading text-4xl md:text-5xl text-regency-burgundy mb-12">
                            Our Core Values
                        </h2>
                    </Reveal>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {collegeInfo.values.map((value, index) => (
                            <Reveal key={value} delay={index * 0.06}>
                                <div className="bg-white rounded-2xl p-7 border border-regency-ink/10">
                  <span className="text-regency-gold font-heading text-3xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                                    <h3 className="font-heading text-xl text-regency-burgundy mt-5">
                                        {value}
                                    </h3>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default VisionMission;
