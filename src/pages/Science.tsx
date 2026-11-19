
import { Link } from "react-router-dom";
import {
    Atom,
    Microscope,
    Calculator,
    ArrowUpRight,
} from "lucide-react";

import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";

const subjects = [
    {
        title: "Physics",
        description: "Explore matter, energy, motion and the principles of the physical world.",
        icon: Atom,
    },
    {
        title: "Chemistry",
        description: "Understand chemical substances, reactions and their applications.",
        icon: Microscope,
    },
    {
        title: "Mathematics",
        description: "Build analytical reasoning, logical thinking and problem-solving skills.",
        icon: Calculator,
    },
];

const combinations = [
    {
        name: "PCMB",
        fullName: "Physics, Chemistry, Mathematics & Biology",
        description: "A subject combination incorporating biological sciences.",
    },
    {
        name: "PCMC",
        fullName: "Physics, Chemistry, Mathematics & Computer Science",
        description: "A subject combination incorporating computer science.",
    },
];

function Science() {
    return (
        <main>
            <PageHero
                eyebrow="Academics / Science"
                title="Explore the world."
                highlight="Discover what's possible."
                description="Build a foundation in scientific understanding, analytical thinking and academic exploration."
            />

            <section className="section-padding bg-white">
                <div className="container-width">
                    <Reveal>
                        <p className="text-regency-rose uppercase tracking-[0.25em] text-xs font-semibold mb-5">
                            Science Stream
                        </p>

                        <h2 className="font-heading text-4xl md:text-5xl text-regency-burgundy max-w-3xl">
                            A foundation for scientific thinking.
                        </h2>

                        <p className="text-regency-ink/70 leading-8 mt-6 max-w-3xl">
                            The Science stream introduces students to fundamental scientific
                            concepts while developing analytical skills, logical reasoning
                            and an understanding of the natural world.
                        </p>
                    </Reveal>

                    <div className="grid md:grid-cols-3 gap-6 mt-12">
                        {subjects.map((subject, index) => {
                            const Icon = subject.icon;

                            return (
                                <Reveal key={subject.title} delay={index * 0.1}>
                                    <div className="h-full bg-regency-cream rounded-3xl p-8">
                                        <Icon size={30} className="text-regency-rose" />

                                        <h3 className="font-heading text-2xl text-regency-burgundy mt-8">
                                            {subject.title}
                                        </h3>

                                        <p className="text-regency-ink/70 leading-7 mt-4">
                                            {subject.description}
                                        </p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-regency-cream">
                <div className="container-width">
                    <Reveal>
                        <h2 className="font-heading text-4xl md:text-5xl text-regency-burgundy mb-12">
                            Subject Combinations
                        </h2>
                    </Reveal>

                    <div className="grid md:grid-cols-2 gap-6">
                        {combinations.map((combination, index) => (
                            <Reveal key={combination.name} delay={index * 0.1}>
                                <div className="h-full bg-white rounded-3xl p-9 md:p-12 border border-regency-ink/10">
                                    <p className="text-regency-rose uppercase tracking-[0.2em] text-xs font-semibold">
                                        Subject Combination
                                    </p>

                                    <h3 className="font-heading text-4xl text-regency-burgundy mt-5">
                                        {combination.name}
                                    </h3>

                                    <p className="font-medium text-regency-ink mt-4">
                                        {combination.fullName}
                                    </p>

                                    <p className="text-regency-ink/70 leading-7 mt-5">
                                        {combination.description}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal>
                        <p className="text-sm text-regency-ink/60 mt-8">
                            Subject combinations are subject to confirmation by the college.
                        </p>

                        <Link
                            to="/admissions#enquiry"
                            className="inline-flex items-center gap-3 mt-8 bg-regency-burgundy text-white px-7 py-4 rounded-full font-semibold hover:bg-regency-rose transition-colors"
                        >
                            Enquire About Science
                            <ArrowUpRight size={18} />
                        </Link>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}

export default Science;
