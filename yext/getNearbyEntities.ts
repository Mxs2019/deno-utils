import "https://deno.land/x/dotenv/load.ts";
import { z } from "https://deno.land/x/zod/mod.ts";

// Address Schema
const AddressSchema = z.object({
  line1: z.string(),
  line2: z.string().optional(),
  city: z.string(),
  region: z.string(),
  postalCode: z.string(),
  countryCode: z.string(),
});

const MetaSchema = z.object({
  id: z.string(),
});

// Hotel Schema
const LocationSchema = z.record(z.any());

// API Response
const ResponseSchema = z.object({
  meta: z.object({
    uuid: z.string(),
  }),
  response: z.object({
    entities: z.array(LocationSchema),
    geo: z.object({
      coordinate: z.object({
        latitude: z.number(),
        longitude: z.number(),
      }),
    }),
  }),
});

export const getNearbyEntities = async (location: string) => {
  // TODO: Don't pull in closed hotels
  const res = await fetch(
    `https://liveapi.yext.com/v2/accounts/me/entities/geosearch?api_key=${Deno.env.get(
      "YEXT_API_KEY"
    )}&v=20221001&location=${location}&radius=100`
  );

  const resJson = await res.json();
  const validated = ResponseSchema.parse(resJson);

  return validated.response;
};
