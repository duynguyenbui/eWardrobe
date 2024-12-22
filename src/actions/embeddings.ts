'use server'

import { embedding } from '@/embeddings'

export const getTextEmbedding = async (input: string): Promise<number[]> => {
  const response = await embedding?.embeddings.create({
    input: input,
    model: 'gaianet/Nomic-embed-text-v1.5-Embedding-GGUF',
    encoding_format: 'float',
  })

  const data = response?.data

  if (data) {
    return (data[0] as any).embedding
  }

  return []
}
