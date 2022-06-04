
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
        // eslint-disable-next-line
        var x = document.getElementById('pixel').offsetTop;
        x = x + step;
        document.getElementById('pixel').style.top = x + "px";
        break;
      case "right": 
      // eslint-disable-next-line
        var y = document.getElementsById('pixel').offsetLeft;
        y = y + step;
        document.getElementById('pixel').style.left = y + "px";
        break;
      default:
        document.getElementById('pixel').style.position = "absolute";
        document.getElementById('pixel').style.top = "50%";document.getElementById('pixel').style.left = "50%";
    }
  }

  export default movePixel;