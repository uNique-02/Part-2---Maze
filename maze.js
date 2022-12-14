let hasTouched = false;
let start = false;

    window.onload = prepare;

    function prepare() {
        $("#start").css("cursor", "pointer");
        $("#start").click(function () { 
            start = true;
            startGame();
        });

    }

    function loseGame() {
        $( "div#maze div.boundary" ).each(function() {
            $(this).addClass("youlose");
        });
        
        hasTouched = true;
        if(start==true){
            document.getElementById("status").innerText = "You Lose";
            start=false;
        }
        $(".boundary").unbind();
        $("#maze").unbind();
        $("#end").unbind();
    }
    
    function winGame(){
        document.getElementById("status").innerText = "You Win";
        start = false;
        $(".boundary").unbind();
        $("#maze").unbind();
        $("#end").unbind();
    }
    
    function startGame(){
        $( "div#maze div.boundary" ).each(function() {
            $(this).removeClass("youlose");
        });
        if(start==true){
            document.getElementById("status").innerText = "\n";
            $("#maze").mouseleave(outside);
            $(".boundary").mouseover(loseGame);
            $("#end").mouseover(winGame);
        }
    }

    function outside(){
        $( "div#maze div.boundary" ).each(function() {
            $(this).addClass("youlose");
        });
       $("#maze").unbind();
       $("#end").unbind();
       $(".boundary").unbind();
       document.getElementById("status").innerText = "You Lose";
    }



