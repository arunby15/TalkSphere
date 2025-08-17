import { MessageSquare } from 'lucide-react'
import React from 'react'

const NoChatSelected = () => {
  return (
    <div className="w-full flex items-center justify-center p-16 bg-gradient-to-br from-base-200 via-base-100 to-base-200">
      <div className="max-w-md w-full bg-base-100 p-8 rounded-2xl shadow-lg text-center space-y-6">
        <div className="flex justify-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center animate-bounce relative">
            <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl animate-pulse" />
            <MessageSquare className="w-8 h-8 text-primary relative z-10" />
          </div>
        </div>
        <h2 className="text-2xl font-bold">Welcome to TalkSphere – A Global Chatting Vibe!</h2>
        <p className="text-base-content/60">
          Select a conversation from the sidebar to start chatting.
        </p>
      </div>
    </div>
  )
}

export default NoChatSelected
