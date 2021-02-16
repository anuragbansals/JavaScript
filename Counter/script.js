display = document.querySelector("#display");
// console.log(display.text);
btnInc = document.querySelector("#inc");
btnDec = document.querySelector('#dec');
reset = document.querySelector('#res');
var count  = 0;
if(btnInc){
    btnInc.addEventListener("click",function () {
        count++;
        display.innerHTML = "<h1>"+count+"</h1>";
        // console.log(count);
    })
}

if(btnDec){
    btnDec.addEventListener("click",function () {
        count--;
        display.innerHTML = "<h1>"+count+"</h1>";
        // console.log(count);
    })
}

if(reset){
    reset.addEventListener("click",function () {
        count = 0;
        display.innerHTML = "<h1>"+count+"</h1>";
        // console.log(count);
    })
}