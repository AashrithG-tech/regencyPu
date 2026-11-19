
import {
    BookOpen,
    FlaskConical,
    Monitor,
    Users,
} from "lucide-react";

import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const facilityCategories = [
    {
        title: "Classrooms",
        description:
            "Learning spaces that support structured academic instruction.",
        icon: BookOpen,
    },
    {
        title: "Laboratories",
        description:
            "Practical learning spaces for exploring scientific concepts.",
        icon: FlaskConical,
    },
    {
        title: "Computer Learning",
        description:
            "Technology-oriented learning and computer science education.",
        icon: Monitor,
    },
    {
        title: "Student Support",
        description:
            "An environment focused on guidance, individual attention and student development.",
        icon: Users,
    },
];

function Facilities() {
    return (
        <main>
            <PageHero
                eyebrow="Campus Life / Facilities"
                title="Spaces for learning."
                highlight="Places to grow."
                description="Explore the types of learning environments and student support that contribute to the Regency educational experience."
            />

            <section className="section-padding bg-white">
                <div className="container-width">
                    <Reveal>
                        <h2 className="font-heading text-4xl md:text-5xl text-regency-burgundy mb-12">
                            Learning Environment
                        </h2>
                    </Reveal>

                    <div className="grid md:grid-cols-2 gap-6">
                        {facilityCategories.map((facility, index) => {
                            const Icon = facility.icon;

                            return (
                                <Reveal key={facility.title} delay={index * 0.1}>
                                    <div className="h-full rounded-3xl bg-regency-cream p-9 md:p-12 border border-regency-ink/10">
                                        <div className="w-16 h-16 rounded-2xl bg-regency-burgundy flex items-center justify-center text-white">
                                            <Icon size={28} />
                                        </div>

                                        <h3 className="font-heading text-3xl text-regency-burgundy mt-9">
                                            {facility.title}
                                        </h3>

                                        <p className="text-regency-ink/70 leading-8 mt-5">
                                            {facility.description}
                                        </p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>

                    <p className="text-regency-ink/60 text-sm mt-10">
                        Specific facilities, equipment and photographs are subject
                        to verification with the college before publication.
                    </p>
                </div>
            </section>
        </main>
    );
}

export default Facilities;
