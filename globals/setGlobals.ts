export const setGlobals = ({
  YEXT_API_KEY,
  OPENAI_API_KEY,
}: {
  YEXT_API_KEY: string;
  OPENAI_API_KEY: string;
}) => {
  globalThis.YEXT_API_KEY = YEXT_API_KEY;
  globalThis.OPENAI_API_KEY = OPENAI_API_KEY;
};
