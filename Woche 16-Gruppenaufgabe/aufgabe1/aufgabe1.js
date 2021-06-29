var button = document.getElementById("button");
var input = document.getElementById("input");
var info = document.getElementById("info");


function add()
{
    var number = 1;
    var div = document.createElement("div");
    info.innerHTML = "<div>" + number + "." + input.value + "</div>" + "<br>";
    info.appendChild(div);
    number++;
}
