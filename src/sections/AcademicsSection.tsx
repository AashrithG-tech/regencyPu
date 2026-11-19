
import { Link } from "react-router-dom";
import {
    ArrowUpRight,
    FlaskConical,
    ChartNoAxesCombined,
} from "lucide-react";
import Reveal from "../components/Reveal";

const programs = [
    {
        number: "01",
        title: "Science",
        subtitle: "Explore. Experiment. Discover.",
        description:
            "Build a strong foundation in scientific thinking, mathematics and analytical problem-solving.",
        combinations: ["PCMB", "PCMC"],
        icon: FlaskConical,
    },
    {
        number: "02",
        title: "Commerce",
        subtitle: "Understand. Analyse. Lead.",
        description:
            "Develop knowledge in commerce, economics, business and analytical thinking.",
        combinations: ["CEBA"],
        icon: ChartNoAxesCombined,
    },
];

function AcademicsSection() {
    return (
        <section className="section-padding bg-white">
            <div className="container-width">

                <Reveal>
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">

                        <div className="max-w-2xl">
                            <p className="text-regency-rose uppercase tracking-[0.25em] text-xs font-semibold mb-5">
                                Academic Programmes
                            </p>

                            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-regency-burgundy leading-tight">
                                Pathways to a brighter future.
                            </h2>
                        </div>

                        <Link
                            to="/academics"
                            className="inline-flex items-center gap-3 text-regency-burgundy font-semibold border-b border-regency-gold pb-2 w-fit"
                        >
                            Explore Academics
                            <ArrowUpRight size={18} />
                        </Link>

                    </div>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-7">

                    {programs.map((program, index) => {
                        const Icon = program.icon;

                        return (
                            <Reveal key={program.title} delay={index * 0.12}>
                                <div className="group relative h-full bg-regency-cream p-8 md:p-12 rounded-3xl border border-regency-ink/10 hover:border-regency-gold transition-all duration-300 overflow-hidden">

                                    <div className="flex justify-between items-start">

                                        <div className="w-16 h-16 rounded-2xl bg-regency-burgundy flex items-center justify-center text-white">
                                            <Icon size={28} strokeWidth={1.5} />
                                        </div>

                                        <span className="font-heading text-5xl text-regency-burgundy/15">
                      {program.number}
                    </span>

                                    </div>

                                    <h3 className="font-heading text-4xl text-regency-burgundy mt-12">
                                        {program.title}
                                    </h3>

                                    <p className="text-regency-rose font-medium mt-3">
                                        {program.subtitle}
                                    </p>

                                    <p className="text-regency-ink/70 leading-8 mt-6 max-w-md">
                                        {program.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3 mt-8">
                                        {program.combinations.map((combination) => (
                                            <span
                                                key={combination}
                                                className="px-4 py-2 border border-regency-burgundy/20 rounded-full text-sm text-regency-burgundy"
                                            >
                        {combination}
                      </span>
                                        ))}
                                    </div>

                                    <Link
                                        to="/academics"
                                        className="inline-flex items-center gap-3 mt-10 font-semibold text-regency-burgundy group-hover:gap-5 transition-all"
                                    >
                                        Learn More
                                        <ArrowUpRight size={18} />
                                    </Link>

                                </div>
                            </Reveal>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}

export default AcademicsSection;
