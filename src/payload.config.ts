// storage-adapter-import-placeholder
import path from 'path'
import sharp from 'sharp'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { stripePlugin } from '@payloadcms/plugin-stripe'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { Users } from './collections/Users'
import { PaymentMethods } from './collections/PaymentMethods'
import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { ProductEmbeddings } from './collections/ProductEmbeddings'
import { ImageEmbeddings } from './collections/ImageEmbeddings'
import { PaymentStatuses } from './collections/PaymentStatuses'
import { Addresses } from './collections/Addresses'
import { Colors } from './collections/Colors'
import { Sizes } from './collections/Size'
import { ProductDiscounts } from './collections/ProductDiscounts'
import { OrderStatuses } from './collections/OrderStatuses'
import { OrderTrackings } from './collections/OrderTrackings'
import { Coupons } from './collections/Coupons'
import { Blogs } from './collections/Blogs'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      title: 'eWardrobe',
      titleSuffix: ' - eWardrobe',
    },
    components: {
      views: {
        statistics: {
          Component: './views/statistics/Statistics',
          path: '/statistics',
        },
      },
      graphics: {
        Logo: './views/logo/Logo',
        Icon: './views/icon/Icon',
      },
    },
  },

  collections: [
    Users,
    PaymentMethods,
    PaymentStatuses,
    Categories,
    Media,
    ProductEmbeddings,
    ImageEmbeddings,
    Addresses,
    Colors,
    Sizes,
    ProductDiscounts,
    OrderStatuses,
    OrderTrackings,
    Coupons,
    Blogs,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    stripePlugin({
      stripeSecretKey: process.env.STRIPE_SECRET_KEY!,
      stripeWebhooksEndpointSecret: process.env.STRIPE_WEBHOOKS_ENDPOINT_SECRET!,
      webhooks: {
        'checkout.session.completed': ({ event, stripe, pluginConfig, req, config }) => {},
      },
    }),
  ],
})
