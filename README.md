# creditable
Utilities for working with credit card form input.

## CreditCharredType

```
CreditableCardType( "4123 1234 1234 1234" );
// returns "VISA";

CreditableCardType( "5123 1234 1234 1234" );
// returns "MASTERCARD";

CreditableCardType( "6011 1234 1234 1234" );
// returns "MASTERCARD";

CreditableCardType( "3412 123456 12345" );
// returns "AMEX";
```