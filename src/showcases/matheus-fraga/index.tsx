import { Mail, Phone, MapPin, Facebook, Instagram, Clock, CheckCircle, ArrowRight, Droplet } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedRoof from "./animated-roof";
import ContactForm from "./contact-form";
import ProcessTimeline from "./process-timeline";
import RoofingCalculator from "./roofing-calculator";
import ServiceCard from "./service-card";
import SiteHeader from "./site-header";
import TestimonialCard from "./testimonial-card";
import { InfiniteMovingCardsDemo } from "./infinite-testimonial";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col transition-colors bg-linear-to-b from-white to-gray-50">
            <SiteHeader />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-r from-black/70 to-primary/70 z-10" />
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                    <div className="absolute inset-0 mix-blend-overlay opacity-20 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat" />

                    <div className="container relative z-20 py-20 md:py-32 lg:py-40">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block rounded-full bg-white/10 backdrop-blur-xs px-4 py-1 text-sm text-white border border-white/20">
                                    Christchurch's Most Trusted Roofing Specialists
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                    Protecting Canterbury Homes <span className="text-teal-300">One Roof</span> at a
                                    Time
                                </h1>
                                <p className="text-xl text-white/80 max-w-md">
                                    Expert residential and commercial roofing and waterproofing solutions tailored to
                                    Canterbury's unique climate.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Button
                                        size="lg"
                                        asChild
                                        className="bg-primary text-white hover:bg-primary/80 group"
                                    >
                                        <a href="#contact" className="flex items-center gap-2">
                                            Get a Free Quote
                                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </a>
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        asChild
                                        className="border-white text-primary hover:bg-white/80"
                                    >
                                        <a href="#calculator">Estimate Your Project</a>
                                    </Button>
                                </div>
                                <div className="flex flex-wrap gap-6 pt-4">
                                    <div className="flex items-center gap-2">
                                        <div className="rounded-full bg-teal-300/50 p-1">
                                            <CheckCircle className="h-4 w-4 text-white" />
                                        </div>
                                        <span className="text-white text-sm">15+ Years Experience</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="rounded-full bg-teal-300/50 p-1">
                                            <CheckCircle className="h-4 w-4 text-white" />
                                        </div>
                                        <span className="text-white text-sm">Canterbury Owned</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="rounded-full bg-teal-300/50 p-1">
                                            <CheckCircle className="h-4 w-4 text-white" />
                                        </div>
                                        <span className="text-white text-sm">10 Year Warranty</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-1 bg-linear-to-r from-teal-500 to-primary rounded-2xl blur-lg opacity-70"></div>
                                <Card className="relative overflow-hidden border-0 shadow-2xl">
                                    <CardContent className="p-0">
                                        <div className="absolute top-4 right-4 z-10 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                                            Limited Time Offer
                                        </div>
                                        <div className="p-6 pt-12 bg-white">
                                            <h3 className="text-2xl font-bold mb-2">Autumn Special</h3>
                                            <p className="text-muted-foreground mb-4">
                                                Book before winter and receive:
                                            </p>
                                            <ul className="space-y-2 mb-6">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                                                    <span>Free roof inspection & report</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                                                    <span>15% off waterproofing services</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                                                    <span>Extended 12-year warranty</span>
                                                </li>
                                            </ul>
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="text-sm text-muted-foreground">Offer ends:</div>
                                                <div className="font-medium">June 30, 2025</div>
                                            </div>
                                            <Button
                                                className="w-full transition-colors bg-linear-to-r from-primary to-teal-600 hover:from-teal-600 hover:to-primary"
                                                asChild
                                            >
                                                <a href="#contact">Claim Offer Now</a>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-white to-transparent z-10"></div>
                </section>

                {/* Trusted By Section */}
                <section className="py-12 border-b">
                    <div className="container">
                        <div className="text-center mb-8">
                            <h2 className="text-lg font-medium text-muted-foreground">
                                Trusted by Canterbury's Top Businesses
                            </h2>
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                                <img
                                    src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    width={120}
                                    height={40}
                                    className="h-8 w-auto object-contain bg-white/80 rounded px-2"
                                />
                            </div>
                            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                                <img
                                    src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    width={120}
                                    height={40}
                                    className="h-8 w-auto object-contain bg-white/80 rounded px-2"
                                />
                            </div>
                            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                                <img
                                    src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    width={120}
                                    height={40}
                                    className="h-8 w-auto object-contain bg-white/80 rounded px-2"
                                />
                            </div>
                            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                                <img
                                    src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    width={120}
                                    height={40}
                                    alt="Client logo"
                                    className="h-8 w-auto object-contain bg-white/80 rounded px-2"
                                />
                            </div>
                            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                                <img
                                    src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    width={120}
                                    height={40}
                                    className="h-8 w-auto object-contain bg-white/80 rounded px-2"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-20">
                    <div className="container space-y-12">
                        <div className="text-center space-y-4 max-w-3xl mx-auto">
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <div className="h-px w-8 bg-primary"></div>
                                <span className="text-sm font-medium text-primary">Our Expertise</span>
                                <div className="h-px w-8 bg-primary"></div>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Comprehensive Roofing & Waterproofing Solutions
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                From residential repairs to commercial installations, we provide tailored solutions for
                                Canterbury's unique climate
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="md:col-span-3 relative overflow-hidden rounded-2xl">
                                <div className="absolute inset-0 bg-linear-to-r from-primary/90 to-teal-600/90 z-10" />
                                <img
                                    src="https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?q=80&w=2070&auto=format&fit=crop"
                                    width={1200}
                                    height={300}
                                    className="w-full h-48 md:h-64 object-cover"
                                />
                                <div className="absolute inset-0 z-20 flex items-center justify-center p-6 md:p-12">
                                    <div className="text-center text-white space-y-4 max-w-2xl">
                                        <h3 className="text-2xl md:text-3xl font-bold">
                                            Canterbury Weather-Ready Solutions
                                        </h3>
                                        <p className="text-white/80">
                                            Our roofing and waterproofing systems are specifically engineered to
                                            withstand Canterbury's unique weather patterns, from frosty winters to hot,
                                            dry summers and everything in between.
                                        </p>
                                        <Button
                                            variant="outline"
                                            className="border-white text-primary hover:bg-primary hover:text-white transition-colors"
                                            asChild
                                        >
                                            <a href="#contact">Learn About Our Materials</a>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <ServiceCard
                                title="Waterproofing"
                                description="Advanced membrane systems that create impenetrable barriers against moisture, protecting your property's foundation and structure."
                                icon="droplet"
                                imageSrc="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
                                accentColor="from-blue-500 to-teal-500"
                            />
                            <ServiceCard
                                title="Driveways"
                                description="Durable, weather-resistant driveway installations with integrated drainage systems and premium waterproofing technology."
                                icon="road"
                                imageSrc="https://images.unsplash.com/photo-1617720356637-6264c1c0b4bb?q=80&w=2069&auto=format&fit=crop"
                                accentColor="from-slate-500 to-gray-700"
                            />
                            <ServiceCard
                                title="Roofing"
                                description="Comprehensive roofing solutions using premium materials engineered to withstand Canterbury's diverse weather conditions."
                                icon="home"
                                imageSrc="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                                accentColor="from-primary to-teal-600"
                            />
                            <ServiceCard
                                title="Flat Roofing"
                                description="Specialized flat roof systems with advanced waterproofing membranes and proper drainage solutions for maximum durability."
                                icon="square"
                                imageSrc="https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=2070&auto=format&fit=crop"
                                accentColor="from-teal-500 to-emerald-600"
                            />
                            <ServiceCard
                                title="Repairs"
                                description="Prompt, thorough repair services that address the root cause of leaks and damage to prevent future issues."
                                icon="tool"
                                imageSrc="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
                                accentColor="from-amber-500 to-orange-600"
                            />
                            <ServiceCard
                                title="Commercial Roofing"
                                description="Heavy-duty commercial solutions designed for longevity, energy efficiency, and minimal maintenance requirements."
                                icon="building"
                                imageSrc="https://images.unsplash.com/photo-1545259741-2ea3ebf92f67?q=80&w=2070&auto=format&fit=crop"
                                accentColor="from-gray-700 to-slate-900"
                            />
                        </div>

                        <div className="flex justify-center pt-8">
                            <Button
                                size="lg"
                                className="bg-linear-to-r from-primary to-teal-600 transition-colors hover:from-teal-600 hover:to-primary group"
                                asChild
                            >
                                <a href="#contact" className="flex items-center gap-2">
                                    Request a Service Quote
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* About Us / Why Choose Us */}
                <section id="about" className="py-20 bg-linear-to-b from-gray-50 to-white">
                    <div className="container">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative">
                                <div className="absolute -inset-4 md:-inset-10 bg-linear-to-r from-primary/20 to-teal-500/20 rounded-3xl blur-xl"></div>
                                <div className="relative grid grid-cols-2 gap-4">
                                    <div className="space-y-4">
                                        <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                                            <img
                                                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
                                                width={250}
                                                height={300}
                                                alt="Our team at work"
                                                className="w-full h-auto object-cover"
                                            />
                                        </div>
                                        <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                                            <img
                                                src="https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?q=80&w=2070&auto=format&fit=crop"
                                                width={250}
                                                height={200}
                                                alt="Completed project"
                                                className="w-full h-auto object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-4 pt-10">
                                        <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                                            <img
                                                src="https://images.unsplash.com/photo-1635424715426-9083bcb9b429?q=80&w=2068&auto=format&fit=crop"
                                                width={250}
                                                height={200}
                                                alt="Roofing materials"
                                                className="w-full h-auto object-cover"
                                            />
                                        </div>
                                        <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                                            <img
                                                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
                                                width={250}
                                                height={300}
                                                alt="Waterproofing process"
                                                className="w-full h-auto object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="h-px w-8 bg-primary"></div>
                                        <span className="text-sm font-medium text-primary">About Us</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                        Canterbury's Roofing Experts Since 2010
                                    </h2>
                                    <p className="text-muted-foreground text-lg mb-6">
                                        Born and raised in Canterbury, we understand the unique challenges our region's
                                        climate presents. From the frosty Christchurch winters to the nor'wester winds
                                        and everything in between, our solutions are specifically engineered for local
                                        conditions.
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                                        <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                                            <CheckCircle className="h-6 w-6 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">Local Expertise</h3>
                                        <p className="text-muted-foreground">
                                            Deep understanding of Canterbury's unique weather patterns and building
                                            requirements
                                        </p>
                                    </div>
                                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                                        <div className="rounded-full bg-teal-500/10 p-3 w-fit mb-4">
                                            <Droplet className="h-6 w-6 text-teal-500" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">Premium Materials</h3>
                                        <p className="text-muted-foreground">
                                            We use only top-grade, weather-tested materials with proven performance in
                                            NZ conditions
                                        </p>
                                    </div>
                                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                                        <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                                            <CheckCircle className="h-6 w-6 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">Certified Team</h3>
                                        <p className="text-muted-foreground">
                                            Fully licensed, insured professionals with ongoing training in latest
                                            techniques
                                        </p>
                                    </div>
                                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                                        <div className="rounded-full bg-teal-500/10 p-3 w-fit mb-4">
                                            <Droplet className="h-6 w-6 text-teal-500" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">10-Year Warranty</h3>
                                        <p className="text-muted-foreground">
                                            We stand behind our work with comprehensive warranties and ongoing support
                                        </p>
                                    </div>
                                </div>

                                <Button
                                    className="bg-linear-to-r from-primary to-teal-600 hover:from-teal-600 hover:to-primary group"
                                    asChild
                                >
                                    <a href="#contact" className="flex items-center gap-2">
                                        Get to Know Our Team
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Timeline */}
                <section id="process" className="py-20 bg-linear-to-b from-white to-gray-50">
                    <div className="container space-y-12">
                        <div className="text-center space-y-4 max-w-3xl mx-auto">
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <div className="h-px w-8 bg-primary"></div>
                                <span className="text-sm font-medium text-primary">Our Process</span>
                                <div className="h-px w-8 bg-primary"></div>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold">The Canterbury Roofing Experience</h2>
                            <p className="text-muted-foreground text-lg">
                                Our streamlined process ensures quality, transparency, and satisfaction at every step
                            </p>
                        </div>

                        <ProcessTimeline />
                    </div>
                </section>

                {/* Calculator Section */}
                <section id="calculator" className="py-20 bg-linear-to-r from-primary to-teal-600 text-white">
                    <div className="container">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-block rounded-full bg-white/10 backdrop-blur-xs px-4 py-1 text-sm border border-white/20">
                                    Exclusive Online Tool
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold">Estimate Your Roofing Project</h2>
                                <p className="text-white/80 text-lg">
                                    Our interactive calculator gives you a quick estimate based on your roof size and
                                    service needs. Get an instant ballpark figure before your detailed quote.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button
                                        size="lg"
                                        className="bg-primary text-white hover:bg-primary/80 border border-white"
                                        asChild
                                    >
                                        <a href="#contact">Get an Exact Quote</a>
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-white text-primary hover:bg-white/80"
                                        asChild
                                    >
                                        <a href="#" target="_blank" rel="noopener noreferrer">
                                            Download Our Guide
                                        </a>
                                    </Button>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-xl text-gray-900">
                                <RoofingCalculator />
                            </div>
                        </div>
                    </div>
                </section>

                <InfiniteMovingCardsDemo />

                {/* Testimonials */}
                <section id="testimonials" className="py-20">
                    <div className="container space-y-12">
                        <div className="text-center space-y-4 max-w-3xl mx-auto">
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <div className="h-px w-8 bg-primary"></div>
                                <span className="text-sm font-medium text-primary">Testimonials</span>
                                <div className="h-px w-8 bg-primary"></div>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
                            <p className="text-muted-foreground text-lg">
                                Don't just take our word for it - hear from satisfied clients across the region
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <TestimonialCard
                                quote="After the 2011 earthquake damaged our roof, we tried several companies for repairs. Canterbury Roofing was the only one that provided a permanent solution. 10 years later and still no leaks!"
                                author="Sarah Johnson"
                                location="Merivale, Christchurch"
                                rating={5}
                                imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop"
                                projectType="Roof Replacement"
                            />
                            <TestimonialCard
                                quote="The team waterproofed our basement that had been leaking for years. Even through the wettest winter in recent memory, it's remained completely dry. Their attention to detail was impressive."
                                author="David Thompson"
                                location="Rangiora, Canterbury"
                                rating={5}
                                imageSrc="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop"
                                projectType="Basement Waterproofing"
                            />
                            <TestimonialCard
                                quote="As a commercial property manager, I've worked with many roofing companies. These guys are by far the most reliable and provide the best value for money. They're now our exclusive roofing partner."
                                author="Michael Chen"
                                location="CBD, Christchurch"
                                rating={5}
                                imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop"
                                projectType="Commercial Roofing"
                            />
                        </div>

                        <div className="flex justify-center pt-8">
                            <Button
                                variant="outline"
                                className="border-primary text-primary hover:bg-primary hover:text-white"
                                asChild
                            >
                                <a href="#">Read More Success Stories</a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Recent Projects */}
                <section className="py-20 bg-linear-to-b from-gray-50 to-white">
                    <div className="container space-y-12">
                        <div className="text-center space-y-4 max-w-3xl mx-auto">
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <div className="h-px w-8 bg-primary"></div>
                                <span className="text-sm font-medium text-primary">Our Work</span>
                                <div className="h-px w-8 bg-primary"></div>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold">Recent Canterbury Projects</h2>
                            <p className="text-muted-foreground text-lg">
                                Browse our latest work across Canterbury and see how we've helped homeowners and
                                businesses protect their properties
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="group relative overflow-hidden rounded-xl shadow-lg">
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1591588582259-e675bd2e6088?q=80&w=2070&auto=format&fit=crop"
                                    width={600}
                                    height={400}
                                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                    <div className="text-white">
                                        <div className="bg-primary/80 text-white text-xs inline-block px-2 py-1 rounded mb-2">
                                            Residential
                                        </div>
                                        <h3 className="font-bold text-xl mb-1">Modern Roof Replacement</h3>
                                        <p className="text-white/80 text-sm mb-3">Cashmere, Christchurch</p>
                                        <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            Complete roof replacement with premium materials and integrated rainwater
                                            collection system.
                                        </p>
                                        <Button
                                            variant="link"
                                            className="text-white p-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            asChild
                                        >
                                            <a href="#" className="flex items-center gap-1">
                                                View Project <ArrowRight className="h-3 w-3" />
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="group relative overflow-hidden rounded-xl shadow-lg">
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1565636291277-cd0d6a92d451?q=80&w=2070&auto=format&fit=crop"
                                    width={600}
                                    height={400}
                                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                    <div className="text-white">
                                        <div className="bg-teal-600/80 text-white text-xs inline-block px-2 py-1 rounded mb-2">
                                            Commercial
                                        </div>
                                        <h3 className="font-bold text-xl mb-1">Office Building Waterproofing</h3>
                                        <p className="text-white/80 text-sm mb-3">CBD, Christchurch</p>
                                        <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            Complete exterior waterproofing solution for a 5-story commercial building
                                            with custom drainage.
                                        </p>
                                        <Button
                                            variant="link"
                                            className="text-white p-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            asChild
                                        >
                                            <a href="#" className="flex items-center gap-1">
                                                View Project <ArrowRight className="h-3 w-3" />
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="group relative overflow-hidden rounded-xl shadow-lg">
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1597047084897-51e81819a499?q=80&w=2069&auto=format&fit=crop"
                                    width={600}
                                    height={400}
                                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                    <div className="text-white">
                                        <div className="bg-primary/80 text-white text-xs inline-block px-2 py-1 rounded mb-2">
                                            Residential
                                        </div>
                                        <h3 className="font-bold text-xl mb-1">Premium Driveway Installation</h3>
                                        <p className="text-white/80 text-sm mb-3">Rolleston, Canterbury</p>
                                        <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            Custom designed driveway with integrated drainage and advanced waterproofing
                                            membrane.
                                        </p>
                                        <Button
                                            variant="link"
                                            className="text-white p-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            asChild
                                        >
                                            <a href="#" className="flex items-center gap-1">
                                                View Project <ArrowRight className="h-3 w-3" />
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center pt-8">
                            <Button
                                className="bg-linear-to-r from-primary to-teal-600 hover:from-teal-600 hover:to-primary"
                                asChild
                            >
                                <a href="#">View All Projects</a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* CTA Banner */}
                <section id="contact" className="py-20 bg-linear-to-r from-primary to-teal-600 text-white">
                    <div className="container">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold">
                                    Ready to Protect Your Canterbury Property?
                                </h2>
                                <p className="text-xl text-white/80">
                                    Whether you need a roof repair, full replacement, or waterproofing solution, we're
                                    here to help. Contact us for a no-obligation quote.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-white/10 backdrop-blur-xs rounded-xl p-4 border border-white/20">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="bg-white/20 rounded-full p-2">
                                                <Phone className="h-5 w-5" />
                                            </div>
                                            <h3 className="font-medium">Call Us</h3>
                                        </div>
                                        <a href="tel:+6433555555" className="text-lg font-medium hover:underline">
                                            03 355 5555
                                        </a>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-xs rounded-xl p-4 border border-white/20">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="bg-white/20 rounded-full p-2">
                                                <Mail className="h-5 w-5" />
                                            </div>
                                            <h3 className="font-medium">Email Us</h3>
                                        </div>
                                        <a
                                            src="mailto:info@canterburyroofing.co.nz"
                                            className="text-lg font-medium hover:underline"
                                        >
                                            info@canterburyroofing.co.nz
                                        </a>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-xs rounded-xl p-4 border border-white/20">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="bg-white/20 rounded-full p-2">
                                                <MapPin className="h-5 w-5" />
                                            </div>
                                            <h3 className="font-medium">Visit Us</h3>
                                        </div>
                                        <address className="not-italic">123 Main Street, Christchurch</address>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-xs rounded-xl p-4 border border-white/20">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="bg-white/20 rounded-full p-2">
                                                <Clock className="h-5 w-5" />
                                            </div>
                                            <h3 className="font-medium">Hours</h3>
                                        </div>
                                        <p>Monday-Friday: 7am-5pm</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="bg-white rounded-xl p-6 shadow-xl text-gray-900">
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold mb-2">Request a Free Quote</h3>
                                        <p className="text-muted-foreground">
                                            Fill out the form below and we'll get back to you within 24 hours
                                        </p>
                                    </div>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="py-20">
                    <div className="container">
                        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl font-bold">Serving All of Canterbury</h2>
                            <p className="text-muted-foreground text-lg">
                                Based in Christchurch, we provide roofing and waterproofing services throughout the
                                Canterbury region
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg border">
                            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                                <p className="text-muted-foreground">
                                    Interactive map of service area would be displayed here
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                            <div className="bg-gray-50 rounded-lg p-3 text-center hover:bg-primary hover:text-white transition-colors">
                                <p className="font-medium">Christchurch</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3 text-center hover:bg-primary hover:text-white transition-colors">
                                <p className="font-medium">Selwyn</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3 text-center hover:bg-primary hover:text-white transition-colors">
                                <p className="font-medium">Waimakariri</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3 text-center hover:bg-primary hover:text-white transition-colors">
                                <p className="font-medium">Ashburton</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3 text-center hover:bg-primary hover:text-white transition-colors">
                                <p className="font-medium">Hurunui</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3 text-center hover:bg-primary hover:text-white transition-colors">
                                <p className="font-medium">Timaru</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-gray-900 text-white pt-16 pb-8">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="relative h-10 w-10 overflow-hidden">
                                    <AnimatedRoof isWhite={true} />
                                </div>
                                <div>
                                    <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-teal-300">
                                        Canterbury Roofing
                                    </span>
                                    <p className="text-xs text-gray-400">Christchurch's Premier Roofing Specialists</p>
                                </div>
                            </div>
                            <p className="text-gray-400">
                                Professional roofing and waterproofing services across Christchurch and Canterbury since
                                2010.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Facebook className="h-5 w-5" />
                                    <span className="sr-only">Facebook</span>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Instagram className="h-5 w-5" />
                                    <span className="sr-only">Instagram</span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4 text-lg">Services</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Waterproofing
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Driveways
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Roofing
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Flat Roofing
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Repairs
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Commercial Roofing
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4 text-lg">Service Areas</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Christchurch City
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Selwyn District
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Waimakariri District
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Ashburton
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        Hurunui
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        All Canterbury Region
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4 text-lg">Contact</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">
                                    <Phone className="h-4 w-4 text-teal-400" />
                                    <span>03 355 5555</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-teal-400" />
                                    <span>info@canterburyroofing.co.nz</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-teal-400" />
                                    <span>123 Main Street, Christchurch</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-teal-400" />
                                    <span>Monday-Friday: 7am-5pm</span>
                                </li>
                            </ul>
                            <Button className="mt-4 bg-white text-primary hover:bg-gray-100" asChild>
                                <a href="#contact">Get a Quote</a>
                            </Button>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
                        <p>
                            &copy; {new Date().getFullYear()} Canterbury Roofing & Waterproofing. All rights reserved.
                        </p>
                        <div className="flex justify-center gap-4 mt-4 text-sm">
                            <a href="#" className="hover:text-white transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                Sitemap
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
