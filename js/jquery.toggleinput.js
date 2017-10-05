jQuery.fn.toggleInput = function () {
	var $ = jQuery;
	var _container = this;

	_container.addClass('has-toggle-input');
	_container.find( 'input' ).hide();

	$('label[for="'+ _container.find('input:checked').attr('id') +'"]').addClass('active');

	this.on( 'click', 'label', function ( e ) {
		// Add active class to labels
		_container.find('label.active').removeClass('active');
		var _label = $(e.currentTarget);
		_label.addClass('active');

		// Add checked state to inputs
		var _input     = $( '#' + e.currentTarget.htmlFor );
		$( 'input[name="' + _input.attr( 'name' ) + '"]:checked' ).prop( 'checked', false ).removeAttr( 'checked' );
		_input.prop( 'checked', true ).attr( 'checked', 'checked' );
	} );
};
