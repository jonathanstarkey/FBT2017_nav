/* NAV ONSCROLL */
$('#nav').affix({
      offset: {
        top: $('.overlay').height()-$('#nav').height()
      }
});	

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#nav' })

/* smooth scrolling for scroll to top */
$('.scroll-top').click(function(){
  $('body,html').animate({scrollTop:0},1000);
})

/* smooth scrolling for nav sections */
$('#nav .navbar-nav li>a').click(function(){
  var link = $(this).attr('href');
  var posi = $(link).offset().top;
  $('body,html').animate({scrollTop:posi},700);
});

 /* ensure the affix element maintains it width */
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
   
function affixWidth() {
    var affix = $('#nav');
    var width = affix.width();
    affix.width(width);
}

$(document).ready(function () {

    affixWidth();

});
}

$(function() { var logo = $(".nav-logo-lg"); $(window).scroll(function() {
var scroll = $(window).scrollTop();

    if (scroll >= 200) {
      if(!logo.hasClass("nav-logo-sm")) {
        logo.hide();
        logo.removeClass('nav-logo-lg').addClass("nav-logo-sm").fadeIn( "slow");
      }
    } else {
      if(!logo.hasClass("nav-logo-lg")) {
        logo.hide();
        logo.removeClass("nav-logo-sm").addClass('nav-logo-lg').fadeIn( "slow");
      }
    }
});
});

/* carousel */
$(document).ready(function(){

$('.carousel').carousel({
  interval: 6000,
  pause: "false"
});

var $item = $('.carousel .item');
var $wHeight = $(window).height();

$item.height($wHeight); 
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

});
/* HOMEPAGE VIDEO STOP PLAYING WHEN CLOSED*/
$(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $("#meetFatBrainVideo").attr('src');
    
    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#meet-fat-brain-play-button").on('hide.bs.modal', function(){
        $("#meetFatBrainVideo").attr('src', '');
    });
    
    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#meet-fat-brain-play-button").on('show.bs.modal', function(){
        $("#meetFatBrainVideo").attr('src', url);
    });
});

/* More Video */

( function($) {
  
function iframeModalOpen(){

		// impostiamo gli attributi da aggiungere all'iframe es: data-src andrà ad impostare l'url dell'iframe
		$('.modalButton').on('click', function(e) {
			var src = $(this).attr('data-src');
			var width = $(this).attr('data-width') || 640; // larghezza dell'iframe se non impostato usa 640
			var height = $(this).attr('data-height') || 360; // altezza dell'iframe se non impostato usa 360

			var allowfullscreen = $(this).attr('data-video-fullscreen'); // impostiamo sul bottone l'attributo allowfullscreen se è un video per permettere di passare alla modalità tutto schermo
			
			// stampiamo i nostri dati nell'iframe
			$("#meetFatBrainVideo iframe").attr({
				'src': src,
				'height': height,
				'width': width,
				'allowfullscreen':''
			});
		});

		// se si chiude la modale resettiamo i dati dell'iframe per impedire ad un video di continuare a riprodursi anche quando la modale è chiusa
		$('#meetFatBrainVideo').on('hidden.bs.modal', function(){
			$(this).find('iframe').html("");
			$(this).find('iframe').attr("src", "");
		});
	}
  
  $(document).ready(function(){
		iframeModalOpen();
  });
  
  } ) ( jQuery );

/* JUMBO PARALLAX */

var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});


/* DESCRIPTION SHOW MORE SHOW LESS */


/*  SHOW 50 MORE - SHOW 50 LESS */

$(document).ready(function(){
    
   for (var i=0;i<21;i++) {
    $('.internalActivities').append();
}

var trs = $(".internalActivities tr");
var btnMore = $("#seeMoreRecords");
var btnLess = $("#seeLessRecords");
var trsLength = trs.length;
var currentIndex = 10;

trs.hide();
trs.slice(0, 10).show(); 
checkButton();

btnMore.click(function (e) { 
    e.preventDefault();
    $(".internalActivities tr").slice(currentIndex, currentIndex + 50).show();
    currentIndex += 50;
    checkButton();
});

btnLess.click(function (e) { 
    e.preventDefault();
    $(".internalActivities tr").slice(currentIndex - 50, currentIndex).hide();          
    currentIndex -= 50;
    checkButton();
});

function checkButton() {
    var currentLength = $(".internalActivities tr:visible").length;
    
    if (currentLength >= trsLength) {
        btnMore.hide();            
    } else {
        btnMore.show();   
    }
    
    if (trsLength > 10 && currentLength > 10) {
        btnLess.show();
    } else {
        btnLess.hide();
    }
    
}

}); 

/* SMOOTH SCROLLING */
        $(document).ready(function(){
          // Add smooth scrolling to all links
          $("a").on('click', function(event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
              // Prevent default anchor click behavior
              event.preventDefault();

              // Store hash
              var hash = this.hash;

              // Using jQuery's animate() method to add smooth page scroll
              // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
              });
            } // End if
          });
        });



 

/* STOP IFRAME MODAL PLAY */

$(document).ready(function(){
       $("#meet-fat-brain-play-button").on('hidden.bs.modal', function (e) {
    $("#meet-fat-brain-play-button iframe").attr("src", $("#meet-fat-brain-play-button iframe").attr("src"));
            });
      });

/* BACK TO TOP SCROLL */

$(document).ready(function() {
			// Show or hide the sticky footer button
			$(window).scroll(function() {
				if ($(this).scrollTop() > 200) {
					$('.scroll-top').fadeIn(200);
				} else {
					$('.scroll-top').fadeOut(200);
				}
			});
			
			// Animate the scroll to top
			$('.scroll-top').click(function(event) {
				event.preventDefault();
				
				$('html, body').animate({scrollTop: 0}, 300);
			})
		});