# MXS Deno Utils

A bunch of handful deno utils. The following two environment variables are required:

```
OPENAI_API_KEY
YEXT_API_KEY
```

You can set these at runtime with a command like:

```
Deno.env.set("OPENAI_API_KEY", "XXX-XXX")
Deno.env.set("YEXT_API_KEY", "XXX-XXX")
```

## Usage

To use this module, you can import it like so:

```
import { generateMetaDescription } from "https://raw.githubusercontent.com/Mxs2019/deno-utils/v0.0.4/index.ts";
```

### Content Generation

`completePrompt` is a function that takes a prompt and a list of options and returns the best match.

`generateJSON` takes a prompt and returns a JSON object.

`generateMetaDescription` takes a topic and returns a meta description.

`generateMarkdownBlogPost` takes a topic and returns a blog post. Optionally pass in a number of paragraphs. Each paragraph has a header that is written in markdown (##).

`generateImage` Generate an image from a topic.

`generateKeywords` Generate an array of keywords from a topic.

`fixJson` takes a string and returns a JSON object. It will automatically fix JSON. If it's struggling it will use OpenAI to fix so this can get a bit slow.

### Yext APIs

`getNearbyEntities` returns a list of nearby entities to a give place

`generateSampleStreamWebhook` generates a sample webhook for the stream webhook endpoint

`parseStreamWebhookDocs` parses the stream webhook docs and returns a list of the docs

`updateEntity` updates a single entity

### Utils

`slugify` takes a string and returns a slugified version
