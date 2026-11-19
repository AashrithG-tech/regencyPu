
import { Link } from "react-router-dom";
import {
    MapPin,
    ArrowUpRight,

} from "lucide-react";
import { collegeInfo } from "../data/college";
import { navigationLinks } from "../data/navigation";
import { motion } from "framer-motion";

function Footer() {

    return (
        <motion.footer className="bg-regency-ink text-regency-cream">

            {/* Main Footer */}
            <div className="container-width py-16">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div className="lg:col-span-2">

                        <Link to="/" className="inline-flex items-center gap-3">
                            <div className="w-12 h-12 bg-regency-gold rounded-full flex items-center justify-center">
                <span className="font-heading text-2xl text-regency-ink">
                  R
                </span>
                            </div>

                            <div>
                                <h2 className="font-heading text-2xl font-semibold">
                                    REGENCY
                                </h2>
                                <p className="text-[10px] tracking-[0.25em] uppercase text-regency-cream/70">
                                    Pre-University College
                                </p>
                            </div>
                        </Link>

                        <p className="text-sm text-regency-cream/70 leading-7 mt-6 max-w-md">
                            {collegeInfo.description}
                        </p>

                        <div className="flex items-start gap-3 mt-6 text-sm text-regency-cream/80">
                            <MapPin size={19} className="text-regency-gold shrink-0 mt-1" />

                            <p>
                                {collegeInfo.location}, Karnataka
                            </p>
                        </div>

                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-heading text-xl mb-6">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-4">
                            {navigationLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="text-sm text-regency-cream/70 hover:text-regency-gold transition-colors w-fit"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Admissions */}
                    <div>
                        <h3 className="font-heading text-xl mb-6">
                            Begin Your Journey
                        </h3>

                        <p className="text-sm text-regency-cream/70 leading-7 mb-6">
                            Explore the academic opportunities at Regency PU College.
                        </p>

                        <Link
                            to="/admissions"
                            className="inline-flex items-center gap-3 bg-regency-gold text-regency-ink px-6 py-3 rounded-full text-sm font-semibold hover:bg-regency-cream transition-colors"
                        >
                            Admission Enquiry
                            <ArrowUpRight size={17} />
                        </Link>

                    </div>

                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">

                <div className="container-width py-6 flex flex-col md:flex-row items-center justify-between gap-4">

                    <p className="text-xs text-regency-cream/50 text-center">
                        © {new Date().getFullYear()} Regency PU College.
                        All rights reserved.
                    </p>

                    <p className="text-xs text-regency-cream/50">
                        Established {collegeInfo.established}
                    </p>

                </div>

            </div>

        </motion.footer>
    );
}

export default Footer;
