
import { Trophy, Users, Palette, Heart } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const activities = [
    {
        title: "Sports",
        description:
            "Encouraging physical activity, participation and teamwork.",
        icon: Trophy,
    },
    {
        title: "Teamwork",
        description:
            "Developing collaboration, leadership and communication skills.",
        icon: Users,
    },
    {
        title: "Creativity",
        description:
            "Recognising the importance of expression and creative thinking.",
        icon: Palette,
    },
    {
        title: "Personal Growth",
        description:
            "Supporting confidence, discipline and character development.",
        icon: Heart,
    },
];

function SportsActivities() {
    return (
        <main>
            <PageHero
                eyebrow="Campus Life / Sports & Activities"
                title="Discover your strengths."
                highlight="Beyond academics."
                description="Explore the role of physical activity, creativity and teamwork in holistic student development."
            />

            <section className="section-padding bg-white">
                <div className="container-width">
                    <Reveal>
                        <h2 className="font-heading text-4xl md:text-5xl text-regency-burgundy mb-12">
                            Growing Beyond the Classroom
                        </h2>
                    </Reveal>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {activities.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <Reveal key={item.title} delay={index * 0.1}>
                                    <div className="h-full bg-regency-cream rounded-3xl p-8">
                                        <Icon size={32} className="text-regency-rose" />

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
                        <p className="mt-12 text-regency-ink/65 leading-8 max-w-3xl">
                            Specific sports programmes, events and extracurricular
                            activities will be listed after confirmation by the college.
                        </p>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}

export default SportsActivities;
