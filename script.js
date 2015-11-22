$(document).ready(function(){
	$('body').append('<button type="button">Reset Grid</button>');
	$('body').append('<div class="container"></div>');	
	

	$('button').click( function() {
		$('.boxes').removeClass('highlighted');
	});

	for(var r=0;r<30;r++) {
		for(var c=0;c<30;c++) {
			$('.container').append('<div class="boxes"></div>');
		}//end column
	}//end row

	$('.boxes').mouseenter(function() {
		$(this).addClass('highlighted');//add a highlighted "green" color
		//fadeTo(speed_in_ms,opacity[0-100]);
		var currentOpacity = $(this).css('opacity');
			if(currentOpacity > 0){
				$(this).css('opacity', currentOpacity - 0.1);
			}
		// Uncomment below for the trail effect	
		// $(this).fadeTo(100,0);
		// $(this).mouseleave(function(){
		// 	$(this).fadeTo(400,1);
		// });
	});
	




});//end document ready

