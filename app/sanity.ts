import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "s1k533zw",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-02-17",
});

const builder = imageUrlBuilder(client);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlFor = (source: any) => builder.image(source);

export default client;
