
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { collegeInfo } from "../data/college";

import AboutSection from "../sections/AboutSection";
import AcademicsSection from "../sections/AcademicsSection";
import CampusSection from "../sections/CampusSection";
import AdmissionsCTA from "../sections/AdmissionsCTA";



const heroContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.16,
            delayChildren: 0.15,
        },
    },
};




function Home() {
    return (
        <>
            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-regency-cream">

                <motion.div className="container-width min-h-[680px] grid lg:grid-cols-2 items-center gap-14 py-20">

                    {/* LEFT CONTENT */}
                    <motion.div
                        className="relative z-10"
                        variants={heroContainer}
                        initial="hidden"
                        animate="visible"
                    >

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-regency-rose uppercase tracking-[0.25em] text-xs md:text-sm font-semibold mb-7"
                        >
                            Vidyaranyapura · Bengaluru
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="font-heading text-5xl sm:text-6xl lg:text-7xl text-regency-burgundy leading-[1.08]"
                        >
                            A foundation for knowledge.

                            <span className="block italic text-regency-rose mt-2">
                            A future without limits.
                             </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.25 }}
                            className="mt-8 text-regency-ink/75 leading-8 text-base max-w-xl"
                        >
                            {collegeInfo.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="flex flex-wrap gap-4 mt-10"
                        >

                            <Link
                                to="/academics"
                                className="inline-flex items-center gap-3 bg-regency-burgundy text-white px-7 py-4 rounded-full text-sm font-medium hover:bg-regency-rose transition-all hover:-translate-y-1"
                            >
                                Explore Academics
                                <ArrowUpRight size={17} />
                            </Link>

                            <Link
                                to="/admissions"
                                className="inline-flex items-center gap-3 border border-regency-burgundy/30 text-regency-burgundy px-7 py-4 rounded-full text-sm font-medium hover:bg-regency-burgundy hover:text-white transition-all"
                            >
                                Admissions
                                <ArrowRight size={17} />
                            </Link>

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="mt-14 flex items-center gap-4"
                        >
                            <div className="h-px w-12 bg-regency-gold" />

                            <p className="text-xs tracking-[0.15em] uppercase text-regency-ink/60">
                                Established {collegeInfo.established}
                            </p>
                        </motion.div>

                    </motion.div>

                    {/* RIGHT VISUAL - NO PHOTO REQUIRED */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative min-h-[420px] lg:min-h-[520px] flex items-center justify-center"
                    >

                        <div className="absolute inset-5 rounded-t-full rounded-b-[45%] bg-gradient-to-br from-regency-rose via-regency-burgundy to-regency-ink overflow-hidden">

                            {/* Decorative circles */}
                            <div className="absolute -top-24 -right-16 w-80 h-80 border border-white/15 rounded-full" />

                            <div className="absolute -top-10 -right-4 w-64 h-64 border border-white/15 rounded-full" />

                            <div className="absolute -bottom-36 -left-20 w-96 h-96 border border-regency-gold/30 rounded-full" />

                            {/* Large letter */}
                            <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-heading text-[280px] sm:text-[340px] text-white/[0.10] leading-none select-none">
                  R
                </span>
                            </div>

                            {/* Centre content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">

                                <div className="w-16 h-px bg-regency-gold mb-8" />

                                <p className="text-regency-gold uppercase tracking-[0.35em] text-xs mb-5">
                                    The Regency Experience
                                </p>

                                <h2 className="font-heading text-white text-4xl sm:text-5xl leading-tight">
                                    Learning.
                                    <br />
                                    Growing.
                                    <br />
                                    Becoming.
                                </h2>

                                <div className="w-16 h-px bg-regency-gold mt-8" />

                            </div>

                        </div>

                        {/* Decorative floating label */}
                        <div className="absolute bottom-8 -left-1 sm:left-0 bg-regency-cream shadow-xl px-5 py-4 rounded-xl">
                            <p className="text-xs text-regency-rose uppercase tracking-widest">
                                Our commitment
                            </p>
                            <p className="font-heading text-lg text-regency-burgundy mt-1">
                                Beyond the classroom.
                            </p>
                        </div>

                    </motion.div>

                </motion.div>

            </section>

            {/* VALUES SECTION */}
            <section className="bg-white py-20">

                <div className="container-width">

                    <Reveal>
                        <div className="max-w-2xl mb-14">
                            <p className="text-regency-rose uppercase tracking-[0.2em] text-xs font-semibold mb-4">
                                The Regency Difference
                            </p>

                            <h2 className="font-heading text-4xl md:text-5xl text-regency-burgundy leading-tight">
                                Education that goes beyond academics.
                            </h2>

                            <p className="mt-5 text-regency-ink/70 leading-8">
                                A learning environment focused on academic growth,
                                personal development and the values that shape individuals.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {collegeInfo.differentiators.map((item, index) => (
                            <Reveal key={item.title} delay={index * 0.1}>
                                <div className="h-full border border-regency-ink/10 p-7 rounded-2xl hover:border-regency-gold hover:-translate-y-1 transition-all duration-300">

                  <span className="font-heading text-4xl text-regency-gold">
                    0{index + 1}
                  </span>

                                    <h3 className="font-heading text-xl text-regency-burgundy mt-7">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm leading-7 text-regency-ink/65 mt-4">
                                        {item.description}
                                    </p>

                                </div>
                            </Reveal>
                        ))}

                    </div>

                </div>

            </section>
                <AboutSection />
                <AcademicsSection />
                <CampusSection />
                <AdmissionsCTA />

        </>
    );
}

export default Home;
