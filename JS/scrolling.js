var homeH = $( window ).height(),
    pH = [];
pH.push("0"); 

// create array with panel heights
for (var s=1; s<6; s++) { 
  var po = $("#panels a:nth-child("+s+")").position();
  pH.push( Math.round(po.top));
};

// link the footer MORE
$("#footer h3").click(function() {
  $("#footer").addClass("up").removeClass("middle");
})

$( window ).scroll(function() {
  
  // toggle top menu
  if ( $( window ).scrollTop() < homeH/2) {
    $("#menu ul li").removeClass("sel");
    $("#menu").css("top", "-85px");
    $("#footer").addClass("down").removeClass("middle");
  } else {
    $("#menu").css("top", "0");
    $("#footer").addClass("middle").removeClass("down");
  };
  
  // toggle top menu selection
  for (var i=1;i<6;i++) {
    if ( $( window ).scrollTop() > pH[i]-50 ) { 
      $("#menu ul li").removeClass("sel");
      $("#menu ul li:nth-child("+(i+1)+")").addClass("sel");
     }
  };
  
  // toggle footer
  if ( $( window ).scrollTop() > homeH*6 )
    $("#footer").addClass("up").removeClass("middle");
  else
    $("#footer").removeClass("up").addClass("middle");
});

// animating anchor link scrolling
// snippet from css-tricks 
// css-tricks.com/snippets/jquery/smooth-scrolling

$("a[href*=#]:not([href=#])").click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });