function vidbox(aim){
	$('#screen').css({"display": "block", opacity: 0.7, "width":$(document).width(),"height":$(document).height()}); //darken
	$(aim).css({"display": "block"}).click(function(){$(this).css("display", "none");$('#screen').css("display", "none")}); //show box
};