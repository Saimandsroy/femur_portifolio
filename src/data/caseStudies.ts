export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  shortDescription: string;
  heroImage?: string;
  problem: string;
  problemImage?: string;
  solution: string;
  solutionImage?: string;
  results: string[];
  techStack: string[];
  projectOverview?: string;
  strategy?: string;
  themeAccent?: string;
  designBreakdown?: {
    title: string;
    description: string;
    imagePath: string;
  }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "elitefit-gym-experience",
    title: "ELITEFIT — The Standard in Human Performance",
    industry: "Health & Fitness",
    shortDescription: "A high-conversion, luxury digital experience transforming how a premium gym acquires and retains high-ticket members.",
    themeAccent: "from-lime-400 to-emerald-500", // Tailwind gradient classes for neon green
    projectOverview: "EliteFit approached us to elevate their digital presence to match the premium, results-driven nature of their physical facility. They needed more than just a website; they required a digital conversion engine that communicated exclusivity, authority, and high performance.",
    heroImage: "/images/case-studies/elitefit-gym-experience/hero_bg.png",
    problem: "Despite being a top-tier facility with elite coaching, EliteFit's digital presence felt like a standard neighborhood gym. Their conversion rate for trial bookings was stagnating at 1.2%, and high-value prospects were dropping off due to a clunky, uninspiring mobile experience.",
    problemImage: "/images/case-studies/elitefit-gym-experience/problem_img.png",
    strategy: "We redesigned the platform from the ground up, moving away from generic fitness templates. We embraced a 'Dark Luxury' aesthetic with high-contrast neon green accents—creating a visual language that feels energetic, exclusive, and urgent. The entire user journey was re-architected to drive users seamlessly toward the 'Free Trial' conversion point, removing friction and maximizing impact.",
    solution: "We engineered a blazing-fast React application with smooth, un-intrusive scroll animations to keep the user engaged. The class schedules and trainer profiles were built as interactive, filterable modules, ensuring prospects could find exactly what they needed without page reloads. The pricing architecture was redesigned to highlight the 'Pro' tier using psychological pricing principles and conversion-focused UI components.",
    // solutionImage removed — AI image looked unconvincing
    results: [
      "65% Increase in Trial Bookings",
      "Sub-1.2s Load Time",
      "42% Decrease in Bounce Rate",
      "100% Elite Results Narrative"
    ],
    techStack: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide Icons"
    ],
    designBreakdown: [
      {
        title: "The Hero Interaction",
        description: "A bold, unapologetic statement paired with a high-contrast call-to-action. The dark mode setting allows the neon accents to command attention immediately.",
        imagePath: "/images/case-studies/elitefit-gym-experience/hero_section_1772164289223.png"
      },
      {
        title: "Frictionless Scheduling",
        description: "An intuitive, app-like class filter system that allows users to instantly view HIIT, Strength, or Recovery sessions without navigating away from the page.",
        imagePath: "/images/case-studies/elitefit-gym-experience/classes_section_1772164326900.png"
      },
      {
        title: "Authority Building",
        description: "Trainer profiles presented as premium cards to build trust and showcase the elite level of coaching available.",
        imagePath: "/images/case-studies/elitefit-gym-experience/trainers_and_cta_1772164340622.png"
      },
      {
        title: "Conversion-Optimized Pricing",
        description: "A three-tier pricing model where the 'Pro' plan is strategically highlighted using subtle scale animations and neon border glows.",
        imagePath: "/images/case-studies/elitefit-gym-experience/pricing_section_1772164359998.png"
      }
    ]
  },
  {
    slug: "kuberfashions-ecommerce",
    title: "KUBERFASHIONS — Timeless Aura, Modern Commerce",
    industry: "Fashion & E-Commerce",
    shortDescription: "A full-stack, production-grade e-commerce engine built from the ground up — transforming an emerging fashion brand into a high-converting digital storefront.",
    themeAccent: "from-amber-300 to-yellow-500",
    projectOverview: "Kuber Fashions needed more than a template. They required a fully custom, enterprise-grade e-commerce platform that could handle their growing catalog across Men, Women, Kids, and Accessories — complete with secure authentication, real-time inventory, wishlists, and seamless payment processing via PhonePe.",
    heroImage: "/images/case-studies/kuberfashions-ecommerce/hero_bg.png",
    problem: "The brand was operating with a fragmented digital presence — a slow, template-based storefront with no user accounts, no wishlist functionality, and a painful checkout experience. Cart abandonment was at 71%, mobile performance was poor, and there was zero infrastructure for customer retention or personalized shopping.",
    problemImage: "/images/case-studies/kuberfashions-ecommerce/problem_img.png",
    strategy: "We architected a modern, decoupled system: a blazing-fast React frontend paired with a robust Spring Boot backend. Redis was deployed for session management and caching to ensure sub-second responses, while PostgreSQL handled the relational data layer for products, users, orders, and inventory. The entire user journey was redesigned around conversion — from discovery to checkout.",
    solution: "We engineered a complete e-commerce ecosystem from scratch. The frontend features an editorial, monochrome luxury design with bold typography, interactive product pages with color/size selectors, and a persistent wishlist system. The backend powers secure JWT-based authentication, role-based access, real-time inventory management, and a fully integrated PhonePe payment gateway for seamless INR transactions.",
    results: [
      "3× Revenue Growth in Q1",
      "1.5s Average Page Load Time",
      "24% Cart Abandonment Rate",
      "500+ Registered Users in Month 1"
    ],
    techStack: [
      "React",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "PhonePe API",
      "Cloudflare",
      "Tailwind CSS",
      "REST API"
    ],
    designBreakdown: [
      {
        title: "The Hero Experience",
        description: "A bold, editorial 'Timeless Aura' hero section with full-bleed fashion photography and a clean 'Collection 2026' badge. The monochrome palette with subtle warm accents sets the luxury tone immediately.",
        imagePath: "/images/case-studies/kuberfashions-ecommerce/hero_section.png"
      },
      {
        title: "Intelligent Product Discovery",
        description: "A sophisticated catalog system with sidebar filters, price range sliders, and sort controls. Users can explore the entire collection by category without page reloads.",
        imagePath: "/images/case-studies/kuberfashions-ecommerce/catalog_section.png"
      },
      {
        title: "Immersive Product Details",
        description: "Large-format product imagery paired with interactive color and size selectors, accordion-style descriptions, material & care info, and shipping details — all designed to reduce purchase hesitation.",
        imagePath: "/images/case-studies/kuberfashions-ecommerce/product_detail.png"
      },
      {
        title: "Secure Authentication Flow",
        description: "A sleek, non-intrusive login modal that gates cart and wishlist functionality, ensuring a secure, account-based shopping experience powered by JWT authentication on Spring Boot.",
        imagePath: "/images/case-studies/kuberfashions-ecommerce/login_modal.png"
      }
    ]
  },
  {
    slug: "trainers-portfolio",
    title: "Elite Trainers — Fitness Coaching Portfolio",
    industry: "Health & Fitness",
    shortDescription: "A premium digital portfolio showcasing an elite team of personal trainers, CrossFit, and yoga instructors with high-conversion profiles.",
    themeAccent: "from-indigo-400 to-cyan-400",
    projectOverview: "The fitness center needed a digital way to present their elite coaching staff to prospective members. They wanted a design that felt powerful, modern, and aligned with their dark luxury aesthetic, highlighting trainer specializations and social proof instantly to drive booking inquiries.",
    heroImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop", // Using high-quality placeholder
    problem: "Their existing trainer page was a static, uninspiring block of text with poorly lit photos. It didn't convey the expertise, energy, or premium quality of the training team. Members couldn't easily see what each trainer specialized in or find their social media channels for fitness inspiration.",
    solution: "We designed and developed an interactive, glassmorphism-style portfolio section. It features a responsive 3-column grid, cinematic hover animations (image zoom + card lift), and integrated gradient overlays. The new design immediately communicates the premium nature of the gym and its staff.",
    results: [
      "85% Increase in Coach Profile Views",
      "3x More Direct Booking Inquiries",
      "Seamless Mobile Experience",
      "Enhanced Brand Perception"
    ],
    techStack: [
      "React",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
      "Vite",
      "Lucide Icons",
      "CSS Grid"
    ]
  },
  {
    slug: "savora-restaurant-marketing",
    title: "Savora — Restaurant Digital Marketing",
    industry: "Food & Hospitality",
    shortDescription:
      "A full-funnel digital marketing campaign that drove 500+ monthly reservations for a new restaurant chain.",
    problem:
      "Savora, a new farm-to-table restaurant chain, had zero online presence. Despite an exceptional menu and dining experience, they were losing to competitors who dominated Google search results and Instagram. Walk-in traffic was unpredictable, and they had no system for online reservations or customer re-engagement.",
    solution:
      "We executed a comprehensive digital marketing strategy. This included a stunning responsive website with an integrated reservation system, a local SEO blitz (Google Business, structured data, review management), paid social campaigns on Instagram and Facebook with high-quality food photography and video reels, and an automated email/SMS re-engagement flow for past diners.",
    results: [
      "500+ monthly reservations",
      "Page 1 Google ranking in 8 weeks",
      "Instagram grew to 12K followers",
      "Customer return rate of 45%",
    ],
    techStack: [
      "WordPress",
      "Google Ads",
      "Meta Ads Manager",
      "Mailchimp",
      "Google Analytics",
      "Canva Pro",
    ],
  },
];
