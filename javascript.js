//variable declarations
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let check = document.getElementById("check");
let click = document.getElementById("click");
let message = document.getElementById("message")
let n1;
let n2;


click.onclick = function(){ 
  //converts a string into a number
  n1 = parseFloat(number1.value); 
    //console.log(n1);  
  n2 = parseFloat(number2.value);
  
  //returns the value of x to the power of y
  let num1 = Math.pow(n1,2)
  let num2 = Math.pow(n2,2)

  if((n1<=0)||(n2<=0)){
     message.innerHTML = "<p>Please only use positive values</p>"; 
  } 
  else if(check.checked){
    let answer = num1 + num2;
    let finanswer = Math.sqrt(answer);
    message.innerHTML = "<p>Final answer is </p>"+finanswer; 
  }
  else{
    if(num1>num2){ 
     let answer = num1 - num2;
     let finanswer = Math.sqrt(answer);
    }
    else{
      let answer = num2 - num1;
      let finanswer = Math.sqrt(answer);
       message.innerHTML = "<p>Final answer is </p>"+finanswer;
    }
  }   
}
 