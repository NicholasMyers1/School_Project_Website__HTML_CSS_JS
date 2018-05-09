var canvas=document.getElementById("_aboutCanvas");
  var canvasAbout=canvas.getContext("2d");
    canvasAbout.fillStyle="#19005a";
    canvasAbout.fillRect(0,0,canvas.width,canvas.height);
    canvasAbout.fillStyle="#2d966e";
    canvasAbout.font="25px Comic Sans MS";
    canvasAbout.fillText("Fish Sales!",90,25);

var CanvasAboutImage=document.getElementById("_fishCanvas");
  CanvasAboutImage.onload=function(){
    canvasAbout.drawImage(CanvasAboutImage,100,50,100,100*CanvasAboutImage.height/CanvasAboutImage.width);
  }