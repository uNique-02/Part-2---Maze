window.onload = function() {
    $("#boundary1").mouseover(overBoundary);
};

function overBoundary() {
    // $("boundary1").style.backgroundColor = "#ff8888";
    $("#boundary1").addClass("youlose");
}
