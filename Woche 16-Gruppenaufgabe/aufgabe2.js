var slide = 1;
var text1 = document.getElementById("firstText");
var text2 = document.getElementById("secondText");
var text3 = document.getElementById("thirdText");

function prev()
{    
    slide--;

    if(slide == 0)
    {
        document.getElementById("slider1").style.display = "none";
        document.getElementById("slider3").style.display = "block";

        text1.style.display = "none";
        text3.style.display = "block";
        
        slide == 3;
    }
    else if(slide == 1)
    {
        document.getElementById("slider2").style.display = "none";
        document.getElementById("slider1").style.display = "block";  

        text2.style.display = "none";
        text1.style.display = "block";
    }
    else if(slide == 2)
    {
        document.getElementById("slider3").style.display = "none";
        document.getElementById("slider2").style.display = "block";

        text3.style.display = "none";
        text2.style.display = "block";
    }

}

function forward()
{
    slide++;

    if(slide == 2)
    {
        document.getElementById("slider1").style.display = "none";
        document.getElementById("slider2").style.display = "block";

        text1.style.display = "none";
        text2.style.display = "block";
    }
    else if(slide == 3)
    {
        document.getElementById("slider2").style.display = "none";
        document.getElementById("slider3").style.display = "block";
        
        text2.style.display = "none";
        text3.style.display = "block";
    }
    else
    {
        document.getElementById("slider3").style.display = "none";
        document.getElementById("slider1").style.display = "block";
        
        text3.style.display = "none";
        text1.style.display = "block";
        slide = 1;
    }
}