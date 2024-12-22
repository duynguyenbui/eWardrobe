import { isSuperAdmin } from '@/payload-roles'
import { redirect } from 'next/navigation'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    read: () => true,
    create: isSuperAdmin,
    update: isSuperAdmin,
    delete: isSuperAdmin,
  },
  admin: {
    hidden: ({ user }) => user?.role === 'user',
    defaultColumns: ['id', 'email', 'role'],
  },
  auth: {
    cookies: {
      sameSite: 'Lax',
      secure: true,
    },
    tokenExpiration: 7200,
  },
  fields: [
    {
      name: 'avatar',
      label: 'Avatar',
      type: 'upload',
      relationTo: 'media',
      hasMany: false,
      required: false,
    },
    {
      name: 'role',
      defaultValue: 'user',
      required: true,

      type: 'select',
      options: [
        { label: 'Super Admin', value: 'super_admin' },
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
    },
    {
      name: 'date_of_birth',
      label: 'Date of Birth',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'default',
        },
      },
    },
    {
      name: 'phone_number',
      label: 'Phone Number',
      type: 'text',
      required: false,
    },
  ],
}
