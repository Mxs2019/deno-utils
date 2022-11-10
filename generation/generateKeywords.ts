// Generats a meta description based on the topic of the page.
import { z } from "../deps.ts";
import { completePrompt } from "./completePrompt.ts";
import { fixJson } from "./fixJson.ts";

export const generateKeywords = async (topic: string) => {
  const res = await completePrompt(
    `
Write 5 SEO optimized keywords for the following topic. Return as a JSON array

# Topic
${topic}

# Keywords
{
    keywords: [
`,
    {
      temperature: 0.2,
    }
  );

  const json = z
    .object({ keywords: z.array(z.string()) })
    .parse(await fixJson("{ keywords: [" + res));
  return json.keywords;
};
