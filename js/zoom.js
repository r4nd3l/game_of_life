
function zoomin(){
  var myImg = document.getElementsByTagName("canvas")[0];
  var currWidth = myImg.clientWidth;
  if(currWidth == 100) return false;
  else{
    myImg.style.width = (currWidth + 100) + "px";
  }
}
function zoomout(){
  var myImg = document.getElementsByTagName("canvas")[0];
  var currWidth = myImg.clientWidth;
  if(currWidth == 100) return false;
  else{
    myImg.style.width = (currWidth - 100) + "px";
  }
}
