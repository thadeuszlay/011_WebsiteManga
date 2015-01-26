var main = function() {
$('#arrowRlvl2').click(function () {

	var currentPic=$('.current-pic');
	var nextPic=currentPic.next();
	console.log("nextPic ", nextPic);
	var currentDot=$('.current-dot');
	var nextDot=currentDot.next();
	
	if (nextPic.length===0){
		nextPic=$('.portrait').first();
		nextDot=$('.dot').first();
	}
	
	currentPic.fadeOut(600).removeClass('current-pic');
	nextPic.fadeIn(600).addClass('current-pic');
	
   currentDot.removeClass('current-dot');
   nextDot.addClass('current-dot');
});

$('#arrowLlvl2').click(function () {
	 var currentPic = $('.current-pic');
    var prevPic = currentPic.prev();

    var currentDot = $('.current-dot');
    var prevDot = currentDot.prev();

    if(prevPic.length === 0) {
      prevPic = $('.portrait').last();
      prevDot = $('.dot').last();
    }
    
    currentPic.fadeOut(600).removeClass('current-pic');
    prevPic.fadeIn(600).addClass('current-pic');

    currentDot.removeClass('current-dot');
    prevDot.addClass('current-dot');
});
}
$(document).ready(main);