import { getPayloadClient } from '@/get-payload'

export const dynamic = 'force-static'

export async function GET(req: Request) {
  const client = await getPayloadClient()

  const { docs: users } = await client.find({ collection: 'users' })

  return Response.json({ users })
}
