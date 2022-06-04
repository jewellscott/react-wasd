import React from 'react'
import movePixel from './js/movePixel'
// import { useState } from 'react';

const Button = ({ name, sub, move }) => {

  // const [ position, setPosition ] = useState();

  // setPosition = ({ move }) => {
  //   movePixel({move});
  // }
  
  return (
    <button
    type="button"
    className="btn" 
    name={name}
    data-sub={sub}
    data-move={move}
    onClick={movePixel(move)}
    >
      <span className="btn-main">{name }</span>
      <span className="btn-sub">{sub}</span>
    </button>
  )
}

export default Button