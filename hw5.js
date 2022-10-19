/***************************
Part 1
***************************/

function part1() {
    document.getElementById("p1Result").innerHTML = "";
    if ( $("#p1form").valid() ) {
        document.getElementById('p1Result').innerHTML='<p>Successfully filled form</p>';
     }
}


$(document).ready(function() {
    $('#p1form').validate({
        rules: {
            name: { 
              required:true 
            },
            gender: {
              required:true
            },
            age: {
              required:true
            },
            ethnicity: {
              required:true
            }
          },
          messages: {
            name: {
              required: 'Your name is required'
            },
            gender: {
              required: 'Your gender is required'
            },
            age: {
              required: 'Please choose one of the options'
            },
            ethnicity: {
              required: 'Please choose one of the options'
            }
          },
          errorPlacement: function(error, element) {
            if ( element.is(":radio") || element.is(":checkbox")) {
              error.appendTo( element.parent());
            } else {
              error.insertAfter(element);
            }
          }
        });
      });

/***************************
Part 2
***************************/
function goToNewPage(myForm) {
    var myDestination = myForm.destinationList.options[myForm.destinationList.selectedIndex].value;
    window.location = myDestination;
}

/***************************
Part 3
***************************/

function part3(){
    var stateCensus = [
        ["AL", "Alabama", "Montgomery", "4,887,871"],
        ["AK", "Alaska", "Juneau", "737,438"],
        ["AZ", "Arizona", "Phoenix", "7,171,646"],
        ["AR", "Arkansas", "Little Rock", "3,010,825"],
        ["CA", "California", "Sacramento", "39,557,045"],
        ["CO", "Colorado", "Denver", "5,694,564"]
    ];
    document.getElementById("p3Result").innerHTML = "";
    var searchVal, same, stateAbbr, stateName, capital, population, resultMsg;
    foundResult = false;
    searchVal = document.getElementById("stateVal").value;
    searchVal = searchVal.toUpperCase();
    //alert(searchVal)

    for(var i = 0; i <stateCensus.length; i++){
        if(stateCensus[i][0] == searchVal || stateCensus[i][1] == searchVal){
            stateAbbr = stateCensus[i][0];
            stateName = stateCensus[i][1];
            capital = stateCensus[i][2];
            population = stateCensus[i][3];
            i += stateCensus.length;
            foundResult = true;

            resultMsg = "Thanks for your inquiry, here is the information you requested:" + "<br>State Abbr: " + stateAbbr + "<br>State Name: " + stateName + "<br>Capital: " + capital + "<br>Population: " + population;
            document.getElementById("p3Result").innerHTML+= (resultMsg); 
        }

    }
    if(foundResult == false){
            resultMsg = "Error: State not found";
            document.getElementById("p3Result").innerHTML+= (resultMsg); 
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

