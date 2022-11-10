import { assertObjectMatch } from "../deps.ts";
import { loadEnvToGlobals } from "../globals/loadEnvToGlobals.ts";
import { fixJson } from "./fixJson.ts";
loadEnvToGlobals();

Deno.test("Fix JSON", async () => {
  assertObjectMatch(await fixJson("{ 'hello': 'world' "), {
    hello: "world",
  });
});

Deno.test("Fix JSON 2", async () => {
  const json = await fixJson(" {'hello': 'world'");
  assertObjectMatch(json, {
    hello: "world",
  });
});

Deno.test("Hard JSON", async () => {
  const json = await fixJson(" {'hello': world");
  assertObjectMatch(json, {
    hello: "world",
  });
});

Deno.test("FAQ JSON", async () => {
  const input = `[ { "question": "What are some good ways to start gardening for beginners?",
  "answer": "Some good ways to start gardening are to start with a small plot, simple tools, and easy-to-grow plants."
 },
 {
  "question": "What are some good vegetables to grow in a garden?",
  "answer": "Some good vegetables to grow in a garden are lettuce, tomatoes, and cucumbers."
 },
 {
  "question": "What are some good fruits to grow in a garden?",
  "answer": "Some good fruits to grow in a garden are strawberries, blueberries, and raspberries."
 },
 {
  "question": "What are some good herbs to grow in a garden?",
  "answer": "Some good herbs to grow in a garden are basil, oregano, and thyme."
 },
 {
  "question": "What are some good flowers to grow in a garden?",
  "answer": "Some good flowers to grow in a garden are roses, daisies`;

  const json = await fixJson(input);
  console.log(json);
});
