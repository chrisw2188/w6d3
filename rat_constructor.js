
var Rat = function( name, dirtiness ){
  this.name = name;
  this.dirtiness = dirtiness;
}

Rat.prototype = {
  touch: function( munch ){
    munch.nourish = this.dirtiness;
  }
}

module.exports = Rat;
