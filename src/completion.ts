import OpenAI from 'openai'

declare global {
  var completion: OpenAI | undefined
}

if (!global.completion) {
  if (!process.env.OPENAI_API_KEY_COMPLETION || !process.env.OPENAI_BASE_URL_COMPLETION) {
    global.completion = undefined
  } else {
    global.completion = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY_COMPLETION!,
      baseURL: process.env.OPENAI_BASE_URL_COMPLETION!,
    })
  }
}

export const completion = global.completion
