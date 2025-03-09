// declare namespace NodeJS {
//   interface ProcessEnv {
//     NEXT_PUBLIC_SUPABASE_URL: string
//     NEXT_PUBLIC_SUPABASE_ANON_KEY: string
//     SUPABASE_PROJECT_ID: string
//     SUPABASE_SERVICE_ROLE_KEY: string
//   }
// }

export interface Service {
  header: string;
  description: string;
  link: string;
}

export interface SocialMediaManageTypes {
  header: string;
  description: string;
  price: number;
  services: string[];
}

export interface IndividualOffersTypes {
  header: string;
  price: string;
  services: string[];
}
