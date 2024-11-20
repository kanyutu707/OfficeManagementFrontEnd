import React from 'react'
import Contacts from '../Contacts/Contacts'
import "./AllChats.css"
import Typing_View from '../Typing_View/Typing_View'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:4000');

const AllChats = () => {
  return (
    <div className='AllChatsContainer'>
      <Contacts/>
      <Typing_View/>
    </div>
  )
}

export default AllChats