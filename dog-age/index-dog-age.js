function yourDogsAge(dogAge,dogName)
{
    var humanAge = Math.round(((dogAge-2)*4)+21);
    return ("Your "+dogName+" is almost "+ humanAge +" human years old.");
}
function getInputValue(){

            var dogAge = document.getElementById("myInput").value;
            var dogName = document.getElementById("dogName").value;

           var answer = yourDogsAge(dogAge,dogName);
           document.getElementById("answer").innerHTML= answer;


        }
