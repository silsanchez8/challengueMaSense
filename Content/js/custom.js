$(document).ready(function(){

	$("#subscribe").click(function(){				
		$("#modal-form").fadeIn(1000);
		$(".main").addClass("blur");
	});
			
	$("#modal-form .close").click(function(){
		
		$(".main").removeClass("blur");
		$("#modal-form").fadeOut();
		$('#mail-user').val('');
		$(".error-msj").remove();
		$('#mail-user').removeClass('error');
		$('#check-terms input').attr('checked', false);
		$('#check-terms span').removeClass('error');
			
	});

/*Validate Form*/
	$("#contact-form").submit(function (e){
		e.preventDefault();
		var vEmail =$('#mail-user').val();
		var vTerms =$('#check-terms input').val();

		$(".error-msj").remove();

		if (vEmail.length < 1) {
			$('#mail-user').addClass('error');
			$('#mail-user').after('<span class="error-msj">Este campo es requerido</span>');
			return false;
		} else {
			var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
			if (!emailRegex.test(vEmail)) {
				$('#mail-user').addClass('error');
				$('#mail-user').after('<span class="error-msj">El formato de e-mail no es correcto.</span>');
				return false;
			} else {
				$('#mail-user').removeClass('error');
			}
		}

		if(!$('#check-terms input').is(':checked')) {
			$('#check-terms span').addClass('error');
			$('#check-terms').after('<span class="error-msj">Debe aceptar términos y condiciones</span>');
			return false;
		} else {
			$('#check-terms span').removeClass('error');
		}
		$("#modal-form").fadeOut();
		return true;

	});
});