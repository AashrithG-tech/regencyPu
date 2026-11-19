
import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpen, Heart, Lightbulb } from "lucide-react";
import Reveal from "../components/Reveal";
import { collegeInfo } from "../data/college";

const values = [
    {
        title: "Academic Excellence",
        description:
            "Encouraging curiosity, critical thinking and a commitment to learning.",
        icon: BookOpen,
    },
    {
        title: "Character Building",
        description:
            "Nurturing integrity, responsibility and respect for others.",
        icon: Heart,
    },
    {
        title: "Holistic Development",
        description:
            "Supporting intellectual, personal and creative growth.",
        icon: Lightbulb,
    },
];

function About() {
    return (
        <main>
            {/* PAGE HERO */}
            <section className="bg-regency-cream py-24 md:py-32">
                <div className="container-width">
                    <Reveal>
                        <p className="text-regency-rose uppercase tracking-[0.25em] text-xs font-semibold mb-6">
                            Our Story
                        </p>

                        <h1 className="font-heading text-5xl md:text-7xl text-regency-burgundy max-w-4xl leading-tight">
                            Rooted in values.
                            <span className="block italic text-regency-rose">
                Inspired by possibilities.
              </span>
                        </h1>

                        <p className="mt-8 text-regency-ink/70 leading-8 max-w-2xl">
                            Discover the vision, values and educational philosophy
                            behind Regency PU College.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* HISTORY */}
            <section className="section-padding bg-white">
                <div className="container-width grid lg:grid-cols-2 gap-14 items-center">

                    <Reveal>
                        <div className="bg-regency-burgundy rounded-3xl p-12 md:p-16 text-center">
                            <p className="text-regency-gold text-xs tracking-[0.3em] uppercase mb-5">
                                Established
                            </p>

                            <p className="font-heading text-7xl md:text-8xl text-white">
                                {collegeInfo.established}
                            </p>

                            <p className="text-white/70 mt-6">
                                Vidyaranyapura, Bengaluru
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <p className="text-regency-rose text-xs tracking-[0.25em] uppercase font-semibold mb-5">
                            About the Institution
                        </p>

                        <h2 className="font-heading text-4xl md:text-5xl text-regency-burgundy">
                            A commitment to meaningful education.
                        </h2>

                        <p className="text-regency-ink/75 leading-8 mt-7">
                            Regency PU College was established in 2010 in
                            Vidyaranyapura, Bengaluru, under S.V. Educational Trust.
                            The institution seeks to provide quality education
                            while encouraging academic achievement, personal
                            development and strong values.
                        </p>

                        <p className="text-regency-ink/75 leading-8 mt-5">
                            {collegeInfo.mission}
                        </p>
                    </Reveal>

                </div>
            </section>

            {/* VALUES */}
            <section className="section-padding bg-regency-cream">
                <div className="container-width">

                    <Reveal>
                        <h2 className="font-heading text-4xl md:text-5xl text-regency-burgundy mb-12">
                            What We Believe In
                        </h2>
                    </Reveal>

                    <div className="grid md:grid-cols-3 gap-6">
                        {values.map((value, index) => {
                            const Icon = value.icon;

                            return (
                                <Reveal key={value.title} delay={index * 0.1}>
                                    <div className="bg-white rounded-3xl p-9 h-full">
                                        <Icon className="text-regency-rose" size={32} />

                                        <h3 className="font-heading text-2xl text-regency-burgundy mt-8">
                                            {value.title}
                                        </h3>

                                        <p className="text-regency-ink/70 leading-7 mt-4">
                                            {value.description}
                                        </p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="bg-regency-burgundy py-20 text-center">
                <div className="container-width">
                    <Reveal>
                        <h2 className="font-heading text-4xl md:text-5xl text-white">
                            Discover the Regency Experience.
                        </h2>

                        <Link
                            to="/admissions"
                            className="inline-flex items-center gap-3 bg-regency-gold text-regency-ink px-7 py-4 rounded-full font-semibold mt-8"
                        >
                            Explore Admissions
                            <ArrowUpRight size={18} />
                        </Link>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}

export default About;
