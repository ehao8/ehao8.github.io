/***************************
Part 1
***************************/
$(function() {
    $( "#p1aResult" ).draggable();
});
$(function() {
    $( "#p1bResult" ).draggable();
});
function part1a(){
    var sum = 0;
    var product = 1;
    document.getElementById("p1aResult").innerHTML+= "";
    for ( var i = 5; i < 22; i += 4 )
    { 
       sum += i;
       product *= i;
    }
    productMsg = "The product of every fourth integers from 5 to 21 inclusive is " + product.toLocaleString("en-US") + "<br>";
    sumMsg = "The product of every fourth integers from 5 to 21 inclusive is " + sum.toLocaleString("en-US") + "<br>";
    document.getElementById("p1aResult").innerHTML+= (productMsg);
    document.getElementById("p1aResult").innerHTML+= (sumMsg);
}
function part1b(){
    var sum = 0;
    var product = 1;
    var i = 3; 
    document.getElementById("p1bResult").innerHTML+= "";
    while(i<22){
        sum += i;
        product *= i;
        i += 3;
    }
    productMsg = "The product of every third integers from 3 to 21 inclusive is " + product.toLocaleString("en-US") + "<br>";
    sumMsg = "The product of every third integers from 3 to 21 inclusive is " + sum.toLocaleString("en-US") + "<br>";
    document.getElementById("p1bResult").innerHTML+= (productMsg);
    document.getElementById("p1bResult").innerHTML+= (sumMsg);

}

/***************************
Part 2
***************************/
var initialAmount = 1000;
var interestRate = 0.05;

document.getElementById("p2Result").innerHTML += "";

for (var numOfTables = 0; numOfTables < 3; numOfTables++) {
    var interestTable = '';

    interestTable += "<thead>";
    interestTable += "<tr><th scope='col'>Year</th>";
    interestTable += "<th scope='col'>Amount on Deposit</th>";
    interestTable += "<th scope='col'>Interest Rate</th>";
    interestTable += "</tr></thead>";
    interestTable += "<tbody>";

    for (var year = 1; year <= 10; year++) {

        var totalMoneyWithInterest = (initialAmount * Math.pow(1 + interestRate, year)).toFixed(2);
        interestTable += "<tr class='number'>";
        interestTable += "<td>" + year + "</td>";
        interestTable += "<td>" + totalMoneyWithInterest + "</td>";
        interestTable += "<td>" + interestRate.toFixed(2) + "</td>";
        interestTable += "</tr>";
    }
    interestTable += '</tbody>';
    finalTable = "<table class='center'>" + interestTable +  "</table><br>"
    document.getElementById("p2Result").innerHTML += (finalTable);
    //document.write("<table>" + interestTable +  "</table>");
    interestRate += 0.01;
}



/***************************
Extra Credit
***************************/

/*
$(document).ready(function() {
    $("#ecform").validate({
    // Rules for each input item
    rules: {
        square: { required: true, number: true, min: 2, max: 10}
    },

});
});
*/
function ec(){
    document.getElementById("ecResult").innerHTML = "";
    var num
    var ecResult="";
    
    square = document.getElementById("square").value;
    var errMsg = "<span style='font-weight: bold; color: red; font-size: 1.5em;'>ERROR: Please enter a number between 2 and 10</span>";
    if(!isNaN(square)){
        num = parseInt(square);
        if(num >= 2 && num <= 10){ 

            ecResult = "<pre>";

            for(var row = 0; row < num; row++){
                ecResult += "* ";
                for(var col = 1; col <num; col++){
                    if(row == 0 || row == (num-1) || col == (num-1)){
                        ecResult += "* ";
                    }
                    else{
                        ecResult += "&nbsp; ";
                    }
                }
                ecResult += "<br>";
            }
            ecResult += "</pre>";
            document.getElementById("ecResult").innerHTML += ecResult;
        }
        else{
            document.getElementById("ecResult").innerHTML += errMsg;
        }
    }
    else{
        document.getElementById("ecResult").innerHTML += errMsg;
    }
}
$(document).ready(function(){
    $("#ecReset").click(function(){
        $("#ecResult").fadeOut("slow");
    });
});

/***************************
Part 4
***************************/

