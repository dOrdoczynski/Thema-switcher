const switcherButton = document.querySelector(".switcher");

if (switcherButton) {
    switcherButton.addEventListener("click", changeColor)
}

function changeColor() {
    const red = document.querySelector(".red");
    if (red) {
    red.classList.toggle('red_color'); }

    const orange = document.querySelector(".orange")
    if (orange) {
    orange.classList.toggle('orange_color'); }
    
    const yellow = document.querySelector(".yellow")
    if (yellow) {
    yellow.classList.toggle('yellow_color'); }
        
    const green = document.querySelector(".green")
    if (green) {
    green.classList.toggle('green_color'); }
     
    const blue = document.querySelector(".blue")
    if (blue) {
    blue.classList.toggle('blue_color'); }
    
    const purple = document.querySelector(".purple")
    if (purple) {
    purple.classList.toggle('purple_color'); }
    
}