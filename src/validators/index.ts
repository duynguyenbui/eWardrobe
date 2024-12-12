import { z } from 'zod'

export const PayloadUserValidator = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters long.',
  }),
})

export type TPayloadUserValidator = z.infer<typeof PayloadUserValidator>
