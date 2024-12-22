import { isAdmin, isSuperAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const Conversations: CollectionConfig = {
  slug: 'conversations',
  access: {
    create: isSuperAdmin,
    read: () => true,
    update: isSuperAdmin,
    delete: isSuperAdmin,
  },
  admin: {
    useAsTitle: 'con_id',
    description: 'Bots that are used to interact with users',
  },
  fields: [
    {
      name: 'bot_id',
      label: 'Bot ID',
      type: 'text',
      defaultValue: 'stablelm-zephyr-3b-GGUF',
      required: true,
    },
    {
      name: 'con_id',
      label: 'Conversation ID',
      type: 'text',
      required: true,
    },
    {
      name: 'user',
      label: 'User',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      hasMany: false,
    },
    {
      name: 'messages',
      label: 'Messages',
      type: 'json',
      required: false,
    },
  ],
}
