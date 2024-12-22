export interface Message {
  role: 'user' | 'assistant' | 'system'
  content: string
  senderId: string
}

export interface TalkJSMessages {
  data: TalkJSMessage[]
}

export interface TalkJSMessage {
  attachment: any
  conversationId: string
  createdAt: number
  editedAt: any
  custom: any
  id: string
  location: any
  origin: string
  readBy: any[]
  senderId: string
  text: string
  type: string
  referencedMessageId: any
}
