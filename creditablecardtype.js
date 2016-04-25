// Input a credit card number string, returns a key signifying the type of credit card it is
(function( w ) {
	"use strict";

	var types = {
		MASTERCARD: /^(2[2-7]|5[1-5])/, // 22-27 and 51-55
		VISA: /^4/,
		DISCOVER: /^6(011|5)/, // 6011 or 65
		AMEX: /^3[47]/ // 34 or 37
	};

	function CreditableCardType( val ) {
		for( var j in types ) {
			if( !!val.match( types[ j ] ) ) {
				return j;
			}
		}

		return -1;
	}

	CreditableCardType.TYPES = types;
	w.CreditableCardType = CreditableCardType;

}( typeof global !== "undefined" ? global : this ));
