var pathimg = '../img/',
    pathbg  = pathimg + 'bg/';

$(function(){
	  
	$('.demo .pop').colorbox({
	
		inline: true,
		width: '80%'
	});

	function rwd()
	{
		rwdimg('.demo noscript.rwdimg');
	}
	$(window).resize($.throttle(250, rwd)).trigger('resize');
	
	$('.demo div>video, '+
	  '.demo div>audio, '+
	  '.demo div>img, '+
	  '.demo p>.rwdimg, '+
	  '.demo div>a, '+
	  '.demo div>svg, '+
	  '.demo div>object, '+
	  '.demo div>figure').baseline();
	
	$('.demo .flexslider').flexslider({
	
		animation: 'slide',
		prevText: 'Précédente',
		nextText: 'Suivante',
		pausePlay: true,
		pauseText: 'Pause',
		playText: 'Lecture',
		start: function(slider){
			slider.pause();
		}
	});
	
	$('.demo form').each(function(){
		
		$(this).validate({
			invalidHandler: function(form, validator) {

				var errors    = validator.numberOfInvalids(),
				    errorsmsg = $(this).data('errors').replace(/%/g, errors).replace(/'/g,'"');
				    
				if(errors)
				{
					if(errors == 1)
					{
						errorsmsg = $(this).data('error');
					}
					
					$(this).find('.errors').html(errorsmsg).show();
				}
				else
				{
					$(this).find('.errors').html('').hide();
				}
			},
			 errorElement: 'span',
		   errorPlacement: function(error, element){
				   	if($(element).closest('.radio, .checkbox').length)
				   	{
						error.appendTo(element.closest('.radio, .checkbox'));
				   	}
				   	else
				   	{
						error.appendTo(element.closest('label'));
				   	}
			    },
			    highlight: function(element, classe){
			    	if($(element).closest('.radio, .checkbox').length)
			    	{
			    		$(element).closest('.radio, .checkbox').addClass('error');
			    		$(element).closest('.radio, .checkbox').find('input, textarea, select').attr('aria-invalid','true');
			    	}
			    	else
			    	{
			    		$(element).closest('label').addClass('error');
			    		$(element).closest('label').find('input, textarea, select').attr('aria-invalid','true');
			    	}
			 	},
			  unhighlight:function(element, classe){
		  			if($(element).closest('.radio, .checkbox').length)
		  			{
		  				$(element).closest('.radio, .checkbox').removeClass('error');
			    		$(element).closest('.radio, .checkbox').find('input, textarea, select').attr('aria-invalid','false');
		  			}
		  			else
		  			{
		  				$(element).closest('label').removeClass('error');
			    		$(element).closest('label').find('input, textarea, select').attr('aria-invalid','false');
		  			}
			  }
		});
	});
});