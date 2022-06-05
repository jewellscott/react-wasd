import React from 'react'

const Pixel = ({ up, left, down, right }) => {
  return (
    <div id="pixel" style={{ left:`calc(50% + ${left}px)`, top:`calc(50% + ${up}px)` }}>

    </div>
  )
}

export default Pixel