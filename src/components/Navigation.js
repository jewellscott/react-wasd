import React from 'react'
import Button from './Button'

const Navigation = () => {
  return (
    <nav className="App-nav">
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
    </nav>
  )
}

export default Navigation