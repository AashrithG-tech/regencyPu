
import { Link } from "react-router-dom";
import {
    BriefcaseBusiness,
    ChartNoAxesCombined,
    BookOpen,
    ArrowUpRight,
} from "lucide-react";

import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";

const areas = [
    {
        title: "Business Studies",
        description: "Understand business organisation, management and entrepreneurship.",
        icon: BriefcaseBusiness,
    },
    {
        title: "Economics",
        description: "Explore markets, resources and economic decision-making.",
        icon: ChartNoAxesCombined,
    },
    {
        title: "Accountancy",
        description: "Learn financial recording, reporting and accounting fundamentals.",
        icon: BookOpen,
    },
];

function Commerce() {
    return (
        <main>
            <PageHero
                eyebrow="Academics / Commerce"
                title="Understand business."
                highlight="Create opportunities."
                description="Explore commerce, economics and business concepts while developing analytical and financial understanding."
            />

            <section className="section-padding bg-white">
                <div className="container-width">
                    <Reveal>
                        <h2 className="font-heading text-4xl md:text-5xl text-regency-burgundy">
                            Discover the world of commerce.
                        </h2>

                        <p className="text-regency-ink/70 leading-8 mt-6 max-w-3xl">
                            Commerce education provides a foundation in business,
                            economics and accounting, encouraging students to understand
                            financial systems and organisational decision-making.
                        </p>
                    </Reveal>

                    <div className="grid md:grid-cols-3 gap-6 mt-12">
                        {areas.map((area, index) => {
                            const Icon = area.icon;

                            return (
                                <Reveal key={area.title} delay={index * 0.1}>
                                    <div className="h-full bg-regency-cream rounded-3xl p-9">
                                        <Icon size={30} className="text-regency-rose" />

                                        <h3 className="font-heading text-2xl text-regency-burgundy mt-8">
                                            {area.title}
                                        </h3>

                                        <p className="text-regency-ink/70 leading-7 mt-4">
                                            {area.description}
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
                        <div className="bg-white rounded-3xl p-9 md:p-14 max-w-4xl">
                            <p className="text-regency-rose uppercase tracking-[0.2em] text-xs font-semibold">
                                Subject Combination
                            </p>

                            <h2 className="font-heading text-5xl text-regency-burgundy mt-5">
                                CEBA
                            </h2>

                            <p className="text-regency-ink/75 leading-8 mt-5">
                                Computer Science, Economics, Business Studies and Accountancy.
                            </p>

                            <p className="text-regency-ink/60 text-sm mt-5">
                                Please confirm the current subject combination with the college.
                            </p>

                            <Link
                                to="/admissions#enquiry"
                                className="inline-flex items-center gap-3 mt-9 bg-regency-burgundy text-white px-7 py-4 rounded-full font-semibold hover:bg-regency-rose transition-colors"
                            >
                                Enquire About Commerce
                                <ArrowUpRight size={18} />
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}

export default Commerce;
