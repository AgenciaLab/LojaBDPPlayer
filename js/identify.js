/**
* Plugins - Init
**/
jQuery(document).ready(function(){



	;(function($){
	    if($('form#form1').length){
	        $('input#email_login').attr('placeholder','E-MAIL*');
	        $('input#senha_login').attr('placeholder','SENHA*');
	        $('input#email_cadastro').attr('placeholder','E-MAIL');
	    }

	})(jQuery);

});