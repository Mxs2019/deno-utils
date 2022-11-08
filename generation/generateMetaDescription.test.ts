import { generateMetaDescription } from "./generateMetaDescription.ts";

Deno.test("Generate Meta Description", async () => {
  try {
    const res = await generateMetaDescription("12 Tips for Gardening");
    console.log(res);
  } catch (error) {
    console.error(error);
  }
});
