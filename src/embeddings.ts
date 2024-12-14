import OpenAI from 'openai'

declare global {
  var embedding: OpenAI | undefined
}

if (!global.embedding) {
  if (!process.env.OPENAI_API_KEY || !process.env.OPENAI_BASE_URL) {
    global.embedding = undefined
  } else {
    global.embedding = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY!,
      baseURL: process.env.OPENAI_BASE_URL!,
    })
  }
}

export const embedding = global.embedding
