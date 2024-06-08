import React from 'react'
import SearchHeader from '../../Components/SearchHeader/SearchHeader'
import { Route, Routes } from 'react-router-dom'
import AllChats from '../../Components/AllChats/AllChats'
import "./Chats.css"
import ReadChats from '../../Components/ReadChats/ReadChats'
import Unread_Chats from '../../Components/Unread_Chats/Unread_Chats'
import ChatRoom from '../../Components/ChatRoom/ChatRoom'
const Chats = () => {
  return (
    <div className='ChatsContainer'>
      <SearchHeader/>
      <section className='ChatsContentContainer'>
        <Routes>
          <Route index element={<AllChats/>}/>
          <Route path="/read" element={<ReadChats/>}/>
          <Route path="/unread" element={<Unread_Chats/>}/>
        </Routes>
      </section>
    </div>
  )
}

export default Chats