import { Service, SocialMediaManageTypes } from "../types/types";

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
