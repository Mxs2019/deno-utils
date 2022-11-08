import { assertEquals } from "https://deno.land/std@0.162.0/testing/asserts.ts";
import { generateSampleStreamWebhook } from "./generateSampleStreamWebhook.ts";

Deno.test("Generate Sample Stream Webhook Test", () => {
  const entityId = "2305283";
  const payload = generateSampleStreamWebhook(entityId);
  assertEquals(payload.docs[0].id, entityId);
});
