import { assertEquals } from "../deps.ts";
import { slugify } from "./slugify.ts";

// Write Deno Test

Deno.test("Slugify Basic", () => {
  const slug = slugify("New York City");
  assertEquals(slug, "new-york-city");
});

Deno.test("Slugify Weird Characters", () => {
  const slug = slugify("New York City & Hello World");
  assertEquals(slug, "new-york-city-hello-world");
});

// Test with commas Atlanta, GA
Deno.test("Test Commas", () => {
  const slug = slugify("Atlanta, GA");
  assertEquals(slug, "atlanta-ga");
});
