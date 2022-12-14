var loser = false;  // whether the user has hit a wall

window.onload = function() {
    $("#start").click(startClick);
    $("#end").mouseover(overEnd);
    $("div#maze div.boundary").each(function(){
		$(this).mouseover(overBoundary);
	});
};

function overBoundary() {
    loser = true;
    $("div#maze div.boundary").each(function(){
		$(this).addClass("youlose");
		$("#status").text("You lose!");
	});
}

function startClick() {
    loser = false;
    $("div#maze div.boundary").each(function(){
		$(this).removeClass("youlose");
		$("#status").text("Find the end!");
	});
}

function overEnd() {
 if (!loser) {
		$("#status").text("You win! :]");
    }
}
