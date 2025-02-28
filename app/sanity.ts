import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "s1k533zw",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-02-17",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);

export default client;
