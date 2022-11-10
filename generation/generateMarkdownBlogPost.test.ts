import { loadEnvToGlobals } from "../globals/loadEnvToGlobals.ts";
import { generateMarkdownBlogPost } from "./generateMarkdownBlogPost.ts";
loadEnvToGlobals();

Deno.test("Generate Blog Post", async () => {
  const res = await generateMarkdownBlogPost(
    "Tips for Gardening in the Summer"
  );
  console.log(res);
});
