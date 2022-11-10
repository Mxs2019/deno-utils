import { assertEquals } from "../deps.ts";
import { loadEnvToGlobals } from "../globals/loadEnvToGlobals.ts";
import { generateKeywords } from "./generateKeywords.ts";
loadEnvToGlobals();

Deno.test("Generate Keywords", async () => {
  try {
    const res = await generateKeywords("12 Tips for Gardening");
    console.log(res);
    assertEquals(res.length > 0, true);
    // assert lenght > 0
  } catch (error) {
    console.error(error);
  }
});
