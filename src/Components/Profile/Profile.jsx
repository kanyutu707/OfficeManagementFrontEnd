import React, { useEffect, useState } from 'react'
import './Profile.css'
import person from '../../assets/hero.jpg'

const SESSION_STORAGE_UPDATE = 'SESSION_STORAGE_UPDATE';

const Profile = () => {
    const [fullName, setFullName]=useState('');

    const updateName=()=>{
        const fName=sessionStorage.getItem('fName') || '';
        const lName=sessionStorage.getItem('lName') || '';
        const newFullName=`${fName} ${lName}`.trim();
        setFullName(newFullName);
    }

    useEffect(()=>{
        updateName();

        const handleStorageChange = () => {
            console.log('Storage changed event received'); 
            updateName();
        };

      
        window.addEventListener(SESSION_STORAGE_UPDATE, handleStorageChange);

        return () => {
            window.removeEventListener(SESSION_STORAGE_UPDATE, handleStorageChange);
        };        
    }, []);
  return (
    <div className='profilecontainer'>
        <img src={person} alt="" />
        <span>{fullName}</span>
    </div>
  )
}

export default Profile