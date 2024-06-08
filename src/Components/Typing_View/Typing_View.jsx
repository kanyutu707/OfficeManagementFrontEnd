import React from 'react'
import { IoIosSend } from "react-icons/io";
import "./Typing_View.css"
import { CiLink } from "react-icons/ci";



const Typing_View = () => {
  return (
    <div className='Typing_View_Container'>
        <section className="Messages_View">
    hello
        </section>
        <span className="typing_section">
            <input type="text" />
            <button><CiLink /></button>
            <button><IoIosSend /></button>
        </span>
    </div>
  )
}

export default Typing_View