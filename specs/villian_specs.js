var Villian = require('../villian_constructor' );
var assert = require( 'chai' ).assert;

describe('Villian', function(){

villian1 = new Villian('David Cameron', 120, "national pride", "Bullshitting",  50)

it('Villian is created', function(){
  assert.equal('David Cameron', villian1.name)
})

})