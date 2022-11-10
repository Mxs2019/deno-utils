import jsonrepair from "https://cdn.skypack.dev/jsonrepair";
import { completePrompt } from "./completePrompt.ts";

export const fixJson = async (potentiallyBadJson: string) => {
  try {
    const json = JSON.parse(potentiallyBadJson);
    return json;
  } catch {
    try {
      const json = JSON.parse(jsonrepair(potentiallyBadJson));
      return json;
    } catch {
      console.log("Trying to use OpenAI");

      const res = await completePrompt(`
# Instructions
Fix the following JSON so that it is valid.

# Input
${potentiallyBadJson}

# Output
      `);

      const json = JSON.parse(jsonrepair(res));
      return json;
    }
    // Try to fix up JSON
  }
};
