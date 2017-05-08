let theBody = document.getElementsByTagName("body")[0];
let colors = ["red", "orange", "yellow", "green", "blue", "purple"];

theBody.addEventListener('keydown',(function(){
    theBody.style.backgroundColor = colors[0];
    let audio = document.getElementsByTagName("audio")[0];
    audio.loop=true;
    audio.play();
    let theColor = colors.shift();
    colors.push(theColor);
}));
document.addEventListener('keyup',(function(){
    theBody.style.backgroundColor = colors[0];
}));