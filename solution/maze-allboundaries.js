window.onload = function() {
    $("div#maze div.boundary").each(function(){
		$(this).mouseover(overBoundary);
	});
};

function overBoundary() {
    $("div#maze div.boundary").each(function(){
		$(this).css("background-color", "#ff8888");
	});
}