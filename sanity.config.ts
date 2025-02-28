import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { dataset, projectId } from "./sanity/env";

if (!projectId || !dataset) {
  throw new Error(
    "Missing required environment variables for Sanity configuration"
  );
}

export default defineConfig({
  name: "default",
  title: "Social Skool Website",
  projectId, // Now guaranteed to be a string
  dataset,
  plugins: [deskTool()],
  schema: {
    types: [],
  },
});
