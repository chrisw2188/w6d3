var Food = require('../food_constructor' );
var assert = require( 'chai' ).assert;

describe('Food', function(){
  food1 = new Food( 'Laver Bread', 30 );

  it('Food is created', function(){
    assert.equal( 'Laver Bread', food1.name );
  })

})
