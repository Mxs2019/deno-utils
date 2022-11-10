import { generateKeywords } from "./generateKeywords.ts";

Deno.test("Generate Keywords", async () => {
  try {
    const res = await generateKeywords("12 Tips for Gardening");
    console.log(res);
  } catch (error) {
    console.error(error);
  }
});
