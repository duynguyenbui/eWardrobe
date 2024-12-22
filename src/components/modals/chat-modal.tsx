'use client'

import React, { useEffect, useState } from 'react'
import ChatBox from '../chat-box'
import { Button } from '@/components/ui/button'
import { MessageCircle, X } from 'lucide-react'
import { useAuth } from '@/hooks/use-auth'
import { useUserStore } from '@/hooks/use-user'

const ChatModal = () => {
  const { user } = useUserStore()
  const [isVisible, setIsVisible] = useState(false)
  const [isEnable, setIsEnable] = useState(false)

  const toggleChat = () => {
    setIsVisible(!isVisible)
  }

  useEffect(() => {
    setIsEnable(!!user)
  }, [user])

  useEffect(() => {
    if (!user && isVisible) {
      setIsVisible(false)
    }
  }, [user, isVisible])

  if (!isEnable) return null

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end z-50">
      {isVisible && (
        <div className="mb-4 bg-background border border-border rounded-lg shadow-lg overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          <ChatBox user={user!} />
        </div>
      )}
      <Button
        onClick={toggleChat}
        className="rounded-full shadow-lg h-16 w-16 transition-all duration-200 ease-in-out hover:scale-105"
        aria-label={isVisible ? 'Close chat' : 'Open chat'}
        variant="default"
      >
        {isVisible ? (
          <X className="h-8 w-8 transition-transform hover:rotate-90" />
        ) : (
          <MessageCircle className="h-8 w-8" />
        )}
      </Button>
    </div>
  )
}

export default ChatModal
