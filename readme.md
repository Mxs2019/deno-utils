# MXS Deno Utils

A bunch of handful deno utils. The following two environment variables are required:

```
OPENAI_API_KEY
YEXT_API_KEY
```

## Usage

### Content Generation

`completePrompt` is a function that takes a prompt and a list of options and returns the best match.

`generateJSON` takes a prompt and returns a JSON object.

`generateMetaDescription` takes a topic and returns a meta description.

### Yext APIs

`getNearbyEntities` returns a list of nearby entities to a give place

`handleStreamUpdateWebhook` Handles a stream update webhook from Yext
