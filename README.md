# creditcharred
Utilities for working with credit card form input.

## CreditCharredType

```
CreditCharredType( "4123 1234 1234 1234" );
// returns "VISA";

CreditCharredType( "5123 1234 1234 1234" );
// returns "MASTERCARD";

CreditCharredType( "6011 1234 1234 1234" );
// returns "MASTERCARD";

CreditCharredType( "3412 123456 12345" );
// returns "AMEX";
```