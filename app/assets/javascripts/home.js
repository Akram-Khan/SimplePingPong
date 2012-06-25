$(document).ready(function(){

	$(".click-to-start").click(function(){
		pingpong();
	});
});

function pingpong() {
	$(".ball").animate({ 
        marginLeft: "+=730px",
    }, 1000 );
    $(".ball").animate({ 
        marginLeft: "0px",
    }, 1000, pingpong);
}

