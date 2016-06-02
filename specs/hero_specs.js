var Hero = require('../hero_constructor' );
var Food = require('../food_constructor' );
var Rat = require('../rat_constructor');
var Villian = require('../villian_constructor')
var assert = require( 'chai' ).assert;

describe('Hero', function(){
  // beforeEach(function(){
  //   basket.empty();
  // })
  hero1 = new Hero( 'Super Jeff', 100, 'Laver Bread' , 'national pride', 'lack of coffee', 50);
  hero2 = new Hero( 'Tuba Trevor', 120, 'Ham Sandwich', 'tub players', 'social interaction', 60)
  food1 = new Food( 'Laver Bread', 30 );
  food2 = new Food( 'Leek Soup', 20 );
  rat1 = new Rat( 'Roland', -50);
  villian1 = new Villian('David Cameron', 120, 'national pride', "bullshitting",  50)
  villian2 = new Villian('Jeremy Hunt', 90, 'tuba players', "keeping his job",  50)

  it('Hero is created', function(){
    assert.equal( 'Super Jeff', hero1.name );
  })

  it('Hero can state his name', function(){
    assert.equal( 'I am Super Jeff!!!', hero1.talk() )
  })

  it('Hero gains nourishment from food, 1.5 X from favourite food', function(){
    hero1.eat( food1 );
    assert.equal( 145, hero1.health );
  })

  it('Hero gains nourishment from food, 1.0 X from favourite food', function(){
    hero1.health = 100;
    hero1.eat( food2 );
    assert.equal( 120, hero1.health );
  })

  it('Rat poisons food and Hero loses health when eats', function(){
    hero1.health = 100;
    rat1.touch( food2 );
    hero1.eat( food2 );
    assert.equal( 50, hero1.health );
  })

  it('Attack the villian to reduce the health double because of weekness and strength match', function(){
    hero1.attack(villian1);
    assert.equal(20, villian1.health)
  })

  it('Attack to villian to reduce health by a normal amount', function(){
    hero1.attack(villian2);
    assert.equal(40, villian2.health)
  })

  it('After attack if villian has less than 0 health they are dead', function(){
  villian2.health = 90;
  hero2.attack(villian2);
  assert.equal('Jeremy Hunt you are dead, you were killed by Tuba Trevor!!!', hero2.attackOutcome(villian2))
 })

})
