function compute(){
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var text_details = "If you deposit " + principal + ", at an interest rate of " + rate + "%. You will receive an amount of " + interest + ", in the year " + year + ".";
    document.getElementById("interest_val").innerText=text_details 
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    var rateval1 = rateval + "%"
    document.getElementById("rate_val").innerText=rateval1;
}

function checkData(){
    //create references to the input elements we wish to validate
    var principle1 = document.getElementById("principal");
    if(principle1.value == ""){
        alert("Enter a positive number");
        principle1.focus();
        return false;
    }
    if(principle1.value <= 0){
        alert("Enter a positive number");
        principle1.focus();
        return false;}
    return compute()
}

           