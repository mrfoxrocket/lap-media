import profile1 from "@/assets/profile-photos/user-01.png";
import profile2 from "@/assets/profile-photos/user-02.png";
import profile3 from "@/assets/profile-photos/user-03.png";
import profile4 from "@/assets/profile-photos/user-04.png";

export const info = {
    name: "Canterbury Roofing & Waterproofing",
    owner: "Matheus Fraga",
    phone: "0800 123 4567",
    email: "info@canterburyroofing.co.nz ",
    address: "123 Main St, Chirstchurch",
    incorporated: 2000,
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
    h2: "From handcrafted small homes to durable, high-quality roofing—DG Home & Roofing brings your vision to life with craftsmanship you can count on.",
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
            name: "Robert Johnson",
            location: "Lower Hutt, Wellington",
            rating: 5,
            text: `I cannot say enough good things about ${info.name}. From the initial consultation to the final inspection, every step was handled with professionalism and care. The crew was respectful of our property, worked efficiently, and left no mess behind. Our new roof looks fantastic and has already withstood several heavy storms without issue. I highly recommend them to anyone needing roofing services.`,
            date: "July 10, 2023",
            image: profile1,
            provider: "google-icon",
        },
        {
            id: 2,
            name: "Jennifer Williams",
            location: "Karori, Wellington",
            rating: 5,
            text: "Our tiny home build went smoother than we ever expected. Matheus and the team were transparent, communicative, and clearly take pride in what they do. Highly recommend!",
            date: "June 22, 2023",
            image: profile2,
            provider: "google-icon",
        },
        {
            id: 3,
            name: "Thomas Brown",
            location: "Petone, Wellington",
            rating: 5,
            text: "They replaced our roof after storm damage and handled everything—including the insurance side. Honest, efficient, and a pleasure to work with.",
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
        header: "Meet the Owner - Matheus Fraga",
        description:
            "Matheus Fraga is the founder and driving force behind DG Home & Roofing, bringing over two decades of expertise in both roofing and custom tiny home construction. With a passion for innovative design and reliable craftsmanship, Matheus treats every project as if it were his own home. Whether it’s a roofing project or the creation of a custom tiny home, Matheus’s hands-on approach ensures quality and satisfaction. He is dedicated to fostering long-term relationships with clients, delivering results that exceed expectations while enhancing the beauty and functionality of every property.",
        philosophy:
            "Our philosophy is simple: great homes and roofs start with great people. We invite you to schedule a free consultation today and see for yourself the dedication and craftsmanship that set DG Home & Roofing apart.",
        note: "Proudly serving Wellington and surrounding areas for over 20 years",
    },
    credentials: {
        header: "Matheus Fraga’s Credentials",
        note: "Matheus constantly seeks professional growth, staying at the forefront of industry trends to ensure the highest standards of quality.",
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
        text: "Matheus and his team did an amazing job building our tiny home. They were professional, thorough, and the attention to detail was beyond our expectations. We love our new space and are so thankful to DG Home & Roofing for making it happen.",
        author: "Liam and Sophie Brown",
        location: "Wellington, NZ",
    },
    owner: {
        name: "Matheus Fraga",
        position: "Founder & Owner",
        image: "/placeholder.svg?height=600&width=600&text=Matheus",
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
                "Complete roofing solutions for homes of all sizes, including installation, replacement, and repair services, with quality materials built to last.",
            icon: "lucide:home",
            link: "#",
        },
        {
            id: 2,
            title: "Commercial Roofing",
            description:
                "Specialized roofing services for businesses, warehouses, and commercial properties with minimal disruption and long-lasting results.",
            icon: "lucide:building-2",
            link: "#",
        },
        {
            id: 3,
            title: "Tiny Home Design & Build",
            description:
                "Custom tiny homes designed to suit your needs, with expert craftsmanship and attention to detail for a beautiful, functional living space.",
            icon: "lucide:box",
            link: "#",
        },
        {
            id: 4,
            title: "Storm Damage Repair",
            description:
                "Emergency roofing services and insurance claim assistance for roofs damaged by storms, wind, or hail, ensuring quick and reliable fixes.",
            icon: "lucide:cloud-rain",
            link: "#",
        },
        {
            id: 5,
            title: "Roof Maintenance",
            description:
                "Preventative roof maintenance programs that extend the life of your roof, saving you from costly repairs and unexpected damages.",
            icon: "lucide:hammer",
            link: "#",
        },
        {
            id: 6,
            title: "Gutter Installation & Repair",
            description:
                "Professional gutter installation and repair services to ensure proper water drainage and protect your property from water damage.",
            icon: "lucide:ruler",
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
        "Got questions about roofing or waterproofing in Canterbury? We’ve answered some of the most common queries from our clients in Christchurch and surrounding areas.",
    list: [
        {
            question: "How long does a typical roof replacement take?",
            answer: "Most residential roof replacements in Christchurch are completed within 1–3 days, depending on size and complexity. Larger or more intricate properties may take longer. We’ll confirm a clear timeframe during your quote and planning process.",
        },
        {
            question: "What types of roofing materials do you offer?",
            answer: "We supply and install a range of roofing materials suited to New Zealand’s conditions, including longrun metal roofing, asphalt shingles, membrane roofing for low-slope roofs, and concrete or clay tiles. We can advise you on the best option based on your budget, property type, and exposure to coastal or alpine conditions.",
        },
        {
            question: "Do you offer waterproofing services?",
            answer: "Yes, we specialise in both roof and below-grade waterproofing. This includes membrane systems for decks and flat roofs, as well as tanking solutions for foundations and basements. We use high-quality products that meet NZ Building Code requirements.",
        },
        {
            question: "Do you provide warranties on your work?",
            answer: "Absolutely. We offer manufacturer warranties on roofing and waterproofing materials (often 20–50 years), along with a workmanship guarantee of up to 5 years. Your peace of mind is important to us.",
        },
        {
            question: "How much does a new roof or waterproofing job cost?",
            answer: "Costs vary depending on factors such as roof area, material choice, accessibility, and any underlying damage. For waterproofing, it depends on the type of system and surface conditions. We offer free, no-obligation quotes so you know exactly what to expect.",
        },
        {
            question: "Do you offer financing or payment options?",
            answer: "Yes, we have flexible payment and financing options available to help manage your budget. We can discuss these during your consultation to find a plan that suits you.",
        },
        {
            question: "Can you help with insurance claims for storm damage?",
            answer: "Yes. If your roof has suffered storm or earthquake damage, we can assist with insurance assessments and documentation. Our team has worked with most major NZ insurers and can help ensure your claim process runs smoothly.",
        },
        {
            question: "How do I know if I need a repair or full replacement?",
            answer: "This depends on the age of your roof, visible signs of damage, water ingress, and the condition of underlying materials. We offer free inspections and will give you honest, practical advice on whether repair or replacement is the best option.",
        },
        {
            question: "Are you licensed and insured?",
            answer: "Yes, we are fully licensed building practitioners (LBPs) and carry full liability insurance. All our work complies with the New Zealand Building Code and safety regulations. We’re happy to provide documentation on request.",
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
