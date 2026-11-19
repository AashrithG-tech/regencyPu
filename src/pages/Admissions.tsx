
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, MessageCircle, GraduationCap } from "lucide-react";
import Reveal from "../components/Reveal";

import EnquiryForm from "../components/EnquiryForm";


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
        title: "Make an Enquiry",
        description:
            "Contact the college to understand the admission process and requirements.",
        icon: MessageCircle,
    },
    {
        number: "03",
        title: "Complete Admission Formalities",
        description:
            "Follow the college's confirmed guidance on documentation and enrolment.",
        icon: GraduationCap,
    },
];

function Admissions() {
    return (
        <main>
            <section className="bg-regency-cream py-24 md:py-32">
                <div className="container-width">
                    <Reveal>
                        <p className="text-regency-rose uppercase tracking-[0.25em] text-xs font-semibold mb-6">
                            Admissions
                        </p>

                        <h1 className="font-heading text-5xl md:text-7xl text-regency-burgundy max-w-4xl leading-tight">
                            Your next chapter
                            <span className="block italic text-regency-rose">
                starts here.
              </span>
                        </h1>

                        <p className="mt-8 text-regency-ink/70 max-w-2xl leading-8">
                            Learn more about Regency PU College and take
                            the first step towards your academic future.
                        </p>
                    </Reveal>
                </div>
            </section>


            <section
                id="enquiry"
                className="section-padding bg-regency-cream scroll-mt-24"
            >

            <div className="container-width">
                    <Reveal>
                        <h2 className="font-heading text-4xl md:text-5xl text-regency-burgundy mb-12">
                            Your Admission Journey
                        </h2>
                    </Reveal>

                    <div className="grid md:grid-cols-3 gap-6">
                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <Reveal key={step.number} delay={index * 0.12}>
                                    <div className="h-full rounded-3xl bg-regency-cream p-9 border border-regency-ink/10">
                                        <div className="flex items-center justify-between">
                                            <Icon size={30} className="text-regency-rose" />

                                            <span className="font-heading text-4xl text-regency-gold">
                        {step.number}
                      </span>
                                        </div>

                                        <h3 className="font-heading text-2xl text-regency-burgundy mt-10">
                                            {step.title}
                                        </h3>

                                        <p className="text-regency-ink/70 leading-7 mt-4">
                                            {step.description}
                                        </p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>

                    <Reveal>
                        <div className="text-center mt-14">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 bg-regency-burgundy text-white px-8 py-4 rounded-full font-semibold hover:bg-regency-rose transition-colors"
                            >
                                Contact the College
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </Reveal>

                </div>
            </section>


            <section
                id="enquiry"
                className="section-padding bg-regency-cream scroll-mt-24"
            >
                <div className="container-width max-w-4xl">
                    <Reveal>
                        <div className="bg-white rounded-3xl p-6 sm:p-9 md:p-12 shadow-sm border border-regency-ink/10">
                            <EnquiryForm />
                        </div>
                    </Reveal>
                </div>
            </section>

        </main>
    );
}

export default Admissions;
