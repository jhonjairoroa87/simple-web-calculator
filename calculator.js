/////////////////////////////////////////////
//// Called when the buttons are clicked ////
/////////////////////////////////////////////

function clickedAddNumbersButton(){
    var fieldsValues = getFieldsValues('add-first-number', 'add-second-number');
    callAddService(fieldsValues.a, fieldsValues.b);
}

function clickedSubtractNumbersButton(){
    var fieldsValues = getFieldsValues('subtract-first-number', 'subtract-second-number');
    callSubtractService(fieldsValues.a, fieldsValues.b);
}

function clickedMultiplyNumbersButton(){
    var fieldsValues = getFieldsValues('multiply-first-number', 'multiply-second-number');
    callMultiplyService(fieldsValues.a, fieldsValues.b);
}

function clickedDivideNumbersButton(){
    var fieldsValues = getFieldsValues('divide-first-number', 'divide-second-number');
    callDivideService(fieldsValues.a, fieldsValues.b);
}

//////////////////////////////
//// Call to web services ////
//////////////////////////////

function callAddService(firstAddNumberValue, secondAddNumberValue){
    var url = "https://flask-calculator-microservice.herokuapp.com/add?a="+firstAddNumberValue+"&b="+secondAddNumberValue;
	basicAjaxCall(url,callAddServiceSuccess);
}

function callSubtractService(firstAddNumberValue, secondAddNumberValue){
    var url = "https://flask-calculator-microservice.herokuapp.com/subtract?a="+firstAddNumberValue+"&b="+secondAddNumberValue;
    basicAjaxCall(url,callSubtractServiceSuccess);
}

function callMultiplyService(firstAddNumberValue, secondAddNumberValue){
    var url = "https://django-calculator-microservice.herokuapp.com/multiply?a="+firstAddNumberValue+"&b="+secondAddNumberValue;
    basicAjaxCall(url,callMultiplyServiceSuccess);
}

function callDivideService(firstAddNumberValue, secondAddNumberValue){
    var url = "https://django-calculator-microservice.herokuapp.com/divide?a="+firstAddNumberValue+"&b="+secondAddNumberValue;
    basicAjaxCall(url,callDivideServiceSuccess);
}

function basicAjaxCall(url, successCallback){
    $.ajax({
      url: url,
      dataType: "jsonp",
      success : successCallback
    });
}

function getFieldsValues(firstNumberId, secondNumberId){
    var firstAddNumberValue = $('#'+firstNumberId).val();
    var secondAddNumberValue = $('#'+secondNumberId).val();
    return {'a': firstAddNumberValue, 'b': secondAddNumberValue}
}

///////////////////////////////////////////////////
//// Success callback when called web services ////
///////////////////////////////////////////////////

function callAddServiceSuccess(data, textStatus, jqXHR){
    showOperationResult('add-result', data.result);
}

function callSubtractServiceSuccess(data, textStatus, jqXHR){
    showOperationResult('subtract-result', data.result);
}

function callMultiplyServiceSuccess(data, textStatus, jqXHR){
    showOperationResult('multiply-result', data.result);
}

function callDivideServiceSuccess(data, textStatus, jqXHR){
    showOperationResult('divide-result', data.result);
}

/////////////////////////////
//// Update result label ////
/////////////////////////////
function showOperationResult(labelId, operationResult){
    $('#'+labelId).text(operationResult);
}




