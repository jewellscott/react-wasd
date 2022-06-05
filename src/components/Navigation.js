import React from 'react'
import Button from './Button'

const Navigation = ({ movePixel, clearState }) => {
  return (
    <nav className="App-nav">
      <div className="buttons">
        <Button
        name={"W"}
        sub={"Up / ↑"}
        click={() => movePixel(`up`)}
      />
       <Button
        name={"A"}
        sub={"Left / ←"}
        click={() => movePixel(`left`)}
      /> <Button
        name={"S"}
        sub={"Down / ↓"}
        click={() => movePixel(`down`)}
      />
      <Button
        name={"D"}
        sub={"Right / →"}
        click={() => movePixel(`right`)}
      />
      </div>
      {/* <Button 
        name="reset"
      /> */}
    </nav>
  )
}

export default Navigation