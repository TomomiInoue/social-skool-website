import { z } from "zod";

const firstNameSchema = z
  .string({ required_error: "Please enter a valid name" })
  .min(1)
  .max(20, "Name is too long");
const lastNameSchema = z
  .string({ required_error: "Please enter a valid name" })
  .min(1)
  .max(20, "Name is too long");
const emailSchema = z
  .string({ required_error: "Please enter a valid email" })
  .email("Please enter a valid email");
const phoneSchema = z
  .string({ required_error: "Please enter a valid phone number" })
  .min(10, "Please enter a valid phone number")
  .max(10, "Please enter a valid phone number");
const placeSchema = z
  .string({ required_error: "Please enter a valid place" })
  .min(1)
  .max(20, "Place is too long");
const industrySchema =
  //choosing industry from the list
  z.enum([
    "Agriculture",
    "Automotive",
    "Banking",
    "Construction",
    "Education",
    "Energy",
    "Fashion",
    "Finance",
    "Food",
    "Healthcare",
    "Hospitality",
    "Insurance",
    "Manufacturing",
    "Media",
    "Mining",
    "Pharmaceutical",
    "Real Estate",
    "Retail",
    "Technology",
    "Telecommunications",
    "Transport",
    "Travel",
    "Utilities",
    "Other",
  ]);
const businessDetailsSchema = z
  .string({ required_error: "Please enter a valid business details" })
  .min(1);

const importanceSchema = z.enum(["Sales", "Audience"]);
const existingSocialMediaSchema = z.string().optional();
const websiteSchema = z
  //this is an option
  .string()
  .optional();
const serviceSchema = z.enum([
  "Social Media Management",
  "Social Media Marketing",
  "Social Media Advertising",
  "Content Creation",
  "Content Marketing",
  "Content Strategy",
  "Content Writing",
  "Content Editing",
  "Content Planning",
  "Content Scheduling",
  "Content Posting",
  "Content Engagement",
  "Content Analysis",
  "Content Reporting",
  "Content Optimization",
  "Content Distribution",
  "Content Promotion",
  "Content Syndication",
]);
const findSchema = z.enum(
  //how did you find us
  [
    "Google",
    "Facebook",
    "Instagram",
    "LinkedIn",
    "Twitter",
    "Referral",
    "Other",
  ]
);

export const ContactSchema = z.object({
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  email: emailSchema,
  phone: phoneSchema,
  place: placeSchema,
  industry: industrySchema,
  businessDetails: businessDetailsSchema,
  importance: importanceSchema,
  existingSocialMedia: existingSocialMediaSchema,
  website: websiteSchema,
  service: serviceSchema,
  find: findSchema,
});

export type ContactType = z.infer<typeof ContactSchema>;
