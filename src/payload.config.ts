// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { ProductCategories } from './collections/ProductCategories'
import { Products } from './collections/Products'
import { Meterials } from './collections/Materials'
import { ProductCollection } from './collections/ProductCollection'
import { ProductVariants } from './collections/ProductVariants'
import { Currency } from './collections/Currency'
import { ProductTypes } from './collections/ProductTypes'
import { Prices } from './collections/Price'
import { PriceSets } from './collections/PriceSet'
import { CustomerAddress } from './collections/CustomerAddress'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    ProductCategories,
    ProductTypes,
    Products,
    Meterials,
    ProductCollection,
    ProductVariants,
    Currency,
    Prices,
    PriceSets,
    CustomerAddress,
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
  ],
})
