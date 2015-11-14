$(document).ready(function(){
		
	var songName = '';
	
	function fileChange() {
		$('audio, #mp3File').attr('src','audio/'+songName+'.mp3');
		$('audio, #oggFile').attr('src','audio/'+songName+'.ogg');
	};
	
	function hideAll() {
        $('#godInfo').hide();
        $('#morningInfo').hide();
        $('#fireInfo').hide();
        $('#titanInfo').hide();
	};
		
	hideAll();
	
	$('#player').hide();
	
			
	$('.album').click (function() {
		
		hideAll();
		
		$('#player').show();
		
		switch ( $(this).attr("id") ) {
            case "god" :
                $('#godInfo').slideToggle();
								songName = 'vices-like-vipers';
								fileChange();
                break;
            case "morning" :
                $('#morningInfo').slideToggle();
								songName = 'the-new-breed';
								fileChange();
                break;
            case "fire" :
                $('#fireInfo').slideToggle();
								songName = 'wake-of-pigs';
								fileChange();
                break;
            case "titan" :
                $('#titanInfo').slideToggle();
								songName = 'the-rise';
								fileChange();
                break;         
    };
				
	});    
});

