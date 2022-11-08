import { StreamWebhookSchema } from "./StreamWebhookSchema.ts";
export const parseStreamWebhookDocs = (payload: any) => {
  const p = StreamWebhookSchema.parse(payload);
  return p.docs;
};
