/*
 * Implement all your JavaScript in this file!
 */
 $("#clearButton").click(function () {
        $('input').val("");
    });


 $(".num").click(function () {
        var EText = $('#display').val();
        if (EText != "0") {
            var val1 = EText;
            var ButtonVal = $(this);
            var val2 = ButtonVal.text();
            var Res = val1 + val2;
            $('#display').val(Res);
        } else if ($(this).text() === 'C') {
        	//pass
        }

        else {
            $('#display').val()
        }
    });

 var interRes = null;
 var operator;
 $('.operator').click(function () {
     var value1 = $('#display').val();
     if (interRes != null) {
         var result = ApplyOperation(interRes, value1, operator);
         interRes = result;
     } else {
         interRes = value1;
     }
     operator = $(this).attr("id");
     $('input').val("");
 });

 function ApplyOperation(value1, value2, operator) {
     var res;
     console.log(operator)
     switch (operator) {
         case "addButton":
             res = parseInt(value1) + parseInt(value2);
             break;
         case "subtractButton":
             res = parseInt(value1) - parseInt(value2);
             break;
         case "multiplyButton":
             res = parseInt(value1)*parseInt(value2);
             break;
         case "divideButton":
             res = parseInt(value1) / parseInt(value2);
             break;
     }
     return res;
 }



 $("#equalsButton").click(function() {
 	var op = operator;
 	var res;
 	var value2 = $('#display').val();
 	if (value2 != "") {
 		res = ApplyOperation(interRes, value2, op);
 	} else {
 		res = interRes;
 	}
 	$('#display').val(res);
 	interRes = null

 })