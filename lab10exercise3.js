function add(){

  //Get the input from the two input type texts
var numberOne = document.getElementById("numberOne").value;
var numberTwo = document.getElementById("numberTwo").value;

//Add the two numbers together
var sum = Number(numberOne) + Number(numberTwo);

//Out the value to the screen
document.getElementById("output").innerHTML = sum;
}
