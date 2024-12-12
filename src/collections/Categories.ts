import type { Access, CollectionConfig } from 'payload'

const adminsAndUser: Access = ({ req: { user } }) => {
  if (user?.role === 'admin') return true

  return {
    id: {
      equals: user?.id,
    },
  }
}

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: adminsAndUser,
    create: () => true,
    update: ({ req }) => req.user?.role === 'admin',
    delete: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
  ],
}
