import React from 'react'
import Button from './Button'

const Navigation = () => {
  return (
    <nav className="App-nav">
      <div className="buttons">
        <Button
        name={"W"}
        sub={"Up / ↑"}
      />
       <Button
        name={"A"}
        sub={"Left / ←"}
      /> <Button
        name={"S"}
        sub={"Down / ↓"}
      />
      <Button
        name={"D"}
        sub={"Right / →"}
      />
      </div>
      <Button 
        name="reset">
      </Button>
    </nav>
  )
}

export default Navigation