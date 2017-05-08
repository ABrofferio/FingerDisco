let theBody = document.getElementsByTagName("body")[0];
let colors = ["red", "orange", "yellow", "green", "blue", "purple"];
let audio = document.getElementsByTagName(audio)[0];
let sounds = audio.children;

theBody.addEventListener('keydown',(function(){
    theBody.style.backgroundColor = colors[0];
    sounds[0].play();
    let theColor = colors.shift();
    colors.push(theColor);
}));
document.addEventListener('keyup',(function(){
    theBody.style.backgroundColor = colors[0];
}));