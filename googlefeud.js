var myObj, x;
x = myObj.sentence;
document.getElementById("object").innerHTML = x;
myFunction(x);

function myFunction(x){
  var uInput = userInput.value;
  if (uInput == myObj.responseOne||uInput == myObj.responseTwo||uInput == myObj.responseThree||uInput == myObj.responseFour||uInput == myObj.responseFive||uInput == myObj.responseSix||uInput == myObj.responseSeven||uInput == myObj.responseEight||uInput == myObj.responseNine||uInput == myObj.responseTen){
alert("You score 10 points!");}
else {
  alert("You don't score any points. Guess again.");
}
}
