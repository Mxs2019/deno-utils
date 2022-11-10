import { loadEnvToGlobals } from "../globals/loadEnvToGlobals.ts";
import { generateFAQs } from "./generateFAQs.ts";
loadEnvToGlobals();

Deno.test("Test FAQ Generation", async () => {
  const res = await generateFAQs("3 FAQs about Gardening");
  console.log(res);
});
