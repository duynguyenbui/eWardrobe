'use client'

import { useEffect, useState } from 'react'
import { DeleteAddrModal } from '../modals/delete-addr-modal'
import { CreateAddrModal } from '../modals/create-addr-modal'
import { CrispChat } from '../crisp-chat'
import ChatModal from '../modals/chat-modal'

export const ModalProvider = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <>
      <CrispChat />
      <ChatModal />
      <DeleteAddrModal />
      <CreateAddrModal />
    </>
  )
}
