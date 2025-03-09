import {
  IndividualOffersTypes,
  Service,
  SocialMediaManageTypes,
} from "../types";

export const servicesDiscription: Service[] = [
  {
    header: "Social Media Management",
    description:
      "Social media management is consistent, hands-on management of our clients social media accounts, with each week’s services delivered based on their specific package chosen. We operate on a subscription basis with weekly installments for ongoing social media management services.",
    link: "/services/social-media-management",
  },
  {
    header: "Individual Offers",
    description:
      "Our individual offers provide tailored, flexible services that clients can choose based on their unique and immediate needs. This is a one-time purchase, with the service delivered within one week of purchase.",
    link: "/services/individual-offers",
  },
];

export const socialMediaManagementItems: SocialMediaManageTypes[] = [
  {
    header: "Social Media Presence",
    description:
      "Perfect for when you are looking to gain Social Media brand recognition",
    price: 258.85,
    services: [
      "Monthly Content Strategy",
      "Content Creation",
      "Editing & Copyright",
      "SEO Hashtags",
      "3x Posts Across Instagram & Facebook p/w",
      "Daily Strategic Community Engagement",
      "Monthly Reporting & Meetings",
    ],
  },
  {
    header: "Social Media Growth",
    description: "Ready to take your Socials to the nextlevel? Let’s grow!",
    price: 310.56,
    services: [
      "Monthly Content Strategy",
      "Content Creation",
      "Editing & Copyright",
      "SEO Hashtags",
      "3x Reels Across Instagram & Facebook p/w",
      "2x Carousel Posts Across Instagram & Facebook p/w",
      "10x Stories Across Instagram & Facebook p/w",
    ],
  },
  {
    header: "Social Media Accelerator",
    description:
      "Generating new leads & sales has neverbeen easier, this is where the magic happens",
    price: 398.47,
    services: [
      "Monthly Content Strategy",
      "Content Creation",
      "Editing & Copyright",
      "SEO Hashtags",
      "4x Reels Across Instagram & Facebook p/w",
      "2x Carousel Posts Across Instagram & Facebook p/w",
      "3x Stories Across Instagram & Facebook p/d",
      "Daily Strategic Community Engagement",
      "Monthly Analytics & Review Report",
      "Constant Support via Messenger (24hr window replies)",
    ],
  },
];

export const individualOffersItems: IndividualOffersTypes[] = [
  {
    header: "1:1 Strategy Call",
    price: "$103.3",
    services: [
      "Deep dive into your social media channels",
      "Understands your brand and identifies strengths x     and weaknesses",
      "Tailored, actionable one-month strategy to boost your social media",
    ],
  },
  {
    header: "Bio Highlights & Refresh",
    price: "$103.3",
    services: [
      "Updated bio for SEO optimisation",
      "Refresh your highlights to showcase who you are as a brand",
      "Updated highlights will include customer reviews, products or services and other relative content that best reflects your brand",
    ],
  },
  {
    header: "On-site Content Shoot",
    price: "$103.3",
    services: [
      "High-quality, brand-focused, ready to post content",
      "4 reels & 10 images",
    ],
  },
  {
    header: "UGC Creation",
    price: "309.28 / $721.28",
    services: [
      "High quality, authentic, peer-driven content to engage your audience, build trust, and enhance brand visibility.",
      "‘UGC Starter’ = 2x Reels",
      "‘UGC Pack’ = 5x Reels",
    ],
  },
];
