import React from 'react'
import Button from './Button'

const Navigation = () => {
  return (
    <nav className="App-nav">
      <div className="buttons">
        <Button
        name={"W"}
        sub={"Up / ↑"}
        move={"up"}
      />
       <Button
        name={"A"}
        sub={"Left / ←"}
        move="left"
      /> <Button
        name={"S"}
        sub={"Down / ↓"}
        move="down"
      />
      <Button
        name={"D"}
        sub={"Right / →"}
        move="right"
      />
      </div>
      <Button 
        name="reset">
      </Button>
    </nav>
  )
}

export default Navigation