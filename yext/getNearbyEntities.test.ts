import { loadEnvToGlobals } from "../globals/loadEnvToGlobals.ts";
import { getNearbyEntities } from "./getNearbyEntities.ts";
loadEnvToGlobals();

Deno.test("Test JSON Generation", async () => {
  try {
    const res = await getNearbyEntities("New York City");
    console.log(res.entities.length);
  } catch (error) {
    console.error(error);
  }
});
