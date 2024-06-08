import React from 'react'
import Contacts from '../Contacts/Contacts'
import "./AllChats.css"
import Typing_View from '../Typing_View/Typing_View'

const AllChats = () => {
  return (
    <div className='AllChatsContainer'>
      <Contacts/>
      <Typing_View/>
    </div>
  )
}

export default AllChats