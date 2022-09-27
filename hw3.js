/***************************
Part 1
***************************/

$(document).ready(function() {
    $("#p1form").validate({
    // Rules for each input item
    rules: {
        hwavg: { required: true, number: true, min: 0, max: 100},
        midterm: { required: true, number: true, min:  0, max: 100},
        finalexam: { required: true, number: true, min: 0, max: 100},
        participation: { required: true, number: true, min: 0, max: 100}
    },

});
});

function part1(){
    if($("#p1form").valid()){
        document.getElementById("p1Result").innerHTML = "";
        var hwAvg, midtermAvg, finalAvg, participation;
        var resultMsg = "";
        var errMsg = "<span style='font-weight: bold; color: red; font-size: 1.5em;'>ERROR: Please enter integers only</span>";
        /*
        number1 = document.forms["p2Form"].elements["num1"].value;
        number2 = document.forms["p2Form"].elements["num2"].value;
        number3 = document.forms["p2Form"].elements["num3"].value;
        */
        hwAvg = document.getElementById("hwavg").value;
        midtermAvg = document.getElementById("midterm").value;
        finalAvg = document.getElementById("finalexam").value;      
        participation = document.getElementById("participation").value;

        if(!isNaN(hwAvg) && !isNaN(midtermAvg) && !isNaN(finalAvg) && !isNaN(participation)){
            n1 = parseInt(hwAvg);
            n2 = parseInt(midtermAvg);
            n3 = parseInt(finalAvg);
            n4 = parseInt(participation);

            finalGrade = parseInt((.5 * hwAvg) + (.2 * midtermAvg) + (.2 * finalAvg) + (.1 * participation))

            if(finalGrade >= 90){
                resultMsg = "<br>Final Average: " + finalGrade + "<br>Final Letter Grade: A";
                document.getElementById("p1Result").innerHTML+= (resultMsg); 
            }
            else if(finalGrade >= 80 && finalGrade <= 89){
                resultMsg = "<br>Final Average: " + finalGrade + "<br>Final Letter Grade: B";
                document.getElementById("p1Result").innerHTML+= (resultMsg); 
            } 
            else if(finalGrade >= 70 && finalGrade <= 79){
                resultMsg = "<br>Final Average: " + finalGrade + "<br>Final Letter Grade: C";
                document.getElementById("p1Result").innerHTML+= (resultMsg); 
            } 
            else if(finalGrade >= 60 && finalGrade <= 69){
                resultMsg = "<br>Final Average: " + finalGrade + "<br>Final Letter Grade: D" + "<br>Student must retake the course!";
                document.getElementById("p1Result").innerHTML+= (resultMsg); 
            } 
            else if(finalGrade <= 59){
                resultMsg = "<br>Final Average: " + finalGrade + "<br>Final Letter Grade: F" + "<br>Student must retake the course!";
                document.getElementById("p1Result").innerHTML+= (resultMsg); 
            } 

            //resultMsg = "<br>Final Average: " + finalGrade;
            //document.getElementById("p1Result").innerHTML+= (resultMsg); 

            //document.forms["p2Form"].elements["p2Result"].value = ("Sum: " + sum + "\nAverage: " + avg + "\nProduct: " + product + "\nMin: " + min + "\nMax: " + max); 
        }
        else{
            document.getElementById("p1Result").innerHTML+= (errMsg);
            //document.forms["p2Form"].elements["p2Result"].value = ("ERROR: Please enter integers only"); 
        }
        $(document).ready(function(){
            $("#p1Result").fadeIn("slow");
        });
    }
}
$(document).ready(function(){
    $("#p1Reset").click(function(){
        $("#p1Result").fadeOut("slow");
    });
});

/***************************
Part 2
***************************/
const item1Price = 239.99;
const item2Price = 129.75;
const item3Price = 99.95;
const item4Price = 350.89;
const baseSalary = 200;

$(document).ready(function() {
$("#p2Form").validate({
// Rules for each input item
rules: {
    sales: { required: true},
    item1: { required: true, number: true,  min: 0},
    item2: { required: true, number: true,  min: 0},
    item3: { required: true, number: true,  min: 0},
    item4: { required: true, number: true,  min: 0}
},

});
});

function part2(){
    if($("#p2Form").valid()){
        document.getElementById("p2Result").innerHTML = "";
        var itemNumber1, itemNumber2, itemNumber3, itemNumber4, itemTotal, salaryTotal;
        var n1, n2, n3, n4;
        var resultMsg = "";
        var errMsg = "<span style='font-weight: bold; color: red; font-size: 1.5em;'>ERROR: Please enter integers only</span>";

        itemNumber1 = document.getElementById("item1").value;
        itemNumber2 = document.getElementById("item2").value;
        itemNumber3 = document.getElementById("item3").value;
        itemNumber4 = document.getElementById("item4").value;
        if(!isNaN(itemNumber1) && !isNaN(itemNumber2) && !isNaN(itemNumber3) && !isNaN(itemNumber4)){
            //itemTotal = document.getElementById("item_total").value;
            //salaryTotal = document.getElementById("salary").value;

            n1 = parseInt(itemNumber1);
            n2 = parseInt(itemNumber2);
            n3 = parseInt(itemNumber3);
            n4 = parseInt(itemNumber4);


            var item1Total = n1 * item1Price;
            var item2Total = n2 * item2Price;
            var item3Total = n3 * item3Price;
            var item4Total = n4 * item4Price;
            var itemTotal = item1Total + item2Total + item3Total + item4Total;
            var salaryTotal = (itemTotal*.09) + baseSalary;


            document.forms["p2Form"].elements["item1_num"].value = n1;
            document.forms["p2Form"].elements["item2_num"].value = n2;
            document.forms["p2Form"].elements["item3_num"].value = n3;
            document.forms["p2Form"].elements["item4_num"].value = n4;

            document.forms["p2Form"].elements["item1_total"].value = item1Total.toFixed(2);
            document.forms["p2Form"].elements["item2_total"].value = item2Total.toFixed(2);
            document.forms["p2Form"].elements["item3_total"].value = item3Total.toFixed(2);
            document.forms["p2Form"].elements["item4_total"].value = item4Total.toFixed(2);
            
            document.forms["p2Form"].elements["item_total"].value = itemTotal.toFixed(2);
            document.forms["p2Form"].elements["salary"].value = salaryTotal.toFixed(2);
        }
        else{
            document.getElementById("p2Result").innerHTML+= (errMsg);
        }

}
}


/***************************
Part 3
***************************/
$(document).ready(function() {
    $("#p3form").validate({
    // Rules for each input item
    rules: {

        temp: { required: true, number: true}
    },
    
    });
    });

function celsius(){
    if($("#p3form").valid()){
        document.getElementById("p3Result").innerHTML = "";
        var temp1, celsius;
        var n1;
        var resultMsg = "";
        var errMsg = "<span style='font-weight: bold; color: red; font-size: 1.5em;'>ERROR: Please enter integers only</span>";

        temp1 = document.getElementById("temp").value;

        if(!isNaN(temp1)){
            n1 = parseFloat(temp1);
            celsius = parseInt(5/9 * (n1 -32));
            resultMsg = "Temperature: " + celsius + "<span>&#176;</span>" + "C";
            document.getElementById("p3Result").innerHTML+= (resultMsg); 
        }
        else{
            document.getElementById("p3Result").innerHTML += (errMsg);
        }

        $(document).ready(function(){
            $("#p3Result").fadeIn("slow");
        });
    }
}

function fahrenheit(){
    if($("#p3form").valid()){
        document.getElementById("p3Result").innerHTML = "";
        var temp1, fahrenheit;
        var n1;
        var resultMsg = "";
        var errMsg = "<span style='font-weight: bold; color: red; font-size: 1.5em;'>ERROR: Please enter integers only</span>";

        temp1 = document.getElementById("temp").value;

        if(!isNaN(temp1)){
            n1 = parseFloat(temp1);
            fahrenheit = parseInt((9/5 * n1) + 32);
            resultMsg = "Temperature: " + fahrenheit + "<span>&#176;</span>" + "F";
            document.getElementById("p3Result").innerHTML+= (resultMsg); 
        }
        else{
            document.getElementById("p3Result").innerHTML += (errMsg);
        }

        $(document).ready(function(){
                $("#p3Result").fadeIn("slow");
            });
    }
}   

$(document).ready(function(){
    $("#p3Reset").click(function(){
        $("#p3Result").fadeOut("slow");
    });
});


/***************************
Part 4
***************************/


$(document).ready(function() {
    $("#p4form").validate({
    // Rules for each input item
    rules: {

        userAnswer: { required: true, number: true}
    },
    
    });
    });

function getRandomInt() {
  return Math.floor(Math.random() * 10);
}

function populateNumbers(){
    document.forms["p4form"].elements["num1"].value = Math.floor(Math.random() * 10);
    document.forms["p4form"].elements["num2"].value = getRandomInt();
    document.forms["p4form"].elements["userAnswer"].value = "";
}

function part4(){
    if($("#p4form").valid()){
        document.getElementById("p4Result").innerHTML = "";
        var number1, number2, number3, userAnswer;

        var resultMsg = "";
        var errMsg = "<span style='font-weight: bold; color: red; font-size: 1.5em;'>ERROR: Please enter integers only</span>";
        var incorrectAns = "<span style='color: red; font-size: 1.0em;'>No. Please try again.</span>";

        number1 = document.getElementById("num1").value;
        number2 = document.getElementById("num2").value;
        number3 = document.getElementById("userAnswer").value;
        if(!isNaN(number3)){
            userAnswer = parseInt(number3);

            if((number1 * number2) == userAnswer){
                var continueMsg="Very good! Press OK to continue."
                /*******
                resultMsg = "Very good! Do you want to continue";
                document.getElementById("p4Result").innerHTML+= (resultMsg); 
                
                    $("#p4Result").append(`
                                <input type="button" onclick="populateNumbers()" value="Yes">
                                <input type="button" onclick="clear()" value="No">
                              `);
                *******/
                if(confirm(continueMsg) == true){
                    populateNumbers();
                }

            }
            else{
                document.getElementById("p4Result").innerHTML += (incorrectAns);
                document.forms["p4form"].elements["userAnswer"].value = "";
            }
        }
        else{
            document.getElementById("p4Result").innerHTML += (errMsg);
        }

        $(document).ready(function(){
                $("#p4Result").fadeIn("slow");
            });
    }
}

$(document).ready(function(){
    $("#p4Reset").click(function(){
        $("#p4Result").fadeOut("slow");
    });
});