
QUnit.test( "Visa", function( assert ) {
  assert.notEqual( CreditableCardType( "3999" ), CreditableCardType.KEYS.VISA );
  assert.equal( CreditableCardType( "4000" ), CreditableCardType.KEYS.VISA );
  assert.equal( CreditableCardType( "4444" ), CreditableCardType.KEYS.VISA );
  assert.equal( CreditableCardType( "4999" ), CreditableCardType.KEYS.VISA );
  assert.notEqual( CreditableCardType( "5000" ), CreditableCardType.KEYS.VISA );
});

QUnit.test( "Mastercard", function( assert ) {
  assert.notEqual( CreditableCardType( "2220" ), CreditableCardType.KEYS.MASTERCARD );
  assert.equal( CreditableCardType( "2221" ), CreditableCardType.KEYS.MASTERCARD );
  assert.equal( CreditableCardType( "2230" ), CreditableCardType.KEYS.MASTERCARD );
  assert.equal( CreditableCardType( "2299" ), CreditableCardType.KEYS.MASTERCARD );
  assert.equal( CreditableCardType( "2300" ), CreditableCardType.KEYS.MASTERCARD );
  assert.equal( CreditableCardType( "2600" ), CreditableCardType.KEYS.MASTERCARD );
  assert.equal( CreditableCardType( "270" ), CreditableCardType.KEYS.MASTERCARD );
  assert.equal( CreditableCardType( "271" ), CreditableCardType.KEYS.MASTERCARD );
  assert.equal( CreditableCardType( "2720" ), CreditableCardType.KEYS.MASTERCARD );
  assert.notEqual( CreditableCardType( "2721" ), CreditableCardType.KEYS.MASTERCARD );

  assert.notEqual( CreditableCardType( "50" ), CreditableCardType.KEYS.MASTERCARD );
  assert.equal( CreditableCardType( "51" ), CreditableCardType.KEYS.MASTERCARD );
  assert.equal( CreditableCardType( "55" ), CreditableCardType.KEYS.MASTERCARD );
  assert.notEqual( CreditableCardType( "56" ), CreditableCardType.KEYS.MASTERCARD );
});

QUnit.test( "Discover", function( assert ) {
  assert.notEqual( CreditableCardType( "6010" ), CreditableCardType.KEYS.DISCOVER );
  assert.equal( CreditableCardType( "6011" ), CreditableCardType.KEYS.DISCOVER );
  assert.notEqual( CreditableCardType( "6012" ), CreditableCardType.KEYS.DISCOVER );

  assert.notEqual( CreditableCardType( "622125" ), CreditableCardType.KEYS.DISCOVER );
  assert.equal( CreditableCardType( "622126" ), CreditableCardType.KEYS.DISCOVER );
  assert.equal( CreditableCardType( "622925" ), CreditableCardType.KEYS.DISCOVER );
  assert.notEqual( CreditableCardType( "622926" ), CreditableCardType.KEYS.DISCOVER );

  assert.notEqual( CreditableCardType( "64" ), CreditableCardType.KEYS.DISCOVER );
  assert.equal( CreditableCardType( "65" ), CreditableCardType.KEYS.DISCOVER );
  assert.notEqual( CreditableCardType( "66" ), CreditableCardType.KEYS.DISCOVER );
});

QUnit.test( "American Express", function( assert ) {
  assert.notEqual( CreditableCardType( "33" ), CreditableCardType.KEYS.AMEX );
  assert.equal( CreditableCardType( "34" ), CreditableCardType.KEYS.AMEX );
  assert.notEqual( CreditableCardType( "35" ), CreditableCardType.KEYS.AMEX );
  assert.notEqual( CreditableCardType( "36" ), CreditableCardType.KEYS.AMEX );
  assert.equal( CreditableCardType( "37" ), CreditableCardType.KEYS.AMEX );
  assert.notEqual( CreditableCardType( "38" ), CreditableCardType.KEYS.AMEX );
});
