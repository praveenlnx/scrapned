jQuery(function() {
    // These first three lines of code compensate for Javascript being turned on and off. 
    // It simply changes the submit input field from a type of "submit" to a type of "button".

    var paraTag = jQuery('input#submit').parent('p');
	
    jQuery(paraTag).children('input').remove();
    jQuery(paraTag).append('<input type="button" name="submit" id="submit" value="Email Us" />');

    jQuery('#main input#submit').click(function() {
        var name = jQuery('input#name').val();
        var email = jQuery('input#email').val();
        var message = jQuery('textarea#message').val();
		var captcha = jQuery('input#captcha').val();
		var capans='3';
		  var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
		 var subject = jQuery('input#subject').val();
		 if(name=='')
		 {
			 jQuery('[name="name"]').addClass('vaidate_error');
		 }else{
			 jQuery('[name="name"]').removeClass('vaidate_error');
			 }
			 
			  if(email=='')
		 {
			 jQuery('[name="email"]').addClass('vaidate_error');
		 }else{
			if (!pattern.test(email)) {
				 jQuery('[name="email"]').addClass('vaidate_error');
			 }else{
				 jQuery('[name="email"]').removeClass('vaidate_error');
				 }
			 }
			 
				 
			if(message=="")
					 {
						 jQuery('[name="message"]').addClass('vaidate_error');
					 }else{
						 jQuery('[name="message"]').removeClass('vaidate_error');
						 }
			if(captcha=="")
					 {
						 jQuery('[name="captcha"]').addClass('vaidate_error');
					 }else{
					 
						if(captcha != capans){
							jQuery('[name="captcha"]').addClass('vaidate_error');
						} else {
						 jQuery('[name="captcha"]').removeClass('vaidate_error');
						 }		
						}	
			if(subject=="")
					 {
						 jQuery('[name="subject"]').addClass('vaidate_error');
					 }else{
						 jQuery('[name="subject"]').removeClass('vaidate_error');
						 }

        jQuery.ajax({
            type: 'post',
            url: 'sendEmail.php',
            data: 'name=' + name + '&email=' + email +'&captcha=' + captcha + '&subject='+ subject +'&message=' + message,

            success: function(results) {	
                jQuery('div#response').html(results).css('display', 'block');		
   
            }
        }); // end ajax
    });
});
		