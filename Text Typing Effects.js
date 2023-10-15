var i=0,text;
text="Welcome To DarkCode";
var textt = document.getElementById('bg_img_P1').textContent;

function typing()
{
    if(i<textt.length)
    {
        document.getElementById("text").innerHTML += textt.charAt(i);
        i++;
        setTimeout(typing,50);
    }
}
typing();