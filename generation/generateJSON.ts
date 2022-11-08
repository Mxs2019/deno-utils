import jsonrepair from "https://cdn.skypack.dev/jsonrepair";
import { completePrompt, CompletePromptOptions } from "./completePrompt.ts";

export const generateJSON = async (
  prompt: string,
  options?: CompletePromptOptions
) => {
  const completion = await completePrompt(prompt, {
    temperature: 0,
    ...options,
  });

  try {
    const json = JSON.parse(completion);
    return json;
  } catch {
    try {
      const json = JSON.parse(jsonrepair(completion));
      return json;
    } catch {
      console.log("UNABLE TO FIX JSON");
      return {};
    }
    // Try to fix up JSON
  }
};
