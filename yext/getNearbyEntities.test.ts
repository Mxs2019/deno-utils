import { getNearbyEntities } from "./getNearbyEntities.ts";

Deno.test("Test JSON Generation", async () => {
  try {
    const res = await getNearbyEntities("New York City");
    console.log(res.entities.length);
  } catch (error) {
    console.error(error);
  }
});
