let out = document.getElementById('screen');

function buttonClick(val) {
    console.log(val);
    out.value += val;
}

function clearScreen() {
    out.value = "";
}

function displayResult(){
    var text = out.value;
   var result=eval(text);
    out.value=result;
    console.log(result)
}