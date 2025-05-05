import profile1 from "@/assets/profile-photos/user-01.png";
import profile2 from "@/assets/profile-photos/user-02.png";
import profile3 from "@/assets/profile-photos/user-03.png";
import profile4 from "@/assets/profile-photos/user-04.png";

export const info = {
    name: "DG Home & Roofing",
    owner: "Roy Caba",
    phone: "0800 123 4567",
    email: "homes@dgventures.net",
    address: "123 Main St, Wellington",
    incorporated: 2006,
    hours: "Monday-Friday: 7am-5pm",
    socials: [
        {
            name: "Facebook",
            href: "#",
            icon: "lucide:facebook",
        },
        {
            name: "Instagram",
            href: "#",
            icon: "lucide:instagram",
        },
    ],
};

export const header: { cta: string; links: { label: string; href: string }[] } = {
    cta: "Free Estimate",
    links: [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Service Areas", href: "/service-areas" },
        { label: "About", href: "/about" },
        { label: "Past Work", href: "/past-work" },
        { label: "Contact", href: "/contact" },
    ],
};

export const hero = {
    bgImg: "bg-[url('https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop')]",
    h1: "Custom Tiny Homes & Trusted Roofing Solutions",
    h2: "From handcrafted small homes to durable, high-quality roofing — DG Home & Roofing brings your vision to life with craftsmanship you can count on.",
    cta: "Request a Free Design Consult",
    features: [
        {
            icon: "lucide:clock",
            title: "On-Time Delivery",
            description: "Projects completed on schedule—every time.",
        },
        {
            icon: "lucide:map-pin",
            title: "Locally Owned",
            description: "Proudly serving Wellington since 2006.",
        },
    ],
};

export const reviews = {
    badge: "Customer Testimonials",
    header: "Your Neighbours Love Our Work",
    description:
        "Whether it's a custom tiny home or a reliable new roof, our clients across Wellington rave about the quality, care, and craftsmanship we bring to every project.",
    cta: "See All Reviews",
    list: [
        {
            id: 1,
            name: "Sareena K",
            location: "Karori, Wellington",
            rating: 5,
            text: "If you’re looking for a reliable, efficient, and trustworthy contractor, you’ve definitely come to the right place. DG Roofing Team is the absolute best and really knows how to deliver. You won’t be let down!",
            date: "June 22, 2023",
            image: profile2,
            provider: "google-icon",
        },
        {
            id: 2,
            name: "Catherine B",
            location: "Lower Hutt, Wellington",
            rating: 5,
            text: `Thank you again for all your hard work and being so flexible. We didn't expect you to work so late or on the weekends like you did, but you really put 200% in to get the job done. All 'above and beyond' stuff. It's been very appreciated. :-)`,
            date: "July 10, 2023",
            image: profile1,
            provider: "google-icon",
        },

        {
            id: 3,
            name: "Jessie B",
            location: "Petone, Wellington",
            rating: 5,
            text: "I’m so happy I chose to work with DG Team from the initial consultation all the way through the project’s conclusion, the service I received was impeccable and the end result really brought my vision to life - truly impressive final result. The team at DG Roofing is really talented, with the skills and expertise to get the job done right. Highly recommended!",
            date: "May 15, 2023",
            image: profile3,
            provider: "facebook",
        },
        {
            id: 4,
            name: "Patricia Miller",
            location: "Mount Cook, Wellington",
            rating: 5,
            text: "DG Home & Roofing helped us design a beautiful tiny retreat for our backyard. The workmanship is top-notch and the process was stress-free from start to finish.",
            date: "April 30, 2023",
            image: profile4,
            provider: "facebook",
        },
    ],
};

export const teamDetails = {
    badge: "Leadership",
    cta: "Schedule a Free Consultation",
    about: {
        header: "Meet the Owner - Roy Caba",
        description:
            "Roy Caba is the founder and driving force behind DG Home & Roofing, bringing over two decades of expertise in both roofing and custom tiny home construction. With a passion for innovative design and reliable craftsmanship, Roy treats every project as if it were his own home. Whether it’s a roofing project or the creation of a custom tiny home, Roy’s hands-on approach ensures quality and satisfaction. He is dedicated to fostering long-term relationships with clients, delivering results that exceed expectations while enhancing the beauty and functionality of every property.",
        philosophy:
            "Our philosophy is simple: great homes and roofs start with great people. We invite you to schedule a free consultation today and see for yourself the dedication and craftsmanship that set DG Home & Roofing apart.",
        note: "Proudly serving Wellington and surrounding areas for over 20 years",
    },
    credentials: {
        header: "Roy Caba’s Credentials",
        note: "Roy constantly seeks professional growth, staying at the forefront of industry trends to ensure the highest standards of quality.",
        list: [
            "Licensed Builder & General Contractor",
            "Certified Roofing Specialist",
            "Tiny Home Design & Build Expert",
            "GAF Master Elite® Contractor",
            "OSHA Safety Certified",
            "Local Business Owner",
        ],
    },
    testimonial: {
        header: "Client Testimonial",
        text: "Roy and his team did an amazing job building our tiny home. They were professional, thorough, and the attention to detail was beyond our expectations. We love our new space and are so thankful to DG Home & Roofing for making it happen.",
        author: "Liam and Sophie Brown",
        location: "Wellington, NZ",
    },
    owner: {
        name: "Roy Caba",
        position: "Founder & Owner",
        image: "/placeholder.svg?height=600&width=600&text=Roy",
        experience: "20+ years of industry experience",
        contact: {
            header: "",
            phone: "(0800) 123-4567",
            email: "info@dgventures.net",
            social: {
                linkedin: "#",
                instagram: "#",
                facebook: "#",
            },
        },
    },
};

export const whyUs = {
    badge: "The Superior Choice",
    header: "Why Choose DG Home & Roofing",
    description:
        "With over 20 years of experience, we deliver both top-quality roofing solutions and custom tiny homes, combining expert craftsmanship, premium materials, and personalized service for every project.",
    benefits: [
        {
            title: "20+ Years of Industry Experience",
            description:
                "Whether it’s roofing or tiny home construction, we’ve handled every project with precision and care, solving all kinds of challenges along the way.",
            image: "/placeholder.svg?height=300&width=300&text=Experience",
        },
        {
            title: "Top-Quality Materials",
            description:
                "We source only the best materials for roofing and tiny home construction, ensuring your home or roof stands the test of time.",
            image: "/placeholder.svg?height=300&width=300&text=Materials",
        },
        {
            title: "Skilled, Expert Craftsmanship",
            description:
                "Our experienced team delivers meticulous, high-quality work, from roofing installations to the design and construction of your dream tiny home.",
            image: "/placeholder.svg?height=300&width=300&text=Craftsmanship",
        },
    ],
    guarantees: {
        header: "Our Guarantees to You",
        description:
            "We stand behind the quality of our work, offering strong guarantees and warranties for peace of mind on every project.",
        list: [
            "100% Customer Satisfaction Guarantee",
            "5-Year Workmanship Warranty",
            "Free No-Obligation Estimates",
            "Transparent Pricing - No Hidden Fees",
            "Fully Licensed, Bonded & Insured",
            "Clean Job Sites & Thorough Cleanup",
        ],
    },
    testimonial: {
        header: "Hear From Our Customers",
        description:
            '"DG Home & Roofing helped us design and build a beautiful tiny home in our backyard. The entire process was seamless, and the craftsmanship exceeded our expectations."',
        name: "Emily & Dave Carter, Homeowners",
        cta: "Read More Testimonials",
    },
};

export const services = {
    header: "Our Roofing & Tiny Home Services",
    description:
        "We provide a wide range of roofing services and custom tiny home solutions, ensuring high-quality results for both residential and commercial properties.",
    cta: "View All Services",

    list: [
        {
            id: 1,
            title: "Residential Roofing",
            description:
                "Complete solutions including new installations, re-roofing, and repairs—using quality materials built to last for your home.",
            icon: "lucide:home",
            link: "#",
        },
        {
            id: 2,
            title: "Commercial Roofing",
            description:
                "Durable, low-disruption roofing services for commercial buildings, warehouses, and offices, backed by expert installation and support.",
            icon: "lucide:building-2",
            link: "#",
        },
        {
            id: 3,
            title: "Tiny Home Design & Build",
            description:
                "Custom tiny homes designed and built to match your lifestyle, with functionality, comfort, and craftsmanship in mind.",
            icon: "lucide:box",
            link: "#",
        },
        {
            id: 4,
            title: "Storm Damage Repair",
            description:
                "Rapid response and insurance assistance for wind, hail, and storm-damaged roofs—restoring protection fast.",
            icon: "lucide:cloud-rain",
            link: "#",
        },
        {
            id: 5,
            title: "Roof Maintenance & Inspection",
            description:
                "Preventative maintenance, expert inspections, and roof consulting services to extend lifespan and ensure peace of mind.",
            icon: "lucide:search-check",
            link: "#",
        },
        {
            id: 6,
            title: "Gutter Installation & Repair",
            description:
                "New gutter installs, leak repairs, and cleaning—ensuring proper drainage and preventing water damage.",
            icon: "lucide:ruler",
            link: "#",
        },
        {
            id: 7,
            title: "Skylight & Sun Tunnel Installation",
            description:
                "Bring more natural light into your home with affordable skylight and sun tunnel installations or replacements.",
            icon: "lucide:sun",
            link: "#",
        },
        {
            id: 8,
            title: "Chimney Removal & Reflashing",
            description:
                "Safe removal of unused chimneys or professional reflashing to eliminate leaks and improve roof integrity.",
            icon: "lucide:flame",
            link: "#",
        },
        {
            id: 9,
            title: "Roof Design & Consultancy",
            description:
                "Discuss concerns, noise issues, or potential leaks—get expert roof design improvements and trustworthy guidance.",
            icon: "lucide:layout-dashboard",
            link: "#",
        },
        {
            id: 10,
            title: "Licensed Asbestos Removal",
            description:
                "Work with licensed Class A & B asbestos removalists to ensure safe and compliant removal of hazardous materials.",
            icon: "lucide:biohazard",
            link: "#",
        },
    ],
};

export const process = {
    header: "Our Proven Approach",
    description:
        "Whether it’s a roofing project or the design and build of your custom tiny home, we follow a customer-focused process to ensure quality, transparency, and minimal disruption throughout.",
    cta: "Start Your Project with Us",
    steps: [
        {
            number: 1,
            title: "Initial Consultation",
            description:
                "We start with a comprehensive consultation to understand your needs, whether it's a roofing project or building your dream tiny home. Our experts will offer insights and options tailored to your goals.",
            benefits: [
                "Free, no-obligation consultation",
                "Detailed assessment of project scope",
                "Expert recommendations based on your vision",
            ],
        },
        {
            number: 2,
            title: "Custom Proposal",
            description:
                "We present a detailed proposal, including transparent pricing, material options, and timelines for both roofing and tiny home projects.",
            benefits: ["Transparent pricing", "Material selection options", "Clear project timeline"],
        },
        {
            number: 3,
            title: "Project Preparation",
            description:
                "After approval, we schedule the project, order high-quality materials, and prepare for a smooth execution. Whether it’s your roof or a tiny home, everything is set for success.",
            benefits: ["Convenient scheduling", "Premium materials", "Thorough project preparation"],
        },
        {
            number: 4,
            title: "Skilled Installation & Build",
            description:
                "Our experienced team executes your roofing installation or tiny home build with meticulous attention to detail, adhering to industry best practices and ensuring excellent craftsmanship.",
            benefits: ["Expert installation and build team", "Adherence to industry standards", "Daily site cleanup"],
        },
        {
            number: 5,
            title: "Final Inspection & Walk-Through",
            description:
                "We perform a detailed inspection of the finished roof or tiny home, ensuring everything meets our high-quality standards and addressing any concerns during a final walk-through.",
            benefits: ["Thorough quality check", "Walk-through with you", "Immediate resolution of any issues"],
        },
        {
            number: 6,
            title: "Warranty & Ongoing Support",
            description:
                "Your project comes with strong warranties, along with our ongoing support for any future needs, whether related to your roof or your tiny home.",
            benefits: ["Manufacturer warranties", "Workmanship guarantees", "Ongoing support and maintenance"],
        },
    ],
};

export const pastWork = {
    badge: "Our Portfolio",
    header: "Featured Projects",
    description:
        "Browse through our showcase of completed roofing and tiny home projects, where quality and craftsmanship meet functionality and design.",
    featuredProject: {
        title: "Custom Tiny Home Build",
        description:
            "A fully customized tiny home designed for sustainability and comfort, featuring modern finishes, efficient space planning, and eco-friendly materials.",
        location: "Wellington, NZ",
        before: "/placeholder.svg?height=500&width=700&text=Before",
        after: "/placeholder.svg?height=500&width=700&text=After",
        testimonial:
            "We absolutely love our new tiny home! The team at DG Home & Roofing truly listened to our vision and brought it to life with great attention to detail. It’s more than we ever imagined!",
        client: "Emily & Dave Carter",
    },
    categories: [
        {
            name: "Residential Roofing",
            count: 124,
            image: "/placeholder.svg?height=200&width=300&text=Residential",
        },
        {
            name: "Commercial Roofing",
            count: 57,
            image: "/placeholder.svg?height=200&width=300&text=Commercial",
        },
        {
            name: "Tiny Home Builds",
            count: 32,
            image: "/placeholder.svg?height=200&width=300&text=Tiny+Homes",
        },
        {
            name: "Repairs & Renovations",
            count: 89,
            image: "/placeholder.svg?height=200&width=300&text=Repairs",
        },
    ],
};

export const faqs = {
    header: "Frequently Asked Questions",
    description:
        "Find answers to common questions about our roofing services, tiny home builds, process, and materials.",
    list: [
        {
            question: "How long does a typical roof replacement take?",
            answer: "Most residential roof replacements take 1-3 days to complete, depending on the size and complexity of your roof. Larger homes or those with complex roof designs may take longer. Commercial projects typically take 2-10 days. We’ll provide you with a specific timeline during your consultation.",
        },
        {
            question: "How long does it take to build a custom tiny home?",
            answer: "The timeline for building a custom tiny home varies based on the complexity and design, but typically ranges from 4 to 8 weeks. During your consultation, we’ll give you a more accurate timeline based on your specific project.",
        },
        {
            question: "What roofing materials do you offer?",
            answer: "We offer a wide range of roofing materials including asphalt shingles, metal roofing, tile, slate, and flat roofing systems like TPO and EPDM. Each material has its own benefits, lifespan, and price point. Our experts can help you choose the best option for your specific needs and budget during your consultation.",
        },
        {
            question: "Do you provide warranties on your roofing work?",
            answer: "Yes, we provide comprehensive warranties on both materials and workmanship. Our material warranties typically range from 25-50 years depending on the product, and we offer a 5-year workmanship warranty on all installations. This means you're covered for both manufacturing defects and installation issues.",
        },
        {
            question: "How much does a new roof or tiny home cost?",
            answer: "The cost of a new roof depends on several factors including the size of your roof, the materials you choose, the complexity of the installation, and any existing damage that needs to be repaired. Tiny home pricing varies based on design, materials, and custom features. We provide free, detailed estimates for both after a thorough inspection or consultation.",
        },
        {
            question: "Do you offer financing options?",
            answer: "Yes, we offer flexible financing options to help make both roofing projects and tiny home builds more affordable. We work with several financing partners to provide competitive rates and terms. During your consultation, we can discuss the various financing options available to you.",
        },
        {
            question: "Will you help with my insurance claim?",
            answer: "Absolutely. If your roof was damaged by a storm or other covered event, we can help you navigate the insurance claim process. Our team has extensive experience working with insurance companies and can assist with documentation, inspections, and ensuring you receive the coverage you're entitled to.",
        },
        {
            question: "How do I know if I need a roof repair or a complete replacement?",
            answer: "Several factors determine whether you need a repair or replacement, including the age of your roof, the extent of damage, and your long-term plans for the property. During our free inspection, we'll assess the condition of your roof and provide honest recommendations based on what makes the most sense for your situation.",
        },
        {
            question: "Are you licensed and insured?",
            answer: "Yes, we are fully licensed, bonded, and insured. We carry comprehensive liability insurance and workers' compensation coverage to protect both our team and your property. We’re happy to provide proof of insurance upon request.",
        },
    ],
};

export const areas = {
    header: "Our Service Areas",
    description:
        "We proudly serve these communities with top-tier roofing services and custom tiny home builds. Contact us to see if we cover your location.",
    list: [
        "Wellington Central",
        "Upper Hutt",
        "Lower Hutt",
        "Porirua",
        "Kapiti Coast",
        "Petone",
        "Johnsonville",
        "Tawa",
        "Miramar",
        "Eastbourne",
    ],
};
