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
	//   $(document).ready(function(){
	// 	  var scroll_start=0;
	// 	  var startchange=$('.header-footer');
	// 	  var offset=statrtchange.offset();
	// 	   if (startchange.length){
	// 		   $(document).scroll(function(){
	// 			   scroll_start=$(this).scrollTop();
	// 			   if(scroll_start > offset.top) {
	// 				   $(".navbar").css('background', 'linear-gradient(0deg, rgba(252,227,138,.9) 0%, rgba(243,129,129,.9) 104%)');
	// 			   }
	// 			   else{
	// 				   $(".navbar").css('background', 'transperant');
	// 			   }
	// 		   });
	// 	   }
	//   })
	
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