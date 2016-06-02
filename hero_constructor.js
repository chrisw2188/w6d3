
var Hero = function( name, health, food, strength, weekness, damage ){
  this.name = name;
  this.health = health;
  this.food = food;
  this.strength = strength;
  this.weekness = weekness;
  this.damage = damage;
}

Hero.prototype = {
  talk: function(){
    var result = 'I am ' + this.name + '!!!';
    console.log( result );
    return result
  },
  eat: function( munch ){
    if( munch.name === this.food && munch.nourish > 0 ){
      this.health += (munch.nourish * 1.5);
    } else {
      this.health += munch.nourish;
    }
  },

  attack: function(villian){
    if (villian.weekness === this.strength){
      villian.health -= (this.damage * 2)
    }
    else {
      villian.health -= this.damage
    }
  },

  attackOutcome: function(villian){
    if(villian.health < 1)
      console.log(villian)
    console.log(this){
      var result = (villian.name + ' you are dead + you were killed by ' + this.name + '!!!');
      return result;
    }
  }


}




module.exports = Hero;