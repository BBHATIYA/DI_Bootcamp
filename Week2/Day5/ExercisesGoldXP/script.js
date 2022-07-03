// let number = 0;

function number(num){
    // console.log(num);
    return num;
  
}
number();

function operator(operator){
    // console.log(operator);
    return operator;
}
operator(); 


function equal(){
   let numResult = number();
   let operatorResult = operator();

    return eval( numResult + numResult);
}


console.log(equal());