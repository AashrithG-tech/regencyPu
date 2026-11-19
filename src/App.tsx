
import { useEffect } from "react";

import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";

import {
    AnimatePresence,
    motion,
    useReducedMotion,
} from "framer-motion";

// Global components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";


import CampusLife from "./pages/CampusLife";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

import DetailPage from "./pages/DetailPage";


import Science from "./pages/Science";
import Commerce from "./pages/Commerce";
import VisionMission from "./pages/VisionMission";


import PrincipalMessage from "./pages/PrincipalMessage";
import Faculty from "./pages/Faculty";
import Facilities from "./pages/Facilities";
import SportsActivities from "./pages/SportsActivities";
import AdmissionProcess from "./pages/AdmissionProcess";
import RulesRegulations from "./pages/RulesRegulations";





// Scroll to top when route changes

function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = decodeURIComponent(hash.slice(1));

            // Allow the new route to render before scrolling
            const frame = requestAnimationFrame(() => {
                document.getElementById(id)?.scrollIntoView({
                    behavior: "instant",
                    block: "start",
                });
            });

            return () => cancelAnimationFrame(frame);
        }

        window.scrollTo({ top: 0, behavior: "instant" });
    }, [pathname, hash]);

    return null;
}




// Main application layout
function AppLayout() {
    const location = useLocation();
    const shouldReduceMotion = useReducedMotion();

    return (
        <>
            <ScrollToTop />

            <Navbar />

            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={location.pathname}
                    initial={
                        shouldReduceMotion
                            ? false
                            : { opacity: 0, y: 16 }
                    }
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    exit={
                        shouldReduceMotion
                            ? undefined
                            : { opacity: 0, y: -12 }
                    }
                    transition={{
                        duration: shouldReduceMotion ? 0 : 0.4,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <Routes location={location}>
                        <Route path="/" element={<Home />} />

                        <Route path="/about" element={<About />} />

                        <Route
                            path="/academics"
                            element={<Academics />}
                        />

                        <Route
                            path="/admissions"
                            element={<Admissions />}
                        />


                        <Route
                            path="/about/principal-message"
                            element={<PrincipalMessage />}
                        />

                        <Route
                            path="/about/faculty"
                            element={<Faculty />}
                        />

                        <Route
                            path="/campus-life/facilities"
                            element={<Facilities />}
                        />

                        <Route
                            path="/campus-life/sports"
                            element={<SportsActivities />}
                        />

                        <Route
                            path="/admissions/process"
                            element={<AdmissionProcess />}
                        />

                        <Route
                            path="/admissions/rules"
                            element={<RulesRegulations />}
                        />



                        <Route path="/academics/science" element={<Science />} />
                        <Route path="/academics/commerce" element={<Commerce />} />
                        <Route path="/about/vision-mission" element={<VisionMission />} />



                        <Route path="/about/:page" element={<DetailPage />} />
                        <Route path="/academics/:page" element={<DetailPage />} />
                        <Route path="/admissions/:page" element={<DetailPage />} />
                        <Route path="/campus-life/:page" element={<DetailPage />} />



                        <Route path="/campus-life" element={<CampusLife />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/contact" element={<Contact />} />

                    </Routes>
                </motion.div>
            </AnimatePresence>

            <Footer />
        </>
    );
}

// Root application
function App() {
    return (
        <BrowserRouter>
            <AppLayout />
        </BrowserRouter>
    );
}

export default App;
