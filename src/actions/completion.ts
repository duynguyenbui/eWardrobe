'use server'

import { completion } from '@/completion'
import { Message, TalkJSMessages } from '@/types'
import axios from 'axios'

export const getCompletion = async (histories: Message[]) => {
  if (completion) {
    const res = await completion.chat.completions.create({
      messages: histories,
      model: 'TheBloke/stablelm-zephyr-3b-GGUF/stablelm-zephyr-3b.Q4_K_S.gguf',
    })

    const reply = res.choices[0].message.content

    return reply
  }

  return 'Sorry, I am not available right now.'
}

export const getAllMessages = async (conversationId: string) => {
  try {
    const messages: TalkJSMessages = await axios
      .get(
        `${process.env.TALKJS_BASE_PATH}/v1/${process.env.NEXT_PUBLIC_TALKJS_APP_ID}/conversations/${conversationId}/messages`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.TALKJS_SECRET_KEY!}`,
          },
        },
      )
      .then((res) => res.data)

    return messages
  } catch (error) {
    console.error('Error fetching messages:', error)
    throw new Error('Failed to fetch messages')
  }
}

export const sendMessage = async (text: string, sender: string, conversationId: string) => {
  return fetch(
    `${process.env.TALKJS_BASE_PATH}/v1/${process.env.NEXT_PUBLIC_TALKJS_APP_ID}/conversations/${conversationId}/messages`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.TALKJS_SECRET_KEY!}`,
      },
      body: JSON.stringify([
        {
          text: text,
          sender: sender,
          type: 'UserMessage',
        },
      ]),
    },
  )
}
