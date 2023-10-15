var menu = document.getElementById("menu");
menu.onclick = function(){
 menu.classList.toggle("openmenu");

var menuDropDown =  document.getElementById("sideBar");
menuDropDown.classList.toggle("active");
}