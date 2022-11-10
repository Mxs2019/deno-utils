import "https://deno.land/x/dotenv@v3.2.0/load.ts";

declare global {
  // deno-lint-ignore no-var
  var OPENAI_API_KEY: string | undefined;
  // deno-lint-ignore no-var
  var YEXT_API_KEY: string | undefined;
}

export const loadEnvToGlobals = () => {
  globalThis.OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");
  globalThis.YEXT_API_KEY = Deno.env.get("YEXT_API_KEY");
};
