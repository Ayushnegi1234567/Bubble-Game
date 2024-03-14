var timer = 60;

function makeBubble() {
  var numbergen = "";
  for (var i = 1; i <= 207; i++) {
    var number = Math.floor(Math.random() * 10);
    numbergen += `<div class="bubble">
       ${number}
     </div>`;
  }
  document.querySelector(".pbot").innerHTML = numbergen;
}
makeBubble();

function time() {
  var time1 = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").innerHTML = timer;
    } else {
      clearInterval(time1);
      document.querySelector(".pbot").innerHTML="<h1>Game is Over</h1>";
      document.querySelector(".pbot").innerHTML="<h1>your  0 score:</h1>";

    }
  }, 1000);
}
time();




number=0;
function hitVal() {
     number=Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent=number;
}
hitVal();


var score=0;
function scoreVal(){
    score+=10;
    document.querySelector("#scoreVal").textContent=score;



}

document.querySelector(".pbot").addEventListener("click",function(dets){
var clickedNum=(Number(dets.target.textContent));
if(clickedNum===number){
scoreVal();
makeBubble();
hitVal();






}

})
