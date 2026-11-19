
import { Link } from "react-router-dom";
import {
    BookOpen,
    MessageCircle,
    ClipboardCheck,
    ArrowUpRight,
} from "lucide-react";

import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const steps = [
    {
        number: "01",
        title: "Explore Programmes",
        description:
            "Review the available academic streams and subject combinations.",
        icon: BookOpen,
    },
    {
        number: "02",
        title: "Contact Admissions",
        description:
            "Make an enquiry to understand the current admission requirements.",
        icon: MessageCircle,
    },
    {
        number: "03",
        title: "Follow College Guidance",
        description:
            "Complete the documentation and formalities communicated by the institution.",
        icon: ClipboardCheck,
    },
];

function AdmissionProcess() {
    return (
        <main>
            <PageHero
                eyebrow="Admissions / Process"
                title="Your admission journey."
                highlight="Made clearer."
                description="Find out how to begin an admission enquiry and obtain official guidance from Regency PU College."
            />

            <section className="section-padding bg-white">
                <div className="container-width">
                    <Reveal>
                        <h2 className="font-heading text-4xl md:text-5xl text-regency-burgundy mb-12">
                            Getting Started
                        </h2>
                    </Reveal>

                    <div className="grid md:grid-cols-3 gap-6">
                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <Reveal key={step.number} delay={index * 0.1}>
                                    <div className="h-full bg-regency-cream rounded-3xl p-9">
                                        <div className="flex justify-between items-start">
                                            <Icon size={30} className="text-regency-rose" />
                                            <span className="font-heading text-4xl text-regency-gold">
                        {step.number}
                      </span>
                                        </div>

                                        <h3 className="font-heading text-2xl text-regency-burgundy mt-10">
                                            {step.title}
                                        </h3>

                                        <p className="text-regency-ink/70 leading-7 mt-5">
                                            {step.description}
                                        </p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>

                    <Reveal>
                        <div className="mt-12">
                            <p className="text-sm text-regency-ink/65 leading-7">
                                This is an enquiry guide, not the official admission
                                procedure. The college must confirm eligibility,
                                documentation, deadlines and fees.
                            </p>

                            <Link
                                to="/admissions#enquiry"
                                className="inline-flex items-center gap-3 mt-8 bg-regency-burgundy text-white px-8 py-4 rounded-full font-semibold hover:bg-regency-rose transition-colors"
                            >
                                Make an Enquiry
                                <ArrowUpRight size={18} />
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}

export default AdmissionProcess;
