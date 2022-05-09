var newline = true; //Boolean variable.Determine if the next thing the user types should be on a new line 
var value1;
var currentOperator;


//Event handler for when any digit button is pressed
function digitBtnPressed(button){
    
    if(newline){
        document.getElementById("inputBox").value = button;
        newline = false;
    } 
    
    else{
        
    var currentValue = document.getElementById("inputBox").value;
    document.getElementById("inputBox").value = currentValue + button;
}
    
}
//Event handler for when the AC  button is pressed
function btnACPressed(){
    document.getElementById("inputBox").value = 0;
    newline = true;
}
//Event handler for operator buttons
function operatorBtnPressed(operator){
    currentOperator = operator;
    value1 = parseFloat(document.getElementById("inputBox").value);
    newline = true;
}
//Event handler for equals to button
function equalsBtnPressed(){
    var value2 = parseFloat(document.getElementById("inputBox").value);
    var finalTotal;
    
    switch(currentOperator){
            case"+":
                finalTotal =  value1 + value2;
                break;
            case"-":
                finalTotal =  value1 - value2;
                break;
            case"/":
                finalTotal =  value1 / value2;
                break;
            case"x":
                finalTotal =  value1 * value2;
                break;  
            case'.': 
                inputDecimal(value);               
    }
                
    document.getElementById("inputBox").value = finalTotal;

    value1 = 0;
    newline = true;
}