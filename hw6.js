/***************************
Part 1
***************************/
function part1() {
    document.getElementById("p1Result").innerHTML = "";

    var resultMsg;
    var inputNumber = document.getElementById("num").value;
    let regex = /^(\d{0,99}?)(\.\d{4,99})$/;

    if(!isNaN(inputNumber)){
        var inputNum = parseFloat(inputNumber);
        if(regex.test(inputNum)){
            resultMsg = "<br> Your number: " + inputNum + 
            "<br> Round the floating-point number to the nearest integer: " + Math.round(inputNum) + 
            "<br> Square Root of the floating-point number and round it to an integer: " + Math.round(Math.sqrt(inputNum)) + 
            "<br> Round the floating-point number to the nearest tenths: " + inputNum.toFixed(1) + 
            "<br> Round the floating-point number to the nearest hundredths: " + inputNum.toFixed(2) +  
            "<br> Round the floating-point number to the nearest thousandths: " + inputNum.toFixed(3);
            document.getElementById("p1Result").innerHTML += (resultMsg);
            //alert(resultMsg)
        }
        else{
            resultMsg = "Error: At least 4 decimal positions required <br>";
            document.getElementById("p1Result").innerHTML+= (resultMsg); 
        }
    }
    else{
        resultMsg = "Error: Number required <br>";
        document.getElementById("p1Result").innerHTML+= (resultMsg); 
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
function part2(){
    document.getElementById("p2Result").innerHTML = "";
    var userInput, searchChar, resultMsg
    var count = 0;

    userInput = document.getElementById("userInput").value.toLowerCase();
    searchChar = document.getElementById("searchChar").value.toLowerCase();

    for(var i =0; i<userInput.length; i++){
        if(userInput.charAt(i) == searchChar){
            count += 1
        }
    }
    //alert(count)
    if(count == 0){
        var newWindow = window.open("", "new_window", "top=10, left=10, width=300, height=100");
        var myText = "<html>\n";
            myText += "<head>\n";
            myText += "<title>Popup Window</title>\n";
            myText += "</head>\n";
            myText += "<body>\n";
            myText += "<div align='center'>\n";
            myText += "<p><b>Search character " + "'" + searchChar + "'" + " not found in text string!</b></p>\n";
            myText += "<input type='button' value='Close Window' onclick='window.close()'>\n";
            myText += "</div>\n";
            myText += "</body>\n";
            myText += "</html>";
        // have browser focus on window

        newWindow.focus();

        // pump html into to this new opened window

        newWindow.document.write(myText);

        // tell browser that newWindow document is finished loading

        newWindow.document.close();
    }
    else{
        resultMsg = count + " occurrence(s) of " + searchChar + " found"
        document.getElementById("p2Result").innerHTML += (resultMsg);
    }
}

/***************************
Part 3
***************************/
    
$(document).ready(function(){
	jQuery(function($){
	   $("#phone").mask("(999) 999-9999");
	});
});

function part3() {

	if($("#p3form").valid()) {
		var phoneNumber = $('#phone').val();

		var tokens = phoneNumber.split( ' ' );

		var tokens2 = tokens[1].split( '-' );

		$('#areaCode').val(tokens[0].substr(1,3));
		$('#phonePrefix').val(tokens2[0]);
		$('#phoneNumber').val(tokens2[0] + '-' + tokens2[1]);
		$('#fullPhone').val(tokens[0] + ' ' + tokens2[0] + '-' + tokens2[1]);
		
	} else {
		return false;
	}
}

/***************************
Part 4
***************************/

