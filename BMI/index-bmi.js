function bmiCalculator(weight,height) {
 var BMI = Math.round(weight/Math.pow(height,2));
 var str1="Your BMI is ";
 var str2=", so you are underweight";
 var str3=", so you have a normal weight";
 var str4=", so you are overweight";
 if(BMI<18.5)
 { return (str1 + BMI + str2);   }

 if(BMI>=18.5 && BMI<24.9){
   return (str1 + BMI + str3) ;
 }

 if(BMI<29.9 && BMI>=24.9){
   return (str1 + BMI + str4);
}
  if(BMI>=29.9)
  return (str1 + BMI + " so you are obese.");

 }
function getInputVal(){
var weight = document.getElementById("weight").value;
var height = document.getElementById("height").value;
console.log(weight,height)
var answer = bmiCalculator(weight,height);
if(answer!==undefined){
document.getElementById("answer").innerHTML= answer;
}
}
