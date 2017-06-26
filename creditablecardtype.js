// Input a credit card number string, returns a key signifying the type of credit card it is
(function( w ) {
	"use strict";

	var keys = {
		MASTERCARD: "MASTERCARD",
		VISA: "VISA",
		DISCOVER: "DISCOVER",
		AMEX: "AMEX",
		JCB: "JCB"
	};

	var types = {};

	// 2221-2720 and 51-55
	types[ keys.MASTERCARD ] = /^(222[1-9]|22[3-9]|2[3-6]|27[01]|2720|5[1-5])/;

	types[ keys.VISA ] = /^4/;

	// 6011 or 65
	types[ keys.DISCOVER ] = /^6(011|22(12[6-9]|1[3-9]|[2-8]|9[0-1]|92[0-5])|4[4-9]|5)/;

	// 34 or 37
	types[ keys.AMEX ] = /^3[47]/;

	// 35
	types[ keys.JCB ] = /^35/;

	function CreditableCardType( val ) {
		for( var j in types ) {
			if( !!val.match( types[ j ] ) ) {
				return j;
			}
		}

		return -1;
	}

	CreditableCardType.KEYS = keys;
	CreditableCardType.TYPES = types;
	w.CreditableCardType = CreditableCardType;

}( typeof global !== "undefined" ? global : this ));
