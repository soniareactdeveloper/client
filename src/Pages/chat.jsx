import React from 'react'
import People from '../Components/people'
import ChatBox from '../Components/chatbox'

const chat = () => {
  return (
    <>
      <div className=" flex h-screen">
        <People />
        <ChatBox />
    </div>
    </>
  )
}

export default chat