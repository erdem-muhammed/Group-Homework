var inputText = document.getElementById("input");
var list = document.getElementById("list");
var number = 0;
function add()
{
    number++;
    var div = document.createElement("div");
    list.innerHTML += number + "." + inputText.value + "<br>";
    list.appendChild(div);
    inputText.value = "";
}

