
import { Link } from "react-router-dom";
import {
    FlaskConical,
    ChartNoAxesCombined,
    ArrowUpRight,
} from "lucide-react";
import Reveal from "../components/Reveal";

const programs = [
    {
        title: "Science",
        icon: FlaskConical,
        combinations: [
            {
                name: "PCMB",
                subjects: "Physics, Chemistry, Mathematics, Biology",
            },
            {
                name: "PCMC",
                subjects: "Physics, Chemistry, Mathematics, Computer Science",
            },
        ],
        description:
            "A pathway focused on scientific understanding, mathematics and analytical thinking.",
    },
    {
        title: "Commerce",
        icon: ChartNoAxesCombined,
        combinations: [
            {
                name: "CEBA",
                subjects: "Computer Science, Economics, Business Studies, Accountancy",
            },
        ],
        description:
            "A pathway focused on business, commerce, economics and financial understanding.",
    },
];

function Academics() {
    return (
        <main>
            <section className="bg-regency-cream py-24 md:py-32">
                <div className="container-width">
                    <Reveal>
                        <p className="text-regency-rose uppercase tracking-[0.25em] text-xs font-semibold mb-6">
                            Academic Programmes
                        </p>

                        <h1 className="font-heading text-5xl md:text-7xl text-regency-burgundy max-w-4xl leading-tight">
                            Explore your potential.
                            <span className="block italic text-regency-rose">
                Shape your future.
              </span>
                        </h1>

                        <p className="mt-8 text-regency-ink/70 max-w-2xl leading-8">
                            Explore the academic streams and subject combinations
                            at Regency PU College.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-width space-y-12">

                    {programs.map((program, index) => {
                        const Icon = program.icon;

                        return (
                            <Reveal key={program.title} delay={index * 0.1}>
                                <div className="grid lg:grid-cols-2 gap-10 bg-regency-cream rounded-3xl p-8 md:p-12 lg:p-16">

                                    <div>
                                        <div className="w-16 h-16 rounded-2xl bg-regency-burgundy text-white flex items-center justify-center mb-8">
                                            <Icon size={30} />
                                        </div>

                                        <h2 className="font-heading text-4xl md:text-5xl text-regency-burgundy">
                                            {program.title}
                                        </h2>

                                        <p className="text-regency-ink/70 leading-8 mt-6">
                                            {program.description}
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-heading text-2xl text-regency-burgundy mb-6">
                                            Subject Combinations
                                        </h3>

                                        <div className="space-y-4">
                                            {program.combinations.map((combination) => (
                                                <div
                                                    key={combination.name}
                                                    className="bg-white rounded-2xl p-6 border border-regency-ink/10"
                                                >
                                                    <p className="font-semibold text-regency-burgundy text-lg">
                                                        {combination.name}
                                                    </p>

                                                    <p className="text-regency-ink/65 text-sm mt-2 leading-6">
                                                        {combination.subjects}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        <Link
                                            to="/admissions"
                                            className="inline-flex items-center gap-3 mt-8 text-regency-burgundy font-semibold"
                                        >
                                            Admission Enquiry
                                            <ArrowUpRight size={18} />
                                        </Link>
                                    </div>

                                </div>
                            </Reveal>
                        );
                    })}

                </div>
            </section>
        </main>
    );
}

export default Academics;
