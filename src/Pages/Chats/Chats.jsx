import React from 'react'
import SearchHeader from '../../Components/SearchHeader/SearchHeader'
import { Route, Routes } from 'react-router-dom'
import AllChats from '../../Components/AllChats/AllChats'
import "./Chats.css"

const Chats = () => {
  return (
    <div className='ChatsContainer'>
      <SearchHeader/>
      <section className='ChatsContentContainer'>
        <Routes>
          <Route index element={<AllChats/>}/>
        </Routes>
      </section>
    </div>
  )
}

export default Chats