// Helper utility for credit cards to show an image of the card type
// Requires: politespace and creditable
;(function( w ){
	var $ = w.jQuery;
	var $doc = $( w.document );
	var key = "creditable-carddisplay";

	function CreditableCardDisplay( event ) {
		var $t = $( event.target );
		if( !$t.is( "[data-credit-card-display]" ) &&
			!$t.is( "[data-" + key + "]" ) ) {
			return;
		}

		var classes = {
			all: key + "-active",
			amex: key + "-amex",
			visa: key + "-visa",
			mastercard: key + "-mastercard",
			discover: key + "-discover"
		};

		var cardType = w.CreditableCardType( $t.val() );
		var $container = $t.closest( "." + key );

		// remove previous
		var remove = [];
		for( var j in classes ) {
			remove.push( classes[ j ] );
		}
		$container.removeClass( remove.join( " " ) );

		// add new
		if( cardType === "AMEX" ) {
			$container.addClass( classes.all + " " + classes.amex );
		} else if( cardType === "VISA" ) {
			$container.addClass( classes.all + " " + classes.visa );
		} else if( cardType === "MASTERCARD" ) {
			$container.addClass( classes.all + " " + classes.mastercard );
		} else if( cardType === "DISCOVER" ) {
			$container.addClass( classes.all + " " + classes.discover );
		}
	}

	if( "Politespace" in w ) {
		$doc.on( "politespace-input", CreditableCardDisplay );
	} else {
		$(document).on( "enhance", function( e ) {
			$( e.target ).find( "[data-" + key + "]" ).each(function() {
				var $t = $( this );
				if( !$t.data( key ) ) {
					$t.data( key, true );
					$t.on( "keypress input", CreditableCardDisplay );
				}
			});
		});
	}

}( typeof global !== "undefined" ? global : this ));
