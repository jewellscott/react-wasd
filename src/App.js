import './App.css';
import Header from './components/Header'
import Navigation from './components/Navigation';
import View from './components/View';
import { useState } from 'react';

function App() {

  function movePixel(str) {
    let step = 10;

    switch(str) {
      case "up":
        var x = document.getElementById('pixel').offsetTop;
        x = x - step;
        document.getElementById('pixel').style.top = x + "px";
        break;
      case "left":
        var y = document.getElementById('pixel').offsetLeft;
        y = y - step;
        document.getElementById('pixel').style.left = y + "px";
        break;
      case "down":
        var x = document.getElementById('pixel').offsetTop;
        x = x + step;
        document.getElementById('pixel').style.top = x + "px";
        break;
      case "right": 
        var y = document.getElementsById('pixel').offsetLeft;
        y = y + step;
        document.getElementById('pixel').style.left = y + "px";
        break;
      default:
        document.getElementById('pixel').style.position = "absolute";
        document.getElementById('pixel').style.top = "50%";document.getElementById('pixel').style.left = "50%";
    }
  }





  return (
    <div className="App">
      <Header />
      <View />
      <Navigation />
    </div>
  );
}

export default App;
