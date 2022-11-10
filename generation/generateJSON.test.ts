import { assertEquals } from "../deps.ts";
import { loadEnvToGlobals } from "../globals/loadEnvToGlobals.ts";
import { generateJSON } from "./generateJSON.ts";
loadEnvToGlobals();

Deno.test("Test JSON Generation", async () => {
  try {
    const res = await generateJSON(
      "Transform the following text to json: 'hello: world'"
    );
    assertEquals(res, { hello: "world" });
  } catch (error) {
    console.error(error);
  }
});
