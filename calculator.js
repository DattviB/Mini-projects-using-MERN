$(document).ready(function(){
    const username = localStorage.getItem('username').toLocaleUpperCase();
    
    document.getElementById('userName').innerHTML=username;
});


const calcForm = document.getElementById('calcForm'); 
function logOut(){
    localStorage.clear();
    window.location.href = "loginForm.html";
}
//var regExNum = /^[0-9]*$/;
var regExNum = /^-?[0-9]\d*(\.\d+)?$/;

function validateFields(num1,num2){
var nullFlagN1 = true;
var invalidFlagN1 = true;
var nullFlagN2 = true;
var invalidFlagN2 = true;
if(num1=="" || num1==null){
    nullFlagN1 = false;
}else if(!(num1.match(regExNum))){
    invalidFlagN1 = false;
}
if(num2=="" || num2==null){
    nullFlagN2 = false;
}else if(!(num2.match(regExNum))){
    invalidFlagN2 = false;
}

if(nullFlagN1==false && nullFlagN2==false){
    $('#error_firstNum').show()
    $('#error_firstNum').text("Please enter the number");
    $('#number1').css("border-color","red");
    $('#error_secNum').show();
    $('#error_secNum').text("Please enter the number");
    $('#number2').css("border-color","red");
    $('#result').val('');
   
} if(nullFlagN1==false){
    $('#error_firstNum').show()
   $('#error_firstNum').text("Please enter the number");
   $('#number1').css("border-color","red");
   $('#result').val('');
  
} if(nullFlagN2==false){
    $('#error_secNum').show();
    $('#error_secNum').text("Please enter the number");
    $('#number2').css("border-color","red");
    $('#result').val('');
  
} if(invalidFlagN1==false && invalidFlagN2==false){
    $('#error_firstNum').show()
    $('#error_firstNum').text("Please enter valid number (only digits allowed)");
    $('#number1').css("border-color","red");
    $('#number1').val('');
    $('#error_secNum').show();
    $('#error_secNum').text("Please enter valid number (only digits allowed)");
    $('#number2').css("border-color","red");
    $('#number2').val('')
    $('#result').val('');
} if(invalidFlagN1==false){
    $('#error_firstNum').show()
    $('#error_firstNum').text("Please enter valid number (only digits allowed)");
    $('#number1').css("border-color","red");
    $('#number1').val('')
    $('#result').val('');
} if(invalidFlagN2==false){
    $('#error_secNum').show();
    $('#error_secNum').text("Please enter valid number (only digits allowed)");
    $('#number2').css("border-color","red");
    $('#number2').val('');
    $('#result').val('');
}
if(nullFlagN1==true && invalidFlagN1==true){
    $('#error_firstNum').hide();
    $('#number1').css("border-color",'');
    
}
if(nullFlagN2==true && invalidFlagN2==true){
    $('#error_secNum').hide();
    $('#number2').css("border-color",'');
}
if($('#error_firstNum').is(":visible") || $('#error_secNum').is(":visible") ){
    return false;
}else{
    return true;
}
// if(num1!=null  && num1!=""){
//     if(num2!=null  && num2!=""){
//         if(num1.match(regExNum)){
//             $('#error_firstNum').hide();
//             $('#number1').css("border-color",'');
//             if(num2.match(regExNum)){
                
//                 $('#error_secNum').hide();
//                 $('#number2').css("border-color",'');
//                 return true;
//             }else{
//                 $('#error_secNum').text("Please enter valid number (only digits allowed)");
//                 $('#number2').css("border-color","red");
//                 $('#number2').val('')
//                 return false;
//             }
//         }else{
//             $('#error_firstNum').text("Please enter valid number (only digits allowed)");
//             $('#number1').css("border-color","red");
//             $('#number1').val('')
//             return false;
//         }
//     }else{
//         $('#error_secNum').text("Please enter the number");
//         $('#number2').css("border-color","red");
//         return false;
//     }
   
// }else{
//    $('#error_firstNum').text("Please enter the number");
//    $('#number1').css("border-color","red");
   
//    return false;
// }
}
//arrow function for arithmetic ops
let res = (num1,num2,ops) => {
let result;
if(ops=='add'){
    //for adding
     result = parseFloat(num1) + parseFloat(num2);
    return parseFloat(result);
}else if(ops=='subtract'){
    //for subtracting
     result = parseFloat(num1) - parseFloat(num2);
    return parseFloat(result);
}else if(ops=='multiply'){
    result = parseFloat(num1) * parseFloat(num2);
    return parseFloat(result);
}else if(ops=='divide'){
    result = parseFloat(num1) / parseFloat(num2);
    return parseFloat(result);
}
};

var addBtn = document.getElementById('add');
addBtn.addEventListener('click',function(e){
 num1 = $('#number1').val();
 num2 = $('#number2').val();
 if(validateFields(num1,num2)){
    $('#result').val(res(num1,num2,'add'));
 }
});

var subBtn = document.getElementById('subtract');
subBtn.addEventListener('click',function(e){
 num1 = $('#number1').val();
 num2 = $('#number2').val();
 if(validateFields(num1,num2)){
    $('#result').val(res(num1,num2,'subtract'));
 }
});

var multiplyBtn = document.getElementById('multiply');
multiplyBtn.addEventListener('click',function(e){
 num1 = $('#number1').val();
 num2 = $('#number2').val();
 if(validateFields(num1,num2)){
    $('#result').val(res(num1,num2,'multiply'));
 }
});

var divideBtn = document.getElementById('divide');
divideBtn.addEventListener('click',function(e){
 num1 = $('#number1').val();
 num2 = $('#number2').val();
 if(num2!=0){
    if(validateFields(num1,num2)){
        $('#result').val(res(num1,num2,'divide'));
    }
}else{
    $('#error_secNum').text("This number cannot be 0");
    $('#number2').css("border-color","red");
    $('#number2').val('');
}
});