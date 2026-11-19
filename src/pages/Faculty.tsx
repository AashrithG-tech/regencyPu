
import { GraduationCap, Users, BookOpen, HeartHandshake } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const facultyValues = [
    {
        title: "Academic Guidance",
        description:
            "Supporting students in understanding concepts and developing strong academic foundations.",
        icon: GraduationCap,
    },
    {
        title: "Individual Attention",
        description:
            "Encouraging personal learning and addressing individual academic needs.",
        icon: Users,
    },
    {
        title: "Continuous Learning",
        description:
            "Fostering curiosity, critical thinking and an interest in learning.",
        icon: BookOpen,
    },
    {
        title: "Student Support",
        description:
            "Helping students navigate their academic journey with guidance and encouragement.",
        icon: HeartHandshake,
    },
];

function Faculty() {
    return (
        <main>
            <PageHero
                eyebrow="About Regency / Faculty"
                title="Educators who inspire."
                highlight="Mentors who guide."
                description="Discover the teaching philosophy and academic support that shape the Regency learning experience."
            />

            <section className="section-padding bg-white">
                <div className="container-width">
                    <Reveal>
                        <h2 className="font-heading text-4xl md:text-5xl text-regency-burgundy max-w-3xl">
                            Dedicated to student development.
                        </h2>

                        <p className="text-regency-ink/70 leading-8 mt-6 max-w-3xl">
                            Regency PU College emphasises experienced teaching,
                            individual attention and student guidance as important
                            parts of its academic environment.
                        </p>
                    </Reveal>

                    <div className="grid md:grid-cols-2 gap-6 mt-12">
                        {facultyValues.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <Reveal key={item.title} delay={index * 0.1}>
                                    <div className="bg-regency-cream rounded-3xl p-9 h-full">
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
                        <div className="mt-14 p-9 md:p-12 rounded-3xl bg-regency-burgundy text-white text-center">
                            <h3 className="font-heading text-3xl md:text-4xl">
                                Meet Our Faculty
                            </h3>

                            <p className="text-white/75 mt-5 max-w-xl mx-auto leading-8">
                                Faculty profiles and official photographs will be
                                added once the college provides approved information.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}

export default Faculty;
