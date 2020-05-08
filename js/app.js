//counter up funtion
$('.count').counterUp({
delay:10,
time:2000
})
//scroll up funtion
mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 575 || document.documentElement.scrollTop > 575) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}
//navbarscroll
$(document).ready(function(){
$(window).scroll(function(){
var scroll = $(window).scrollTop();
if (scroll > 800) {
$(".navbar").css("background" , "rgba(243,129,129,.8");
}
else{
$(".navbar").css("background" , "transparent");
}
})
})