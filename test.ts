import { generateMarkdownBlogPost, updateEntity } from "./index.ts";

Deno.test("Test", async () => {
  const body = await generateMarkdownBlogPost("Gardening in the Winter", {
    paragraphCount: 5,
  });
  console.log(body);

  const entityId = "1086543514234433972";

  const res = await updateEntity(entityId, { body });
  console.log(res.meta);
});
