// Generats a meta description based on the topic of the page.
import { completePrompt } from "./completePrompt.ts";

type BlogPostOptions = {
  paragraphCount?: number;
};

const defaultOptions: BlogPostOptions = {
  paragraphCount: 5,
};

export const generateBlogPost = async (
  topic: string,
  { paragraphCount }: BlogPostOptions = defaultOptions
) => {
  const headers = await completePrompt(
    `
You are writing a blog post about "Gardening Tips for Summer". 

Write ${paragraphCount} SEO optimized paragraph headers to include in the blog
`
  );

  const blog = await completePrompt(
    `${headers}

Write a full markdown blog using using the 5 headers above. Each header should be prefixed with markdown -- ## <<Header>>. Write two paragraphs after each header.  Each paragraph should be 4-5 sentences long.`,
    {
      max_tokens: 3000,
    }
  );

  return blog;
};
