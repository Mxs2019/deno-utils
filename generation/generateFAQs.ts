import { z } from "../deps.ts";
import { completePrompt } from "./completePrompt.ts";
import { fixJson } from "./fixJson.ts";
export const generateFAQs = async (instructions: any) => {
  const prompt = `
 # Instructions
Create a list of structured FAQs. 
${instructions}

 # Format
 Return the response in valid JSON structure:
 {
      "question": string,
       "answer": string
 }[];

 # Response
 [
    { 
      "question": 
 `;

  const ResSchema = z.array(
    z.object({
      question: z.string(),
      answer: z.string(),
    })
  );

  let res = await completePrompt(prompt);
  res = '[ { "question": ' + res;

  const formatedRes = await fixJson(res);

  console.log(formatedRes);

  const faqs = ResSchema.parse(formatedRes);
  return faqs;
};
