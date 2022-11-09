import "https://deno.land/x/dotenv/load.ts";

type UpdateEntityOptions = {
  format?: "markdown" | "html";
};

const defaultOptions: UpdateEntityOptions = {
  format: "markdown",
};

export const updateEntity = async (
  entityId: string,
  content: any,
  { format }: UpdateEntityOptions = defaultOptions
) => {
  const YEXT_API_KEY = Deno.env.get("YEXT_API_KEY");
  const res = await fetch(
    `https://api.yext.com/v2/accounts/me/entities/${entityId}?v=20221001&api_key=${YEXT_API_KEY}&format=${format}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    }
  );
  const resJson = (await res.json()) as {
    meta: { errors: any[] };
    response: any;
  };
  console.log("The API response is:", resJson);
  return resJson;
};
