i=1;
function BackgChange()
{
var pic=document.getElementById('backimagD');

if(i == 1)
{
    pic.src="./BG11.jpg";
        i=2;
}else if(i ==2)
    {
        pic.src="./BG2.jpg";
        i=3;
    }else if(i == 3)
        {
            pic.src="./BG3.jpg";
            i=4;
        }else if(i == 4)
                {
                    pic.src="./BG4.jpg";
                    i=5;
                }else if(i == 5)
                        {
                            pic.src="./BG5.jpg";
                            i=6;
                        }else if(i == 6)
                                {
                                    pic.src="./BG1.jpg";
                                    i=1;
                                }
}
setInterval("BackgChange();",5000);
