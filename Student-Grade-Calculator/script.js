let button = document.getElementById("inp");
button.addEventListener("click",function(){
    let phy = Number(document.getElementById('phy').value);
    let chem = Number(document.getElementById('chem').value);
    let maths = Number(document.getElementById('maths').value);
    let sum = phy + chem + maths;
    let percentage = (sum/300)*100
     document.getElementsByClassName("cal-r")[0].innerHTML = percentage.toPrecision(2);

})
