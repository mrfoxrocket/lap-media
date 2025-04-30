import { Phone, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import AnimatedRoof from "./animated-roof";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";
import WeatherWidget from "./weather-widget";

const navigationItems = [
    {
        title: "Services",
        href: "#services",
        children: [
            {
                title: "Waterproofing",
                href: "#waterproofing",
            },
            {
                title: "Driveways",
                href: "#driveways",
            },
            {
                title: "Roofing",
                href: "#roofing",
            },
            {
                title: "Flat Roofing",
                href: "#flat-roofing",
            },
            {
                title: "Repairs",
                href: "#repairs",
            },
            {
                title: "Commercial Roofing",
                href: "#commercial",
            },
        ],
    },
    {
        title: "About Us",
        href: "#about",
        children: [
            {
                title: "Our Story",
                href: "#story",
            },
            {
                title: "Our Team",
                href: "#team",
            },
            {
                title: "Our Values",
                href: "#values",
            },
            {
                title: "Certifications",
                href: "#certifications",
            },
        ],
    },
    {
        title: "Our Process",
        href: "#process",
    },
    {
        title: "Projects",
        href: "#projects",
        children: [
            {
                title: "Residential",
                href: "#residential-projects",
            },
            {
                title: "Commercial",
                href: "#commercial-projects",
            },
            {
                title: "Recent Work",
                href: "#recent-work",
            },
            {
                title: "Case Studies",
                href: "#case-studies",
            },
        ],
    },
    {
        title: "Testimonials",
        href: "#testimonials",
    },
    {
        title: "Contact",
        href: "#contact",
    },
];

export default function SiteHeader() {
    return (
        <header className="sticky top-0 z-40 backdrop-blur-md bg-white/80 border-b">
            <div className="container flex h-20 items-center justify-between py-4">
                <div className="flex items-center gap-2">
                    <a href="/" className="flex items-center gap-2">
                        <div className="relative h-12 w-12 overflow-hidden">
                            <AnimatedRoof />
                        </div>
                        <div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-600">
                                Canterbury Roofing
                            </span>
                            <p className="text-xs text-muted-foreground">Christchurch's Premier Roofing Specialists</p>
                        </div>
                    </a>
                </div>

                <MainNav items={navigationItems} />

                <div className="flex items-center gap-4">
                    <WeatherWidget />
                    <a href="tel:+6433555555" className="hidden md:flex items-center gap-2 text-sm">
                        <div className="relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-teal-500 rounded-full blur opacity-30"></div>
                            <div className="relative bg-white rounded-full p-1.5">
                                <Phone className="h-4 w-4 text-primary" />
                            </div>
                        </div>
                        <span>03 355 5555</span>
                    </a>
                    <Button className="relative group overflow-hidden hidden md:inline-flex" size="lg">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-500 to-primary group-hover:opacity-0 transition-opacity duration-300"></span>
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <span className="relative flex items-center gap-2">
                            <a href="#contact">Get a Free Quote</a>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                    </Button>

                    <MobileNav items={navigationItems} />
                </div>
            </div>
        </header>
    );
}
