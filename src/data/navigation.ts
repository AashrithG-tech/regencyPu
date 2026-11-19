
export interface NavigationItem {
    name: string;
    path: string;
    children?: {
        name: string;
        path: string;
    }[];
}

export const navigationLinks: NavigationItem[] = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About",
        path: "/about",
        children: [
            { name: "About Regency", path: "/about" },
            { name: "Vision & Mission", path: "/about/vision-mission" },
            { name: "Principal's Message", path: "/about/principal-message" },
            { name: "Faculty", path: "/about/faculty" },
        ],
    },
    {
        name: "Academics",
        path: "/academics",
        children: [
            { name: "Academic Overview", path: "/academics" },
            { name: "Science", path: "/academics/science" },
            { name: "Commerce", path: "/academics/commerce" },
            { name: "CET Coaching", path: "/academics/cet-coaching" },
            { name: "NEET Programme", path: "/academics/neet" },
            { name: "Tally Certification", path: "/academics/tally" },
        ],
    },
    {
        name: "Admissions",
        path: "/admissions",
        children: [
            { name: "Admissions Overview", path: "/admissions" },
            { name: "Admission Process", path: "/admissions/process" },
            { name: "Rules & Regulations", path: "/admissions/rules" },
        ],
    },
    {
        name: "Campus Life",
        path: "/campus-life",
        children: [
            { name: "Campus Overview", path: "/campus-life" },
            { name: "Facilities", path: "/campus-life/facilities" },
            { name: "Sports & Activities", path: "/campus-life/sports" },
        ],
    },
    {
        name: "Gallery",
        path: "/gallery",
    },
    {
        name: "Contact",
        path: "/contact",
    },
];
