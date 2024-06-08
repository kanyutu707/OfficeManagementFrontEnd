import React from 'react'
import './Admin_Notifications.css'

const Admin_Notifications = () => {
  return (
    <div className='Admin_Notifications_Container'>
      <section className='Admin_Notifications_Message'>
          <h3>JOHN OLOO</h3>
          <h2>MESSAGE FOR DEVELOPERS</h2>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, omnis, dolorum exercitationem illum quos sunt dicta minus maxime tempora aperiam saepe quas impedit amet iste?</h3>
      </section>
      <section className='Admin_Notifications_Event'>
        <h3 id='eventHeader'>MEETING AT 2:00</h3>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempora voluptate suscipit magnam! Quae, necessitatibus saepe facere fugit ipsum praesentium eaque ex labore impedit officiis.</h3>
        </section>
    </div>
  )
}

export default Admin_Notifications