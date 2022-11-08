import { generateSampleStreamWebhook } from "https://raw.githubusercontent.com/Mxs2019/deno-utils/v0.0.0/index.ts";

Deno.test("Test", () => {
  console.log(generateSampleStreamWebhook("hey"));
});
