var score=0;
      var corr=0;
      var incorr=0;
      var chanceLeft=10;
    document.getElementById("h2").innerHTML="Score: "+score+"/10";
     document.getElementById("correct").innerHTML="Correct: "+corr;
      document.getElementById("incorrect").innerHTML="Incorrect: "+incorr;
      document.getElementById("chance").innerHTML="Chance left: "+chanceLeft;
    function check(clicknum)
{
  var number=Math.floor(Math.random() * 20) + 1;
if (number==clicknum)
{
  corr+=1;
score=score+1;
document.getElementById("h2").innerHTML="Score: "+score+"/10";
 document.getElementById("correct").innerHTML="Correct: "+corr;
}
 else
{
  incorr+=1;
 document.getElementById("incorrect").innerHTML="Incorrect: "+incorr;
}
chanceLeft--;
  document.getElementById("chance").innerHTML="Chance left: "+chanceLeft;
if (chanceLeft==0)
 {
document.body.innerHTML="";  
location.href="gameover.html";
localStorage.setItem("fs",score);
 }
}