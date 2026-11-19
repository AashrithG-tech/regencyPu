
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Reveal from "../components/Reveal";

const pageDetails: Record<string, {
    title: string;
    category: string;
    description: string;
}> = {
    "/about/vision-mission": {
        title: "Vision & Mission",
        category: "About Regency",
        description: "Learn about the educational values and aspirations of Regency PU College.",
    },
    "/about/principal-message": {
        title: "Principal's Message",
        category: "About Regency",
        description: "A message from the leadership of Regency PU College.",
    },
    "/about/faculty": {
        title: "Our Faculty",
        category: "About Regency",
        description: "Meet the educators supporting students in their academic journey.",
    },
    "/academics/science": {
        title: "Science",
        category: "Academics",
        description: "Explore the Science stream and its academic pathways.",
    },
    "/academics/commerce": {
        title: "Commerce",
        category: "Academics",
        description: "Explore the Commerce stream and its academic pathways.",
    },
    "/academics/cet-coaching": {
        title: "CET Coaching",
        category: "Academics",
        description: "Programme information will be published after confirmation by the college.",
    },
    "/academics/neet": {
        title: "NEET Programme",
        category: "Academics",
        description: "Programme information will be published after confirmation by the college.",
    },
    "/academics/tally": {
        title: "Tally Certification",
        category: "Academics",
        description: "Programme information will be published after confirmation by the college.",
    },
    "/admissions/process": {
        title: "Admission Process",
        category: "Admissions",
        description: "Official admission procedures and requirements will be published here.",
    },
    "/admissions/rules": {
        title: "Rules & Regulations",
        category: "Admissions",
        description: "College-approved rules and regulations will be published here.",
    },
    "/campus-life/facilities": {
        title: "Facilities",
        category: "Campus Life",
        description: "Explore the learning environment and facilities at Regency PU College.",
    },
    "/campus-life/sports": {
        title: "Sports & Activities",
        category: "Campus Life",
        description: "Explore sports, extracurricular activities and student development.",
    },
};

function DetailPage() {
    const { pathname } = useLocation();
    const page = pageDetails[pathname];

    if (!page) return null;

    return (
        <main className="min-h-[70vh] bg-regency-cream">
            <section className="container-width py-24 md:py-32">

                <Reveal>
                    <p className="uppercase tracking-[0.25em] text-xs font-semibold text-regency-rose mb-6">
                        {page.category}
                    </p>

                    <h1 className="font-heading text-5xl md:text-7xl text-regency-burgundy max-w-4xl">
                        {page.title}
                    </h1>

                    <p className="text-regency-ink/70 leading-8 mt-8 max-w-2xl">
                        {page.description}
                    </p>

                    <p className="text-regency-ink/60 text-sm mt-5">
                        Detailed information is being prepared for publication.
                    </p>

                    <Link
                        to="/"
                        className="inline-flex items-center gap-3 mt-10 text-regency-burgundy font-semibold"
                    >
                        <ArrowLeft size={18} />
                        Back to Home
                    </Link>
                </Reveal>

            </section>
        </main>
    );
}

export default DetailPage;
