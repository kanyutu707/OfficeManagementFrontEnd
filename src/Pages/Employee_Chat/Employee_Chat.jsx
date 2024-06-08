import React from 'react'

const Employee_Chat = () => {
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

export default Employee_Chat