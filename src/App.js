import './App.css';
import Header from './components/Header'
import Navigation from './components/Navigation';
import View from './components/View';
import { useState } from 'react';

function App() {


  const [ left, setLeft ] = useState(0);
  const [ top, setTop ] = useState(0);
  
  const movePixel = (direction) => {
    const step = 10;
    switch(direction){
      case "up": 
        setTop(function(top){
          return top - step;
        })
      break;
      case "left": 
        setLeft(function(left){
          return left - step;
        })
      break;
      case "down": 
        setTop(function(top){
          return top + step;
        })
      break;
      case "right": 
        setLeft(function(left){
          return left + step;
        })
      break;
      default:
        return 0;
    }
  }

  return (
    <div className="App">
      <Header />
      <View 
        up={top}
        left={left}
        down={top}
        right={left}
      />
      <Navigation 
        movePixel={movePixel}
      />
    </div>
  );
}

export default App;
