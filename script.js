let CircularBar = document.querySelector(".circular-bar");
 

let PercentValue = document.querySelector(".percent");
let PercentValue2 = document.querySelector("#p2");
let PercentValue3 = document.querySelector("#p3");

let b2 = document.querySelector("#b2");
let b3 = document.querySelector("#b3");

let InitialValue = 0;
let finaleValue = 70;
let speed = 10;

let timer = setInterval(() => {
  InitialValue += 1;

  CircularBar.style.background = `conic-gradient(#4285f4 ${InitialValue/100 * 360}deg, #e8f0f7 0deg)`;
  b2.style.background = `conic-gradient(#4285f4 ${InitialValue/100 * 360}deg, #e8f0f7 0deg)`;
  b3.style.background = `conic-gradient(#4285f4 ${InitialValue/100 * 360}deg, #e8f0f7 0deg)`;
  PercentValue.innerHTML = InitialValue+"%";
  PercentValue2.innerHTML = InitialValue+"%";
  PercentValue3.innerHTML = InitialValue+"%";

  if(InitialValue >= finaleValue){
    clearInterval(timer);
  }
}, speed)