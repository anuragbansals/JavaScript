let button = document.querySelector(".btn");
let body = document.querySelector("body");
let display = document.querySelector(".display");

button.addEventListener("click",function(){
    let color = setColor();
    body.style.backgroundColor = color;
    button.style.backgroundColor = color;
    display.innerHTML = "Background Color: " + color;
})
// function myColor(){
//     let color = setColor();

// }


function setColor(){
    let r = Math.floor(Math.random()*256);

    let g = Math.floor(Math.random()*256);

    let b = Math.floor(Math.random()*256);

    return "rgb(" + r + ", " + g +", " + b + ")";
}