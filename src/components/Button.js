import React from 'react'

const Button = ({ name, sub }) => {
  
  return (
    <button
    type="button"
    className="btn" 
    name={name}
    data-sub={sub}
    >
      <span className="btn-main">{name}</span>
      <span className="btn-sub">{sub}</span>
    </button>
  )
}

export default Button