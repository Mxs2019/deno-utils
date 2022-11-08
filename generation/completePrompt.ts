import "https://deno.land/x/dotenv/load.ts";

export type CompletePromptOptions = {
  temperature?: number;
  max_tokens?: number;
  model?: string;
};

export const completePrompt = async (
  prompt: string,
  options?: CompletePromptOptions
) => {
  try {
    const openaiRes = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Deno.env.get("OPENAI_API_KEY")}`,
      },
      body: JSON.stringify({
        model: "text-davinci-002",
        prompt,
        temperature: 0.7,
        max_tokens: 2000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        ...options,
      }),
    });

    // check if the response is ok
    if (!openaiRes.ok) {
      throw new Error(openaiRes.statusText);
    }

    const openaiData = await openaiRes.json();
    return openaiData.choices[0].text.trim();
  } catch (error) {
    console.error(error);
    return null;
  }
};
