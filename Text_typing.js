var a=0;
           
var textt = document.getElementById('bg_img_P1').textContent;
document.getElementById('bg_img_P1').textContent = "";


function typing()
{
    console.log(textt.length);
    if(a<textt.length)
    {
        document.getElementById("bg_img_P1").innerHTML += textt.charAt(a);
        a++;
       
        setTimeout(typing,50);
    }
}
typing();