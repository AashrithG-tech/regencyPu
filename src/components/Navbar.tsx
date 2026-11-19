
import { useEffect, useRef, useState } from "react";
import {
    Link,
    NavLink,
    useLocation,
} from "react-router-dom";

import {
    Menu,
    X,
    ArrowUpRight,
    ChevronDown,
} from "lucide-react";

import {
    AnimatePresence,
    motion,
    useReducedMotion,
} from "framer-motion";

import { navigationLinks } from "../data/navigation";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

    const location = useLocation();
    const shouldReduceMotion = useReducedMotion();
    const navRef = useRef<HTMLElement>(null);

    // Close menus when route changes
    useEffect(() => {
        setIsMenuOpen(false);
        setActiveDropdown(null);
        setMobileDropdown(null);
    }, [location.pathname]);

    // Close menus on Escape or outside click
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActiveDropdown(null);
                setMobileDropdown(null);
                setIsMenuOpen(false);
            }
        }

        function handlePointerDown(event: PointerEvent) {
            if (
                navRef.current &&
                !navRef.current.contains(event.target as Node)
            ) {
                setActiveDropdown(null);
            }
        }

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("pointerdown", handlePointerDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("pointerdown", handlePointerDown);
        };
    }, []);

    const isCurrentSection = (path: string) =>
        path === "/"
            ? location.pathname === "/"
            : location.pathname === path ||
            location.pathname.startsWith(`${path}/`);

    return (
        <motion.header
            ref={navRef}
            className="sticky top-0 z-50 bg-regency-cream/95 backdrop-blur-md border-b border-regency-ink/10"
        >
            <nav className="container-width h-20 flex items-center justify-between gap-4">

                {/* LOGO */}
                <Link
                    to="/"
                    className="flex items-center gap-3 shrink-0"
                    aria-label="Regency PU College home"
                >
                    <div className="w-11 h-11 bg-regency-burgundy rounded-full flex items-center justify-center">
            <span className="font-heading text-2xl text-white">
              R
            </span>
                    </div>

                    <div>
                        <p className="font-heading text-xl font-semibold text-regency-burgundy leading-tight">
                            REGENCY
                        </p>

                        <p className="text-[9px] tracking-[0.2em] uppercase text-regency-ink">
                            PU College · Bengaluru
                        </p>
                    </div>
                </Link>

                {/* DESKTOP NAVIGATION */}
                <div className="hidden lg:flex items-center gap-4 xl:gap-6">

                    {navigationLinks.map((link) => {
                        const hasChildren = Boolean(link.children?.length);
                        const isActive = isCurrentSection(link.path);
                        const isOpen = activeDropdown === link.name;
                        const dropdownId = `desktop-menu-${link.path.replaceAll("/", "-") || "home"}`;

                        return (
                            <div
                                key={link.path}
                                className="relative flex items-center"
                                onMouseEnter={() => {
                                    if (hasChildren) setActiveDropdown(link.name);
                                }}
                                onMouseLeave={() => {
                                    if (hasChildren) setActiveDropdown(null);
                                }}
                                onBlur={(event) => {
                                    if (!event.currentTarget.contains(event.relatedTarget)) {
                                        setActiveDropdown(null);
                                    }
                                }}
                            >
                                <NavLink
                                    to={link.path}
                                    end={link.path === "/"}
                                    className={`text-sm font-medium transition-colors whitespace-nowrap ${
                                        isActive
                                            ? "text-regency-burgundy"
                                            : "text-regency-ink hover:text-regency-rose"
                                    }`}
                                >
                                    {link.name}
                                </NavLink>

                                {hasChildren && (
                                    <button
                                        type="button"
                                        aria-label={`${isOpen ? "Close" : "Open"} ${link.name} submenu`}
                                        aria-expanded={isOpen}
                                        aria-controls={dropdownId}
                                        onClick={() =>
                                            setActiveDropdown(isOpen ? null : link.name)
                                        }
                                        className="ml-1 p-1 text-regency-ink hover:text-regency-rose"
                                    >
                                        <ChevronDown
                                            size={15}
                                            className={`transition-transform duration-200 ${
                                                isOpen ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>
                                )}

                                <AnimatePresence>
                                    {hasChildren && isOpen && (
                                        <motion.div
                                            id={dropdownId}
                                            initial={
                                                shouldReduceMotion
                                                    ? false
                                                    : { opacity: 0, y: 8 }
                                            }
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={
                                                shouldReduceMotion
                                                    ? undefined
                                                    : { opacity: 0, y: 8 }
                                            }
                                            transition={{ duration: 0.18 }}
                                            className="absolute top-full left-0 pt-5 min-w-[250px] z-50"
                                        >
                                            <div className="bg-white rounded-2xl shadow-xl border border-regency-ink/10 p-2">

                                                {link.children?.map((child) => (
                                                    <NavLink
                                                        key={child.path}
                                                        to={child.path}
                                                        end
                                                        onClick={() => setActiveDropdown(null)}
                                                        className={({ isActive: childActive }) =>
                                                            `block px-4 py-3 rounded-xl text-sm transition-colors ${
                                                                childActive
                                                                    ? "bg-regency-cream text-regency-burgundy font-semibold"
                                                                    : "text-regency-ink hover:bg-regency-cream hover:text-regency-burgundy"
                                                            }`
                                                        }
                                                    >
                                                        {child.name}
                                                    </NavLink>
                                                ))}

                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}

                </div>

                {/* DESKTOP CTA */}
                <Link
                    to="/admissions#enquiry"
                    className="hidden lg:inline-flex items-center gap-2 bg-regency-burgundy text-white px-4 xl:px-5 py-3 rounded-full text-sm font-medium hover:bg-regency-rose transition-colors whitespace-nowrap shrink-0"
                >
                    Enquire Now
                    <ArrowUpRight size={16} />
                </Link>

                {/* MOBILE TOGGLE */}
                <button
                    type="button"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setIsMenuOpen((previous) => !previous)}
                    className="lg:hidden text-regency-burgundy p-2"
                >
                    {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>

            </nav>

            {/* MOBILE NAVIGATION */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        id="mobile-navigation"
                        initial={
                            shouldReduceMotion
                                ? false
                                : { opacity: 0, height: 0 }
                        }
                        animate={{ opacity: 1, height: "auto" }}
                        exit={
                            shouldReduceMotion
                                ? undefined
                                : { opacity: 0, height: 0 }
                        }
                        transition={{ duration: 0.25 }}
                        className="lg:hidden bg-regency-cream border-t border-regency-ink/10 overflow-hidden"
                    >
                        <div className="container-width py-5 max-h-[75vh] overflow-y-auto">

                            <div className="flex flex-col gap-1">

                                {navigationLinks.map((link) => {
                                    const hasChildren = Boolean(link.children?.length);
                                    const isExpanded = mobileDropdown === link.name;
                                    const isActive = isCurrentSection(link.path);
                                    const mobileId = `mobile-menu-${link.path.replaceAll("/", "-") || "home"}`;

                                    return (
                                        <div key={link.path} className="border-b border-regency-ink/10 last:border-0">

                                            <div className="flex items-center justify-between">

                                                <NavLink
                                                    to={link.path}
                                                    end={link.path === "/"}
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className={`flex-1 py-3 text-base font-medium ${
                                                        isActive
                                                            ? "text-regency-burgundy"
                                                            : "text-regency-ink"
                                                    }`}
                                                >
                                                    {link.name}
                                                </NavLink>

                                                {hasChildren && (
                                                    <button
                                                        type="button"
                                                        aria-label={`${isExpanded ? "Collapse" : "Expand"} ${link.name} submenu`}
                                                        aria-expanded={isExpanded}
                                                        aria-controls={mobileId}
                                                        onClick={() =>
                                                            setMobileDropdown(isExpanded ? null : link.name)
                                                        }
                                                        className="p-3 text-regency-burgundy"
                                                    >
                                                        <ChevronDown
                                                            size={19}
                                                            className={`transition-transform duration-200 ${
                                                                isExpanded ? "rotate-180" : ""
                                                            }`}
                                                        />
                                                    </button>
                                                )}

                                            </div>

                                            <AnimatePresence>
                                                {hasChildren && isExpanded && (
                                                    <motion.div
                                                        id={mobileId}
                                                        initial={
                                                            shouldReduceMotion
                                                                ? false
                                                                : { opacity: 0, height: 0 }
                                                        }
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={
                                                            shouldReduceMotion
                                                                ? undefined
                                                                : { opacity: 0, height: 0 }
                                                        }
                                                        transition={{ duration: 0.2 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="flex flex-col pb-3 pl-4 border-l-2 border-regency-gold ml-2">

                                                            {link.children?.map((child) => (
                                                                <NavLink
                                                                    key={child.path}
                                                                    to={child.path}
                                                                    end
                                                                    onClick={() => setIsMenuOpen(false)}
                                                                    className={({ isActive: childActive }) =>
                                                                        `py-2.5 px-3 text-sm rounded-lg ${
                                                                            childActive
                                                                                ? "text-regency-burgundy font-semibold bg-white"
                                                                                : "text-regency-ink/80 hover:text-regency-burgundy"
                                                                        }`
                                                                    }
                                                                >
                                                                    {child.name}
                                                                </NavLink>
                                                            ))}

                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                        </div>
                                    );
                                })}

                                <Link
                                    to="/admissions#enquiry"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="bg-regency-burgundy text-white text-center py-3 rounded-full font-medium mt-5"
                                >
                                    Enquire Now
                                </Link>

                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </motion.header>
    );
}

export default Navbar;
