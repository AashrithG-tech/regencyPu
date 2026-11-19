
import {
    MapPin,
    Mail,
    Phone,
    ArrowUpRight,
} from "lucide-react";

import Reveal from "../components/Reveal";
import EnquiryForm from "../components/EnquiryForm";

function Contact() {
    return (
        <main>

            {/* HERO SECTION */}
            <section className="bg-regency-cream py-24 md:py-32">
                <div className="container-width">
                    <Reveal>
                        <p className="text-regency-rose uppercase tracking-[0.25em] text-xs font-semibold mb-6">
                            Contact Us
                        </p>

                        <h1 className="font-heading text-5xl md:text-7xl text-regency-burgundy leading-tight">
                            Let's start a
                            <span className="block italic text-regency-rose">
                conversation.
              </span>
                        </h1>

                        <p className="mt-8 text-regency-ink/70 leading-8 max-w-2xl">
                            Have questions about academics, admissions or
                            Regency PU College? Get in touch with the institution.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* CONTACT DETAILS AND ENQUIRY FORM */}
            <section className="section-padding bg-white">
                <div className="container-width grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* LEFT SIDE - CONTACT INFORMATION */}
                    <Reveal>
                        <div>
                            <p className="text-regency-rose uppercase tracking-[0.25em] text-xs font-semibold mb-5">
                                Reach Out
                            </p>

                            <h2 className="font-heading text-4xl md:text-5xl text-regency-burgundy">
                                We're here to help.
                            </h2>

                            <p className="text-regency-ink/70 leading-8 mt-6 max-w-md">
                                Whether you're exploring academic programmes or
                                planning your next step, we're here to help you
                                connect with Regency PU College.
                            </p>

                            <div className="space-y-10 mt-12">

                                {/* LOCATION */}
                                <div className="flex gap-5">
                                    <MapPin
                                        className="text-regency-rose shrink-0"
                                        size={25}
                                    />

                                    <div>
                                        <h3 className="font-semibold text-regency-burgundy">
                                            Location
                                        </h3>

                                        <p className="text-regency-ink/70 mt-2 leading-7">
                                            Regency PU College
                                            <br />
                                            Vidyaranyapura, Bengaluru
                                            <br />
                                            Karnataka — 560097
                                        </p>

                                        <a
                                            href="https://www.google.com/maps/search/?api=1&query=Regency+PU+College+Vidyaranyapura+Bengaluru"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 mt-4 text-regency-burgundy font-semibold text-sm hover:text-regency-rose transition-colors"
                                        >
                                            Find Us on Google Maps
                                            <ArrowUpRight size={16} />
                                        </a>
                                    </div>
                                </div>

                                {/* PHONE */}
                                <div className="flex gap-5">
                                    <Phone
                                        className="text-regency-rose shrink-0"
                                        size={25}
                                    />

                                    <div>
                                        <h3 className="font-semibold text-regency-burgundy">
                                            Phone
                                        </h3>

                                        <p className="text-regency-ink/70 mt-2">
                                            Contact number to be confirmed
                                        </p>
                                    </div>
                                </div>

                                {/* EMAIL */}
                                <div className="flex gap-5">
                                    <Mail
                                        className="text-regency-rose shrink-0"
                                        size={25}
                                    />

                                    <div>
                                        <h3 className="font-semibold text-regency-burgundy">
                                            Email
                                        </h3>

                                        <p className="text-regency-ink/70 mt-2">
                                            Official email to be confirmed
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Reveal>

                    {/* RIGHT SIDE - ENQUIRY FORM */}
                    <Reveal delay={0.1}>
                        <div className="bg-regency-cream rounded-3xl p-5 sm:p-8 md:p-10 border border-regency-ink/10 shadow-sm">

                            <div className="bg-white rounded-2xl p-5 sm:p-7 md:p-8">
                                <EnquiryForm />
                            </div>

                        </div>
                    </Reveal>

                </div>
            </section>

        </main>
    );
}

export default Contact;
