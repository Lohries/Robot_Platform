import React from 'react'
import { Link } from 'react-router-dom'

const ChatButton = () => {
  return (
    <div class="button-chat">
      <Link to='/chat'><button>Chat</button></Link>
    </div>
  )
}

export default ChatButton
