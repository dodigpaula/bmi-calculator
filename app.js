function bmicalc(){
    var w = document.getElementById("w").value;
    var h = document.getElementById("h").value;
    var result = (w/ ((h/100)**2)).toFixed(2)

    document.getElementById("bmi").innerHTML = result;

    if (result < 18.5){
        document.getElementById("health-status").innerHTML = "underweight";
        document.getElementById("health-status").style.color = "#F9A825";
    } else if (result < 25){
        document.getElementById("health-status").innerHTML = "normal";
        document.getElementById("health-status").style.color = "green";
    } else if (result < 30){
        document.getElementById("health-status").innerHTML = "overweight";
        document.getElementById("health-status").style.color = "orange";
    } else {
        document.getElementById("health-status").innerHTML = "obese";
        document.getElementById("health-status").style.color = "red";
    }
}
