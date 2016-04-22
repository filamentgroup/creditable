// Input a credit card number string, returns a key signifying the type of credit card it is
(function( w, $ ) {
	"use strict";

	var lengths = {
		MASTERCARD: 3,
		VISA: 3,
		DISCOVER: 3,
		AMEX: 4
	};

	function CreditableSecurityCode( securityCodeElement ) {
		this.$el = $( securityCodeElement );
		this.$creditCard = this.$el.closest( "form" ).find( "[data-creditable-creditcard]" );

		var self = this;
		this.$creditCard.on( "change", function() {
			var maxlen = self.getMaxlength();
			self.$el.attr({
				maxlength: maxlen,
				placeholder: self.getPlaceholder( maxlen )
			});
		});
	}

	CreditableSecurityCode.prototype.getMaxlength = function() {
		return lengths[ CreditableCardType( this.$creditCard.val() ) ];
	};

	CreditableSecurityCode.prototype.getPlaceholder = function( maxlen ) {
		return ( new Array( maxlen || this.getMaxlength() ) ).join( "0" ) + "0";
	};

	$(document).on( "enhance", function( e ) {
		$( e.target ).find( "[data-creditable-securitycode]" ).each(function() {
			var $t = $( this );
			var key = "creditable-securitycode";

			if( !$t.data( key ) ) {
				$t.data( key, new CreditableSecurityCode( this ) );
			}
		});
	});

	CreditableSecurityCode.LENGTHS = lengths;
	w.CreditableSecurityCode = CreditableSecurityCode;

}( typeof global !== "undefined" ? global : this, jQuery ));
