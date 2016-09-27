# creditable

[![npm version](https://badge.fury.io/js/creditable.svg)](https://badge.fury.io/js/creditable)
[![Build Status](https://img.shields.io/travis/filamentgroup/creditable/master.svg)](https://travis-ci.org/filamentgroup/creditable)
[![Dependency Status](https://david-dm.org/filamentgroup/creditable.svg?theme=shields.io)](https://david-dm.org/filamentgroup/creditable)

Utilities for working with credit card form input.

## CreditableCardType

```
CreditableCardType( "4123 1234 1234 1234" );
// returns "VISA";

CreditableCardType( "5123 1234 1234 1234" );
// returns "MASTERCARD";

CreditableCardType( "6011 1234 1234 1234" );
// returns "DISCOVER";

CreditableCardType( "3412 123456 12345" );
// returns "AMEX";
```

## CreditableSecurityCode

Update the Security Code placeholder and maxlength based on the card type of the number entered into the Credit Card field. Supports one pair of fields per form. Full demo in `index.html`.

```
<form>
	<label>
		Credit Card Number
		<input type="text" data-creditable-creditcard>
	</label>
	<label>
		Security Code
		<input type="text" data-creditable-securitycode>
	</label>
</form>
```
