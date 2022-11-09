// Generats a meta description based on the topic of the page.
import { completePrompt } from "./completePrompt.ts";

type BlogPostOptions = {
  paragraphCount?: number;
};

const defaultOptions: BlogPostOptions = {
  paragraphCount: 3,
};

export const generateMarkdownBlogPost = async (
  topic: string,
  { paragraphCount }: BlogPostOptions = defaultOptions
) => {
  const headers = await completePrompt(
    `
You are writing a blog post about "${topic}". 

Write ${paragraphCount} paragraph headers (h2s) (3-4 words each) to include in the blog. These will be used as H2s in the blog post. They should flow from one to the other and talk about differnet topics related to the primary topic.

# Headers
1.`
  );

  console.log("Headers", headers);

  const intro = await completePrompt(
    `
You are writing a blog post about "${topic}". 

Write a short intro paragraph (3-4 sentences) to include in the blog. This should be a short summary of the blog post.
  `
  );

  const blog = await completePrompt(
    `
You are writing a blog post about "${topic}". 

# Headers
1.${headers}

# Instructions
Using the ${paragraphCount} headers above, write a markdown blog. Start with an introduction and then write 2 paragraphs for each header.
- Each header should be prefixed with markdown -- ## <<Header>>. 
- Each header should be followed by 2 paragraphs.
- Each paragraph should be 4-5 sentences long.

# Blog Post (markdown)

${intro}

##`,
    {
      max_tokens: 3000,
    }
  );

  return `
${intro}

## ${blog}`.trim();
};
