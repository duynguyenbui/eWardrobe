import { AfterLogoutHook } from 'node_modules/payload/dist/collections/config/types'
import type { CollectionConfig, Access } from 'payload'

const adminsAndUser: Access = ({ req: { user } }) => {
  if (user?.role === 'admin') return true

  return {
    id: {
      equals: user?.id,
    },
  }
}

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    read: adminsAndUser,
    create: () => true,
    update: ({ req }) => req.user?.role === 'admin',
    delete: ({ req }) => req.user?.role === 'admin',
  },
  admin: {
    hidden: ({ user }) => user?.role !== 'admin',
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
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
    },
  ],
}
