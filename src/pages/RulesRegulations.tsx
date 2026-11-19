
import { ShieldCheck, BookOpen, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const principles = [
    {
        title: "Discipline",
        description:
            "A respectful and focused learning environment supports student development.",
        icon: ShieldCheck,
    },
    {
        title: "Academic Responsibility",
        description:
            "Regular participation and commitment to learning are important educational values.",
        icon: BookOpen,
    },
    {
        title: "Respect & Conduct",
        description:
            "Mutual respect and responsible behaviour contribute to a positive college community.",
        icon: Users,
    },
];

function RulesRegulations() {
    return (
        <main>
            <PageHero
                eyebrow="Admissions / Student Guidelines"
                title="A culture of respect."
                highlight="A commitment to learning."
                description="An introduction to the values of discipline, responsibility and respectful conduct."
            />

            <section className="section-padding bg-white">
                <div className="container-width">
                    <Reveal>
                        <h2 className="font-heading text-4xl md:text-5xl text-regency-burgundy mb-12">
                            Guiding Principles
                        </h2>
                    </Reveal>

                    <div className="grid md:grid-cols-3 gap-6">
                        {principles.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <Reveal key={item.title} delay={index * 0.1}>
                                    <div className="h-full bg-regency-cream rounded-3xl p-9">
                                        <Icon size={30} className="text-regency-rose" />

                                        <h3 className="font-heading text-2xl text-regency-burgundy mt-8">
                                            {item.title}
                                        </h3>

                                        <p className="text-regency-ink/70 leading-7 mt-4">
                                            {item.description}
                                        </p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>

                    <Reveal>
                        <div className="mt-12 bg-regency-burgundy rounded-3xl p-9 md:p-12">
                            <h3 className="font-heading text-3xl text-white">
                                Official College Regulations
                            </h3>

                            <p className="text-white/75 leading-8 mt-5">
                                The official rules, attendance requirements, uniform
                                guidelines and disciplinary policies will be published
                                after receiving the college-approved regulations.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}

export default RulesRegulations;
