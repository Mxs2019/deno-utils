import { assertEquals } from "../deps.ts";
import { loadEnvToGlobals } from "../globals/loadEnvToGlobals.ts";
import { completePrompt } from "./completePrompt.ts";
loadEnvToGlobals();

Deno.test("Test Prompt Completion", async () => {
  const res = await completePrompt("What is 2 + 2? ");
  assertEquals(res, "4");
});
