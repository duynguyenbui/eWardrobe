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
  ],
}
