const counterE1 = document.querySelectorAll(".counter");

counterE1.forEach((counterE1) => {
counterE1.innerText = "0";
incrementCounter();
function incrementCounter () {
    let countNum = +counterE1.innerText;
    const dataceil = counterE1.getAttribute("data-ceil");
    const increment = dataceil / 15;
   
    countNum = Math.floor(countNum + increment);

    if(countNum < dataceil){
        counterE1.innerText = countNum;
        setTimeout(incrementCounter,50);
    }
   else{
    counterE1.innerHTML=dataceil;
   }

}
});