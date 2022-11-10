// Generats a meta description based on the topic of the page.
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

  const json = await fixJson("{ keywords: [" + res);
  return json.keywords;
};
