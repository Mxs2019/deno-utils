import { generateFAQs } from "./generateFAQs.ts";

Deno.test("Test FAQ Generation", async () => {
  const res = await generateFAQs("3 FAQs about Gardening");
  console.log(res);
});
