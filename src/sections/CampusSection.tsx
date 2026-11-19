
import { Link } from "react-router-dom";
import {
    BookOpen,
    Trophy,
    Users,
    ArrowUpRight,
} from "lucide-react";
import Reveal from "../components/Reveal";

const experiences = [
    {
        title: "Learning Spaces",
        description:
            "An environment designed to support focused learning and academic growth.",
        icon: BookOpen,
    },
    {
        title: "Sports & Activities",
        description:
            "Opportunities for students to explore interests beyond the classroom.",
        icon: Trophy,
    },
    {
        title: "Student Development",
        description:
            "Encouraging confidence, creativity and personal growth.",
        icon: Users,
    },
];

function CampusSection() {
    return (
        <section className="section-padding bg-regency-cream">
            <div className="container-width">

                <Reveal>
                    <div className="max-w-3xl mb-14">
                        <p className="text-regency-rose uppercase tracking-[0.25em] text-xs font-semibold mb-5">
                            Beyond the Classroom
                        </p>

                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-regency-burgundy leading-tight">
                            More than an education.
                            <span className="italic block text-regency-rose">
                An experience.
              </span>
                        </h2>
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-3 gap-6">

                    {experiences.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <Reveal key={item.title} delay={index * 0.12}>
                                <div className="bg-white rounded-3xl p-9 min-h-[320px] h-full flex flex-col justify-between border border-regency-ink/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-500">

                                    <div className="w-14 h-14 rounded-full bg-regency-cream flex items-center justify-center text-regency-burgundy">
                                        <Icon size={26} strokeWidth={1.5} />
                                    </div>

                                    <div>
                                        <h3 className="font-heading text-2xl text-regency-burgundy">
                                            {item.title}
                                        </h3>

                                        <p className="text-regency-ink/70 text-sm leading-7 mt-4">
                                            {item.description}
                                        </p>
                                    </div>

                                </div>
                            </Reveal>
                        );
                    })}

                </div>

                <Reveal>
                    <div className="mt-12 text-center">
                        <Link
                            to="/campus-life"
                            className="inline-flex items-center gap-3 text-regency-burgundy font-semibold border-b border-regency-gold pb-2"
                        >
                            Explore Campus Life
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </Reveal>

            </div>
        </section>
    );
}

export default CampusSection;
