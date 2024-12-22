import { getAllMessages, getCompletion, sendMessage } from '@/actions/completion'
import { getPayloadClient } from '@/get-payload'
import { Message } from '@/types'

export const dynamic = 'force-static'
const appId = process.env.TALKJS_APP_ID || ''
const talkJSSecretKey = process.env.TALKJS_SECRET_KEY || ''
const basePath = process.env.TALKJS_BASE_PATH || 'https://api.talkjs.com'
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

  if (totalDocs === 0 && senderId != botId) {
    await payload.create({
      collection: 'conversations',
      data: {
        bot_id: botId,
        con_id: convId,
        user: parseInt(senderId, 10),
      },
    })
  }

  const convers = conversations[0]

  if (!convers) {
    return Response.json({}, { status: 200 })
  }

  const { data: historyMessages } = await getAllMessages(convId)

  let messages: Message[] = historyMessages.map((message) => {
    return {
      role: message.senderId === botId ? 'assistant' : 'user',
      content: message.text,
      senderId: message.senderId,
    }
  })

  const newMsg: Message = {
    role: 'user',
    content: message.text,
    senderId: senderId,
  }

  messages.push(newMsg)

  if (senderId == botId) {
    if (!messages.some((msg) => msg.senderId === botId && msg.content === messageText)) {
      messages.push({ role: 'assistant', content: messageText, senderId: botId })
    }
  } else {
    const reply = (await getCompletion(messages)) || 'I am not available right now.'
    if (!messages.some((msg) => msg.senderId === senderId && msg.content === reply)) {
      messages.push({ role: 'user', content: reply, senderId: senderId })
    }
    await sendMessage(reply, botId, convId)
  }

  const { data: updatedData } = await getAllMessages(convId)

  const upatedMsg = updatedData.map((data) => {
    return {
      role: data.senderId === botId ? 'assistant' : 'user',
      content: data.text,
      senderId: data.senderId,
    }
  })

  await payload.update({
    collection: 'conversations',
    where: {
      con_id: {
        equals: convId,
      },
    },
    data: {
      messages: upatedMsg,
    },
  })

  return Response.json({}, { status: 200 })
}
