import React from 'react'
import './Button.css'
import vector3 from '../sources/vector3.png'

const Button = () => {
  return (
    <div>
      <button className='button'>LEARN MORE <span className='expand'><img src={vector3} alt="vector" /></span></button>
    </div>
  )
}

export default Button