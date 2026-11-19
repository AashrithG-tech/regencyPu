
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";

function AdmissionsCTA() {
    return (
        <section className="relative overflow-hidden bg-regency-burgundy py-24 md:py-32">

            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-white/10" />
            <div className="absolute -bottom-60 -left-40 w-[600px] h-[600px] rounded-full border border-regency-gold/20" />

            <div className="container-width relative z-10 text-center">

                <Reveal>
                    <p className="text-regency-gold uppercase tracking-[0.3em] text-xs font-semibold mb-7">
                        Your Journey Begins Here
                    </p>

                    <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight max-w-4xl mx-auto">
                        Every great future
                        <span className="italic block text-regency-gold">
              begins with a strong foundation.
            </span>
                    </h2>

                    <p className="text-white/75 mt-8 max-w-xl mx-auto leading-8">
                        Discover the opportunities available at Regency PU College
                        and take the next step in your academic journey.
                    </p>

                    <Link
                        to="/admissions"
                        className="inline-flex items-center gap-3 mt-10 bg-regency-gold text-regency-ink px-8 py-4 rounded-full font-semibold hover:bg-white transition-all hover:-translate-y-1"
                    >
                        Explore Admissions
                        <ArrowUpRight size={19} />
                    </Link>
                </Reveal>

            </div>

        </section>
    );
}

export default AdmissionsCTA;
