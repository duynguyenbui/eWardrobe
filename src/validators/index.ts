import { z } from 'zod'

export const PayloadUserLoginValidator = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: 'Password must not be blank.',
  }),
})

export const PayloadUserSignUpValidator = z.object({
  phoneNumber: z
    .string()
    .min(10, {
      message: 'Phone number must be at least 10 characters.',
    })
    .max(10, {
      message: 'Phone number must not be longer than 10 characters.',
    }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  dateOfBirth: z.string().optional(),
  password: z.string().min(7, {
    message: 'Password must be at least 7 characters long.',
  }),
})

export const PayLoadProfileValidator = z.object({
  phoneNumber: z
    .string()
    .min(10, {
      message: 'Phone number must be at least 10 characters.',
    })
    .max(10, {
      message: 'Phone number must not be longer than 10 characters.',
    }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  dateOfBirth: z.string().optional(),
  role: z.enum(['super_admin', 'admin', 'user']),
  password: z.string().optional(),
})

export const PayLoadAddressValidator = z.object({
  name: z.string().min(1, 'Name is required'),
  province: z.string().min(1, 'Province is required'),
  district: z.string().min(1, 'District is required'),
  wardCode: z.string().min(1, 'Ward code is required'),
  detailAddress: z.string().min(1, 'Detailed address is required'),
  contactName: z.string().min(1, 'Contact name is required'),
  contactPhone: z.string().min(1, 'Contact phone is required'),
  idDefault: z.boolean(),
})

export type TPayloadUserSignUpValidator = z.infer<typeof PayloadUserSignUpValidator>
export type TPayloadUserLoginValidator = z.infer<typeof PayloadUserLoginValidator>
export type TPayLoadProfileValidator = z.infer<typeof PayLoadProfileValidator>
export type TPayLoadAddressValidator = z.infer<typeof PayLoadAddressValidator>
