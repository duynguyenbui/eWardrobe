import { getAllMessages, getCompletion, sendMessage } from '@/actions/completion'
import { getPayloadClient } from '@/get-payload'
import { Message } from '@/types'

export const dynamic = 'force-dynamic'
const botId = process.env.TALK_BOT_USER_ID || 'stablelm-zephyr-3b-GGUF'

export async function POST(req: Request) {
  const { data } = await req.json()

  const { conversation, message, sender } = data

  const convId = conversation.id.toString()
  const senderId = sender.id.toString()
  const messageText = message.text.toString()

  const payload = await getPayloadClient()

  const { docs: conversations, totalDocs } = await payload.find({
    collection: 'conversations',
    where: {
      and: [
        {
          bot_id: {
            equals: botId,
          },
        },
        {
          con_id: {
            equals: convId,
          },
        },
      ],
    },
  })

  if (totalDocs === 0 && senderId !== botId) {
    await payload.create({
      collection: 'conversations',
      data: {
        bot_id: botId,
        con_id: convId,
        user: parseInt(senderId, 10),
        messages: [],
      },
    })
  }

  const convers = conversations[0]

  if (!convers && senderId === botId) {
    return Response.json({}, { status: 200 })
  }

  const { data: historyMessages } = await getAllMessages(convId)

  let messages: Message[] = historyMessages.map((message) => ({
    role: message.senderId === botId ? 'assistant' : 'user',
    content: message.text,
    senderId: message.senderId,
    createdAt: message.createdAt,
  }))

  if (senderId !== botId) {
    const reply = (await getCompletion(messages)) || 'I am not available right now.'

    await sendMessage(reply, botId, convId)
  }

  await payload.update({
    collection: 'conversations',
    where: {
      con_id: {
        equals: convId,
      },
    },
    data: {
      messages: messages.filter((msg) => msg.senderId !== botId),
    },
  })

  return Response.json({}, { status: 200 })
}
