import React from 'react'
import { Link } from 'react-router-dom'
import { FiMessageSquare } from "react-icons/fi";
import { CiRead } from "react-icons/ci";
import { CiUnread } from "react-icons/ci";
import "./SearchHeader.css"

const SearchHeader = () => {
  return (
    <div className='SearchHeaderContainer'>
        <span className="searchContact">
            <input type="search" placeholder='search contact ...' />
        </span>
       
    </div>
  )
}

export default SearchHeader