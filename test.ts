import { generateMetaDescription } from "https://raw.githubusercontent.com/Mxs2019/deno-utils/v0.0.2/index.ts";

Deno.test("Test", async () => {
  const test = await generateMetaDescription("This is a test");
  console.log(test);
});
