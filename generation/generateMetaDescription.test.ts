import { loadEnvToGlobals } from "../globals/loadEnvToGlobals.ts";
import { generateMetaDescription } from "./generateMetaDescription.ts";
loadEnvToGlobals();

Deno.test("Generate Meta Description", async () => {
  try {
    const res = await generateMetaDescription("12 Tips for Gardening");
    console.log(res);
  } catch (error) {
    console.error(error);
  }
});
