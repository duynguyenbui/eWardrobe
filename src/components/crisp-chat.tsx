'use client'

import React, { useEffect } from 'react'
import { Crisp } from 'crisp-sdk-web'
import { useUserStore } from '@/hooks/use-user'

export const CrispChat = () => {
  const { user } = useUserStore()
  useEffect(() => {
    Crisp.configure(process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID!)
  }, [])

  return null
}
