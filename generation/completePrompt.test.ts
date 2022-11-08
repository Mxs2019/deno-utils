import { assertEquals } from "https://deno.land/std@0.162.0/testing/asserts.ts";

import { completePrompt } from "./completePrompt.ts";

Deno.test("Test Prompt Completion", async () => {
  try {
    const res = await completePrompt("What is 2 + 2? ");
    assertEquals(res, "4");
  } catch (error) {
    console.error(error);
  }
});
