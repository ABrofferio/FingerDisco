let theBody = document.getElementsByTagName("body")[0];
let audio = document.getElementsByTagName("audio")[0];
let colors = ["red", "orange", "yellow", "green", "blue", "purple", "magenta", "aqua", "white", "black"];

theBody.addEventListener('keydown',(function(){
    theBody.style.backgroundColor = colors[0];
    audio.loop=true;
    audio.play();
    let theColor = colors.shift();
    colors.push(theColor);
    $('p').hide();
}));
theBody.addEventListener('keyup',(function(){
    theBody.style.backgroundColor = colors[0];
    $('p').hide();
}));
$('button').on('click',(function(){
    audio.pause();
    $('p').hide();
}));