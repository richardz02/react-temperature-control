import React from 'react'

const Button = ({ control, onClick }) => {

  return (
    <div>
      <button onClick={onClick}>{control}</button>
    </div>
  )
}

export default Button
