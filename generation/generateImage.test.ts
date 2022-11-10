import { loadEnvToGlobals } from "../globals/loadEnvToGlobals.ts";
import { generateImage } from "./generateImage.ts";
loadEnvToGlobals();

Deno.test("Test Image Generation", async () => {
  const data = await generateImage(
    "Photograph for a blog post about Gardening Tips for the Winter, f4, 150mm, natural light",
    {
      size: "1024x1024",
    }
  );
  console.log(data?.[0].url);
});
