/*=============================================
BANNER	
=============================================*/ 
 
$(".fade-slider").jdSlider({        

	isSliding: false, /*sin desplazamiento*/
	isAuto: true, /*Empezar automaticamente*/
	isLoop: true, /*Que se repita*/
	isDrag: false, /*Que no se pueda arrastrar*/
	isCursor: false, /*Detener cuando se ponga el cursor encima*/
	interval: 5000, /*Intervalos*/
	speed: 3000 /*velocidad*/

}); 

var alturaBanner = $(".fade-slider").height();
$(".bannerEstatico").css({"height":alturaBanner+"px"});  

/*=============================================
ANIMACIONES SCROLL	
=============================================*/

$(window).scroll(function()
{
	
	var posY = window.pageYOffset;

	if(posY > alturaBanner)
	{
		$("header").css({"background":"#bbb"})

		$("header .logo").css({"filter":"invert(100%)"});

		$("header .nombreLogo").css({"filter":"invert(100%)"});

		
	}
	else
	{
		$("header").css({"background":"rgba(0,0,0,.5)"});

		$("header .logo").css({"filter":"invert(0%)"});

		$("header .nombreLogo").css({"filter":"invert(0%)"});

		
	}

});

/*=============================================
SLIDER CAJA 3
=============================================*/
let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

/*=============================================
SLIDER CAJA 3
=============================================*/

