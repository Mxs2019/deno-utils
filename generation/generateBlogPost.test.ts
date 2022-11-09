import { generateBlogPost } from "./generateBlogPost.ts";

Deno.test("Generate Blog Post", async () => {
  const res = await generateBlogPost("Tips for Gardening in the Summer");
  console.log(res);
});
