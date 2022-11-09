import { generateMarkdownBlogPost } from "./generateMarkdownBlogPost.ts";

Deno.test("Generate Blog Post", async () => {
  const res = await generateMarkdownBlogPost(
    "Tips for Gardening in the Summer"
  );
  console.log(res);
});
