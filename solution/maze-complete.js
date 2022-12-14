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
	});
}

function startClick() {
    loser = false;
    $("div#maze div.boundary").each(function(){
		$(this).removeClass("youlose");
	});
}

function overEnd() {
    if(loser) {
        alert("Sorry, you lost. :[");
    } else {
        alert("You win! :]");
    }
}