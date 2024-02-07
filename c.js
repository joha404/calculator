const userInput = document.getElementById("userInput");
var e = '';

function press(num){
    e +=num;
    userInput.value=e;
}
function equal(){
    userInput.value= eval(e);
    e = '';
}

function erase(){
    e = '';
    userInput.value=e;
}