// Generats a meta description based on the topic of the page.
import { completePrompt } from "./completePrompt.ts";

export const generateMetaDescription = (topic: string) => {
  return completePrompt(
    `
Write an SEO optimized meta description for the following page

# Topic
${topic}

# SEO Optimized Meta Description
`
  );
};
