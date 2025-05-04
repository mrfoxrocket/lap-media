import { useState } from "react";
import {
  Calendar,
  Mail,
  Phone,
  Quote,
  Star,
  ArrowRight,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";
import { info, teamDetails } from "./data";

const Team = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/10 rounded-full -ml-12 -mb-12 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section with enhanced styling */}
          <div className="w-full lg:w-2/5">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-3"></div>
              <div className="relative z-10 bg-background p-3 rounded-2xl shadow-lg transform -rotate-2">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src={teamDetails.owner.image || "/placeholder.svg"}
                    alt={teamDetails.owner.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating credentials card */}
              <div className="absolute -bottom-6 z-999 -right-6 bg-accent text-accent-foreground p-4 rounded-lg shadow-lg max-w-[200px]">
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm font-medium">
                  {teamDetails.owner.experience}
                </p>
              </div>
            </div>

            {/* Contact information card */}
            <div className="bg-background border border-muted rounded-lg p-4 mt-12 shadow-sm">
              <h3 className="font-bold text-lg text-foreground mb-3">
                Contact Directly
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <a
                    href={`tel:${teamDetails.owner.contact.phone}`}
                    className="hover:text-primary transition-colors"
                  >
                    {teamDetails.owner.contact.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <a
                    href={`mailto:${teamDetails.owner.contact.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {teamDetails.owner.contact.email}
                  </a>
                </div>
                <div className="flex items-center pt-2">
                  <a
                    href={teamDetails.owner.contact.social.linkedin}
                    className="bg-primary/10 p-2 rounded-full mr-2 hover:bg-primary/20 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                  </a>
                  <a
                    href={teamDetails.owner.contact.social.instagram}
                    className="bg-primary/10 p-2 rounded-full mr-2 hover:bg-primary/20 transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-primary" />
                  </a>
                  <a
                    href={teamDetails.owner.contact.social.facebook}
                    className="bg-primary/10 p-2 rounded-full mr-2 hover:bg-primary/20 transition-colors"
                  >
                    <Facebook className="h-5 w-5 text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section with tabs */}
          <div className="w-full lg:w-3/5">
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {teamDetails.badge}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              MEET THE TEAM BEHIND <br className="hidden md:block" />
              {info.name.toUpperCase()}
            </h2>

            <div className="inline-flex bg-muted rounded-lg p-1 mb-6">
              {["about", "credentials", "testimonial"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === tab
                      ? "bg-background shadow-sm"
                      : "hover:bg-background/50"
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {activeTab === "about" && (
              <div className="space-y-4 animate-fadeIn">
                <div className="bg-accent/10 border-l-4 border-accent p-4 mb-6">
                  <p className="font-bold text-lg">
                    {teamDetails.about.header}
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {teamDetails.about.description}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {teamDetails.about.philosophy}
                </p>
                <div className="flex items-center mt-2">
                  <Calendar className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm">{teamDetails.about.note}</span>
                </div>
              </div>
            )}

            {activeTab === "credentials" && (
              <div className="animate-fadeIn">
                <div className="bg-accent/10 border-l-4 border-accent p-4 mb-6">
                  <p className="font-bold text-lg">
                    {teamDetails.credentials.header}
                  </p>
                </div>
                <ul className="space-y-3">
                  {teamDetails.credentials.list.map((credential, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <span className="font-bold text-primary">
                          {index + 1}
                        </span>
                      </div>
                      <span>{credential}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <p className="text-muted-foreground">
                    {teamDetails.credentials.note}
                  </p>
                </div>
              </div>
            )}

            {activeTab === "testimonial" && (
              <div className="animate-fadeIn">
                <div className="bg-accent/10 border-l-4 border-accent p-4 mb-6">
                  <p className="font-bold text-lg">
                    {teamDetails.testimonial.header}
                  </p>
                </div>
                <div className="bg-background border border-muted rounded-lg p-6 shadow-sm">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  <p className="text-lg italic mb-4">
                    {teamDetails.testimonial.text}
                  </p>
                  <div className="flex items-center">
                    <div className="mr-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-bold text-primary">
                          {teamDetails.testimonial.author.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold">
                        {teamDetails.testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {teamDetails.testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8">
              <button className="bg-primary flex items-center rounded-md px-4 py-2 hover:bg-primary/90 text-primary-foreground">
                {teamDetails.cta} <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
