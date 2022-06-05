import React from 'react'
import Pixel from './Pixel'

const View = ({ up, left, down, right }) => {
  return (
    <div className="view">
      <Pixel
        up={up}
        left={left}
        down={down}
        right={right}
      />
    </div>
  )
}

export default View