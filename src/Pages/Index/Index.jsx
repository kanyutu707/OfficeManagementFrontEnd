import React from 'react'
import './Index.css'
import { useNavigate } from 'react-router-dom'

const Index = () => {
  const navigate=useNavigate();
  const moveToRegister=()=>{
    navigate('/companyRegister');
  }
  const moveToLogin=()=>{
    navigate('/signIn');
  }
  return (
    <div className='containerindex'>
      <section className="hero">
        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis accusamus eum sit velit alias optio neque, enim provident ipsa modi quia necessitatibus inventore, doloribus labore nemo laudantium eveniet eius! Illum ea saepe et rerum suscipit quidem commodi doloribus voluptates? Ipsam accusantium adipisci reprehenderit enim, neque maiores rerum porro iste explicabo voluptatibus eum rem laboriosam, fuga iure unde eius vel consequuntur! Unde iusto libero debitis vel aspernatur nemo beatae est illo.</span>
        <div className="buttons">
        <button onClick={moveToLogin}>LOGIN</button>
        <button onClick={moveToRegister}>REGISTER</button>
        </div>
      </section>
    </div>
  )
}

export default Index;