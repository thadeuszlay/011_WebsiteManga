var main = function() {
$('#arrowRlvl2').click(function () {

	var currentPic=$('.current-pic-lvl2');
	var nextPic=currentPic.next();
	var currentDot=$('.current-dot-lvl2');
	var nextDot=currentDot.next();
	
	if (nextPic.length===0){
		nextPic=$('.portrait-lvl2').first();
		nextDot=$('.dot-lvl2').first();
	}
	
	currentPic.fadeOut(600).removeClass('current-pic-lvl2');
	nextPic.fadeIn(600).addClass('current-pic-lvl2');
	
   currentDot.removeClass('current-dot-lvl2');
   nextDot.addClass('current-dot-lvl2');
});

$('#arrowLlvl2').click(function () {
	 var currentPic = $('.current-pic-lvl2');
    var prevPic = currentPic.prev();

    var currentDot = $('.current-dot-lvl2');
    var prevDot = currentDot.prev();

    if(prevPic.length === 0) {
      prevPic = $('.portrait-lvl2').last();
      prevDot = $('.dot-lvl2').last();
    }
    
    currentPic.fadeOut(600).removeClass('current-pic-lvl2');
    prevPic.fadeIn(600).addClass('current-pic-lvl2');

    currentDot.removeClass('current-dot-lvl2');
    prevDot.addClass('current-dot-lvl2');
});

$('#arrowRlvl3').click(function () {

	var currentPic=$('.current-pic-lvl3');
	var nextPic=currentPic.next();
	var currentDot=$('.current-dot-lvl3');
	var nextDot=currentDot.next();
	
	if (nextPic.length===0){
		nextPic=$('.portrait-lvl3').first();
		nextDot=$('.dot-lvl3').first();
	}
	
	currentPic.fadeOut(600).removeClass('current-pic-lvl3');
	nextPic.fadeIn(600).addClass('current-pic-lvl3');
	
   currentDot.removeClass('current-dot-lvl3');
   nextDot.addClass('current-dot-lvl3');
});

$('#arrowLlvl3').click(function () {
	 var currentPic = $('.current-pic-lvl3');
    var prevPic = currentPic.prev();

    var currentDot = $('.current-dot-lvl3');
    var prevDot = currentDot.prev();

    if(prevPic.length === 0) {
      prevPic = $('.portrait-lvl3').last();
      prevDot = $('.dot-lvl3').last();
    }
    
    currentPic.fadeOut(600).removeClass('current-pic-lvl3');
    prevPic.fadeIn(600).addClass('current-pic-lvl3');

    currentDot.removeClass('current-dot-lvl3');
    prevDot.addClass('current-dot-lvl3');
});

}
$(document).ready(main);