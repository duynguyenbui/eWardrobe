'use client'

import { User } from '@/payload-types'
import { Session, Chatbox } from '@talkjs/react'
import { useCallback } from 'react'
import Talk from 'talkjs'

function ChatBox({ user }: { user: User }) {
  const syncUser = useCallback(
    () =>
      new Talk.User({
        id: user.id.toString(),
        name: user.email,
        email: user.email,
        role: 'default',
        photoUrl: 'https://talkjs.com/images/avatar-1.jpg',
      }),
    [user.id, user.email],
  )

  const syncConversation = useCallback(
    (session: any) => {
      const conversation = session.getOrCreateConversation(`${user.id}-${user.email}`)

      const bot = new Talk.User({
        id: 'stablelm-zephyr-3b-GGUF',
        name: 'Bot 🤖',
        email: 'bot@email.com',
        role: 'default',
        photoUrl: 'https://talkjs.com/new-web/talkjs-logo.svg',
        welcomeMessage:
          'I am a bot of eWardrobe, my main goal is to help you with your questions related to this store 🛍️. How can I assist you today?',
      })
      conversation.setParticipant(session.me)
      conversation.setParticipant(bot)

      return conversation
    },
    [user.id, user.email],
  )

  return (
    <Session appId={process.env.NEXT_PUBLIC_TALKJS_APP_ID!} syncUser={syncUser}>
      <Chatbox
        syncConversation={syncConversation}
        style={{ width: '400px', height: '500px' }}
      ></Chatbox>
    </Session>
  )
}

export default ChatBox
