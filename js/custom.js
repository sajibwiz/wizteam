 //     <!-- ==================-->
 // <!--=========pre-loader function  end ============-->

 $(".loader_inner").fadeOut();
 $(".loader").delay(900).fadeOut("slow");

// <!--=========pre-loader function  end ============-->
//     <!-- ==================-->


 //     <!-- ==================-->
// <!--=========navabr and back to top start ============-->
  var mybutton = document.getElementById("backtotop");
  var mynav = document.getElementById("navbar")
       
  window.onscroll = function() {scrollFunction()};
        
    function scrollFunction() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
         mybutton.style.display = "block";
         navbar.style.background = "black";
         
      } else {
         navbar.style.background = "rgba(255, 255, 255, 0.1)";
         mybutton.style.display = "none";
      }
    }
    
// user clicks on the button, scroll to the top of the document
 function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
 }
 // <!--=========navabr and back to top end ============-->
 //     <!-- ==================-->
  
 //     <!-- ==================-->
// <!--=========navabr toggle menu start ============-->
var menubtn = document.getElementById("nav-menu"),
humbarger = document.getElementById("toggle-btn");

  humbarger.onclick = function () {

"use strict";

menubtn.classList.toggle("toggle-function");
humbarger.classList.toggle("active");

};
// <!--=========navabr toggle menu end ============-->
//     <!-- ==================-->


 //     <!-- ==================-->
// <!--=========wow js animation start ============-->
 new WOW().init();
 // <!--=========wow js animation end ============-->
 //     <!-- ==================-->

 //     <!-- ==================-->
// <!--=========portfolio section start ============-->
$("#portfolio-filters li").click(function () {
    $("#portfolio-filters li").removeClass('filter-active');
    $(this).addClass('filter-active');
 
    var Filter = $(this).data("filter");
    $("#portfolio-wrapper").fadeTo(100, 0);
 
    $(".portfolio-item").fadeOut().css('transform', 'scale(0)');
 
    setTimeout(function () {
      $(Filter).fadeIn(100).css('transform', 'scale(1)');
      $("#portfolio-wrapper").fadeTo(300, 1);
    }, 300);
  });
  // <!--=========potfolio section end ============-->
  //     <!-- ==================-->

  
 //     <!-- ==================-->
// <!--=========owl-carousel start ============-->
 $("#slider-mini").owlCarousel({
   singleItem : true,
   autoPlay : 8000,
   stopOnHover : true,
   navigation : false,
   navigationText : false,
   pagination : true
 })
 
 $("#reviews-slider").owlCarousel({
  singleItem : true,
  autoPlay : 8000,
  stopOnHover : true,
  navigation : false,
  navigationText : false,
  pagination : true
})

// <!--=========owl-carousel end ============-->
 //     <!-- ==================-->

  //     <!-- ==================-->
// <!--=========price  function start ============-->

document.addEventListener('DOMContentLoaded', function(event) {

    document.getElementById('turn-to-back-1').style.visibility = 'visible';
    document.getElementById('turn-to-front-1').style.visibility = 'visible';
  
    document.getElementById('turn-to-back-1').onclick = function() {
    document.getElementById('price-box-1').classList.toggle('do-flip-1');
    };

    document.getElementById('turn-to-front-1').onclick = function() {
    document.getElementById('price-box-1').classList.toggle('do-flip-1');
    };
  //   nomber 2 star==============
    document.getElementById('turn-to-back-2').style.visibility = 'visible';
    document.getElementById('turn-to-front-2').style.visibility = 'visible';
    
    document.getElementById('turn-to-back-2').onclick = function() {
    document.getElementById('price-box-2').classList.toggle('do-flip-1');
    };
    
    document.getElementById('turn-to-front-2').onclick = function() {
    document.getElementById('price-box-2').classList.toggle('do-flip-1');
    };
  //   nomber 3start=============
    document.getElementById('turn-to-back-3').style.visibility = 'visible';
    document.getElementById('turn-to-front-3').style.visibility = 'visible';
    
    document.getElementById('turn-to-back-3').onclick = function() {
    document.getElementById('price-box-3').classList.toggle('do-flip-1');
    };
    
    document.getElementById('turn-to-front-3').onclick = function() {
    document.getElementById('price-box-3').classList.toggle('do-flip-1');
    };
  //   nomber 4 start ==============
    document.getElementById('turn-to-back-4').style.visibility = 'visible';
    document.getElementById('turn-to-front-4').style.visibility = 'visible';
    
    document.getElementById('turn-to-back-4').onclick = function() {
    document.getElementById('price-box-4').classList.toggle('do-flip-1');
    };
    
    document.getElementById('turn-to-front-4').onclick = function() {
    document.getElementById('price-box-4').classList.toggle('do-flip-1');
    };
    
  });
  // <!--=========price  function end ============-->
//     <!-- ==================-->

 //     <!-- ==================-->
// <!--=========FQA ? function  start ============-->
$('.qus').click(function(){
    $('.ans').toggle();
})
$('.qus2').click(function(){
    $('.ans2').toggle();
})
$('.qus3').click(function(){
    $('.ans3').toggle();
})
$('.qus4').click(function(){
    $('.ans4').toggle();
})
$('.qus5').click(function(){
    $('.ans5').toggle();
})
// <!--=========FQA ? function  end ============-->
 //     <!-- ==================-->






    