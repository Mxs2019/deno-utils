import { z } from "https://deno.land/x/zod@v3.19.1/mod.ts";

export const StreamWebhookSchema = z.object({
  docs: z.array(
    z.intersection(
      z.object({
        $key: z.object({
          locale: z.string(),
          primary_key: z.string(),
        }),
      }),
      z.record(z.any())
    )
  ),
  meta: z.object({
    appSpecificAccountId: z.string(),
    eventType: z.enum(["RECORD"]),
    timestamp: z.number(),
    uuid: z.string(),
  }),
});

export type StreamWebhookPayload = z.infer<typeof StreamWebhookSchema>;
