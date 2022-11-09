import "https://deno.land/x/dotenv/load.ts";
import { z } from "../deps.ts";

export type GenerateImageOptions = {
  n?: number;
  size: "256x256" | "512x512" | "1024x1024";
};

const defaultOptions: GenerateImageOptions = {
  n: 1,
  size: "256x256",
};

export const generateImage = async (
  prompt: string,
  { n }: GenerateImageOptions = defaultOptions
) => {
  try {
    const openaiRes = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Deno.env.get("OPENAI_API_KEY")}`,
        },
        body: JSON.stringify({
          prompt,
          n,
        }),
      }
    );

    // check if the response is ok
    if (!openaiRes.ok) {
      throw new Error(openaiRes.statusText);
    }

    const openaiData = await openaiRes.json();
    const ResSchema = z.object({
      data: z.array(
        z.object({
          url: z.string(),
        })
      ),
    });
    const { data } = ResSchema.parse(openaiData);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
