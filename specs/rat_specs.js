var Rat = require('../rat_constructor' );
var Food = require('../food_constructor' );
var assert = require( 'chai' ).assert;

describe('Rat', function(){
  var rat1 = new Rat('Roland', -50);
  var food1 = new Food('Liver Bread', 30);

  it('Check Rat is created', function(){
    assert.equal( -50, rat1.dirtiness );
  })

  it('Check Rat poisons Food', function(){
    rat1.touch( food1 );
    assert.equal( -50, food1.nourish );
  })

})
