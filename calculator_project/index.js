/***************************************************************************** */
// Optimize code.....

var displayArea = document.getElementById("display");
var dotFlag = false;
function isOperator(buttonText) {
  if (
    buttonText == "+" ||
    buttonText == "-" ||
    buttonText == "*" ||
    buttonText == "/" ||
    buttonText == "%"
  )
  {
    dotFlag = false;
    return true;
  }
    
  else return false;
}

function buttonclicked(buttonText) {
    if(displayArea.innerText.length >= 24)
      return
  
    if (buttonText === "CLR") {
      displayArea.innerText = "0"
      return
    }
  
    if (buttonText === "DEL") {
      displayArea.innerText = displayArea.innerText.slice(0, -1)
      return
    }
  
    if (buttonText === "="){
      try {
        displayArea.innerText = eval(displayArea.innerText);
      } catch (error) {
        displayArea.innerText = 0;
      }
      return
    }
    if( buttonText == "." && displayArea.innerText.includes('.') && dotFlag){
        return
    }
    if (displayArea.innerText === "0") {
        if (buttonText == "0" || buttonText == "00")
          return
    
        if (buttonText == "." || isOperator(buttonText)) {
          displayArea.innerText = '0' + buttonText;
          return
        }
        if(buttonText == '.'){
            dotFlag = true;
        }
        displayArea.innerText = buttonText;
      } 
    else {
        if(buttonText == '.'){
            dotFlag = true; 
        }
        if (
          isOperator(displayArea.innerText[displayArea.innerText.length - 1]) &&
          isOperator(buttonText)
        ) {
          displayArea.innerText = displayArea.innerText.slice(0, -1) + buttonText
          return
        }
        
        displayArea.innerText = displayArea.innerText + buttonText;
    }
  }
  /**************************************************************************************************** */
  
// var displayarea= document.getElementById('display')
// function buttonclicked(buttontext){
// function isoperator(buttontext){
//    if(buttontext=='+' || buttontext=='-' || buttontext=='*' || buttontext=='/' || buttontext=='%')
//    return true
//    else
//    return false
// }
// var displayarea= document.getElementById('display')
// function buttonclicked(buttontext){
//    if(displayarea.innerText.length>=24){
//       return
//    }
//    if(buttontext!='CLR' && buttontext!='DEL' && buttontext!='='){
//    if(displayarea.innerText=='0'){
//       if(buttontext!='0' && buttontext!='00'){//dont do anything
//          if(buttontext=='.' || isoperator(buttontext)){//
//             displayarea.innerText= displayarea.innerText + buttontext
//          }
//          else{
//             displayarea.innerText=buttontext
//          }
//       } 
//    }
//    else{
//       if(isoperator(displayarea.innerText[displayarea.innerText.length-1]) && isoperator(buttontext))
//       {
//          //replace operator if last digit is operator
//          displayarea.innerText=displayarea.innerText.slice(0,-1)+ buttontext
//       }
//       else{
//          // if(buttontext!='.'){
//          displayarea.innerText= displayarea.innerText + buttontext
//          // }
//          // else if(!displayarea.innerText.includes('.')){
//          //    displayarea.innerText= displayarea.innerText + buttontext
//          // }
//       }
//    }
// }
// else{
//    if(buttontext=="CLR"){
//       displayarea.innerText='0'
//    }
//    else if(buttontext=='DEL'){
//       displayarea.innerText=displayarea.innerText.slice(0,-1)
//    }
//    else if(buttontext ==='='){
//       try{
//       displayarea.innerText= eval(displayarea.innerText)
//       }catch(error){
//          displayarea.innerText='0'
//       }
//    }
// }
// }

