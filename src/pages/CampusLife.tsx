
import { Link } from "react-router-dom";
import {
    BookOpen,
    FlaskConical,
    Trophy,
    Users,
    ArrowUpRight,
} from "lucide-react";

import Reveal from "../components/Reveal";

const campusFeatures = [
    {
        title: "Learning Environment",
        description:
            "A student-focused environment that encourages academic growth, discipline and curiosity.",
        icon: BookOpen,
    },
    {
        title: "Practical Learning",
        description:
            "Opportunities to connect classroom learning with practical understanding.",
        icon: FlaskConical,
    },
    {
        title: "Sports & Activities",
        description:
            "Encouraging participation, teamwork and interests beyond academics.",
        icon: Trophy,
    },
    {
        title: "Student Development",
        description:
            "Supporting confidence, character building and holistic development.",
        icon: Users,
    },
];

function CampusLife() {
    return (
        <main>
            {/* PAGE HERO */}
            <section className="bg-regency-cream py-24 md:py-32">
                <div className="container-width">
                    <Reveal>
                        <p className="text-regency-rose uppercase tracking-[0.25em] text-xs font-semibold mb-6">
                            Life at Regency
                        </p>

                        <h1 className="font-heading text-5xl md:text-7xl text-regency-burgundy max-w-4xl leading-tight">
                            Learning beyond
                            <span className="block italic text-regency-rose">
                the classroom.
              </span>
                        </h1>

                        <p className="mt-8 text-regency-ink/70 max-w-2xl leading-8">
                            Discover an educational environment that values
                            academic excellence, creativity, teamwork and
                            personal development.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* FEATURES */}
            <section className="section-padding bg-white">
                <div className="container-width">

                    <Reveal>
                        <h2 className="font-heading text-4xl md:text-5xl text-regency-burgundy mb-12">
                            The Regency Experience
                        </h2>
                    </Reveal>

                    <div className="grid md:grid-cols-2 gap-6">
                        {campusFeatures.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <Reveal key={feature.title} delay={index * 0.1}>
                                    <div className="h-full bg-regency-cream rounded-3xl p-9 md:p-12 border border-regency-ink/10 hover:border-regency-gold transition-all duration-300">

                                        <div className="w-16 h-16 rounded-2xl bg-regency-burgundy text-white flex items-center justify-center">
                                            <Icon size={28} strokeWidth={1.5} />
                                        </div>

                                        <h3 className="font-heading text-3xl text-regency-burgundy mt-9">
                                            {feature.title}
                                        </h3>

                                        <p className="text-regency-ink/70 leading-8 mt-5">
                                            {feature.description}
                                        </p>

                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* GALLERY CTA */}
            <section className="bg-regency-burgundy py-20">
                <div className="container-width text-center">
                    <Reveal>
                        <h2 className="font-heading text-4xl md:text-5xl text-white">
                            Explore Life at Regency
                        </h2>

                        <p className="text-white/70 mt-5 max-w-xl mx-auto leading-8">
                            Learn more about our educational community,
                            activities and student experiences.
                        </p>

                        <Link
                            to="/gallery"
                            className="inline-flex items-center gap-3 bg-regency-gold text-regency-ink px-8 py-4 rounded-full font-semibold mt-9 hover:bg-white transition-colors"
                        >
                            Visit Gallery
                            <ArrowUpRight size={18} />
                        </Link>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}

export default CampusLife;
