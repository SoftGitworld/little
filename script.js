function Calculate(){

    var s = document.getElementById('S1');
    var item1 = s.options[s.selectedIndex].value;
    var V1=document.getElementById("B1").value;

    if(item1== 'Celcius')
    {
        var Result= 1.8 * V1 + 32;
        document.getElementById("B2").innerHTML = Result;
    }
    else if(item1=='Fahrenheit')
    {
        var Result=(V1-32)*5/9;
        document.getElementById("B2").innerHTML=Result;
    }
}