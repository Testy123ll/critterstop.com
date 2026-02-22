import { Home, Shield, Sparkles, Rabbit, Wrench, Search, TreePine, PawPrint } from "lucide-react";

export const siteConfig = {
  company: {
    name: "Critter Stop",
    shortName: "Critter Stop",
    phone: "(512) 883-9964",
    email: "service@critterstop.com",
    address: "Austin, Texas",
    city: "Austin",
    yearFounded: "2015",
    logoUrl: "https://critterstop.com/wp-content/uploads/2024/11/critter-stop-web-transparent_logo-color.png", // Using text fallback
  },
  theme: {
    // A clean, humane wildlife removal theme (Forest Green and Soft Blue)
    primary: "160 55% 35%",     // Wildlife Green
    accent: "210 60% 45%",      // Safe/Sanitary Blue 
    background: "0 0% 100%",
    foreground: "240 10% 4%",
  },
  hero: {
    badge: "Expert Wildlife Removal",
    headline: "Protect Your Home from Texas Wildlife",
    subheadline: "We safely remove raccoons, squirrels, rodents, and more. If critters or pests come back, so do we, at no extra charge.",
    ctaText: "Get a Free Consultation",
    image: "https://critterstop.com/wp-content/uploads/2025/06/This-Aint-Our-first-Rodeo-Text-1-300x31.webp",
  },
  services: [
    {
      id: "wildlife-removal",
      title: "Wildlife Removal",
      description: "Safe, humane trapping and removal of raccoons, squirrels, opossums, skunks, and armadillos.",
      icon: PawPrint,
    },
    {
      id: "rodent-control",
      title: "Rodent Control",
      description: "Comprehensive mice and rat extermination to protect your property and family's health.",
      icon: Rabbit,
    },
    {
      id: "restoration",
      title: "Sanitize & Restore",
      description: "We don't just remove pests. We seal, repair, and restore insulation to prevent re-entry.",
      icon: Wrench,
    },
  ],  about: {
    sectionTitle: "About Us",
    headline: "Protecting Homes & Businesses",
    description:
      "We are committed to providing top-tier pest management for families and businesses. Our integrated approach ensures complete eradication while remaining safe for kids, pets, and the environment. We pride ourselves on reliability, transparent pricing, and lasting results.",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745a872e?auto=format&fit=crop&q=80",
  },
  blog: {
    sectionTitle: "Pest Control Tips & News",
    articles: [
      {
        id: "1",
        title: "How to Keep Mosquitoes Away This Summer",
        excerpt:
          "Simple steps you can take around your yard to eliminate standing water and reduce mosquito populations.",
        date: "May 15, 2026",
        image: "https://images.unsplash.com/photo-1518563233816-5636b04f2168?auto=format&fit=crop&q=80",
      },
      {
        id: "2",
        title: "Signs You Might Have a Termite Problem",
        excerpt:
          "Don't let termites destroy your home. Learn the early warning signs to look out for.",
        date: "April 02, 2026",
        image: "https://images.unsplash.com/photo-1615555416049-d045d4a9ef3c?auto=format&fit=crop&q=80",
      },
      {
        id: "3",
        title: "Organic Pest Control vs. Traditional",
        excerpt:
          "Wondering if organic pest control is right for your family? We break down the pros and cons.",
        date: "March 20, 2026",
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80",
      },
    ],
  },
  faqs: [
    {
      q: "Is your pest treatment safe for kids and pets?",
      a: "Absolutely. We use EPA-approved, family-friendly products that are tough on pests but gentle around children, pets, and your garden. Our technicians will walk you through every product we use before treatment begins.",
    },
    {
      q: "How does your 100% money-back guarantee work?",
      a: "If pests return between scheduled treatments, we'll come back and re-treat at no extra charge. If you're still not satisfied, we'll refund your last service payment—no questions asked.",
    },
    {
      q: "How quickly can you get to my home?",
      a: "We offer same-day service for emergencies and typically schedule routine inspections within 24–48 hours. We serve the greater metro area and surrounding suburbs.",
    },
    {
      q: "What pests are most common in this area?",
      a: "Homeowners most frequently deal with fire ants, roaches, scorpions, mosquitoes, termites, and rodents. Our treatment plans are specifically designed for local pest pressure.",
    },
    {
      q: "Do I need to leave my house during treatment?",
      a: "For most treatments, no. Our eco-friendly products allow you to stay home comfortably. For specific services like termite fumigation, we'll let you know in advance if any preparation is needed.",
    },
    {
      q: "How often should I schedule pest control service?",
      a: "We recommend quarterly treatments for year-round protection. However, we'll customize a plan based on your property, pest history, and budget during your free inspection.",
    },
  ],
  reviews: {
    averageRating: 5.0,
    totalReviews: 1045,
    testimonials: [
      {
        id: 1,
        author: "John Doe",
        rating: 5,
        text: "Critter Stop was fast and extremely professional. They found exactly where the squirrels were getting in and sealed our home completely.",
      },
      {
        id: 2,
        author: "Lindsay Diaz",
        rating: 5,
        text: "After finding raccoons in our attic, Critter Stop handled the removal humanely and their cleanup was incredible. Highly recommended!",
      },
      {
        id: 3,
        author: "Charlie J A.",
        rating: 5,
        text: "They gave us a free inspection, upfront pricing, and delivered on everything they promised. We finally have peace of mind.",
      }
    ]
  },
  team: [], // Hidden via fallback
  guarantees: [
    {
      title: "4-Step Process",
      description: "Consultation, Sealing, Safe Removal, and Restoration.",
      icon: Search,
    },
    {
      title: "Fully Protected",
      description: "If critters or pests come back, so do we, at no extra charge.",
      icon: Shield,
    },
    {
      title: "Humane Practices",
      description: "Safe, ethical removal practices that protect both your family and local wildlife.",
      icon: Sparkles,
    },
  ]
};
