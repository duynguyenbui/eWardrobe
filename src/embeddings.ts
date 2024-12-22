import OpenAI from 'openai'

declare global {
  var embedding: OpenAI | undefined
}

if (!global.embedding) {
  if (!process.env.OPENAI_API_KEY_EMBEDDING || !process.env.OPENAI_BASE_URL_EMBEDDING) {
    global.embedding = undefined
  } else {
    global.embedding = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY_EMBEDDING!,
      baseURL: process.env.OPENAI_BASE_URL_EMBEDDING!,
    })
  }
}

export const embedding = global.embedding
