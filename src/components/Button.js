import React from 'react'
// import { useState } from 'react';

const Button = ({ name, sub, click }) => {

  const btnClick = (e) => {
    click();
  }
  
  return (
    <button
    type="button"
    className="btn" 
    name={name}
    data-sub={sub}
    onClick={btnClick}
    >
      <span className="btn-main">{name}</span>
      <span className="btn-sub">{sub}</span>
    </button>
  )
}

export default Button