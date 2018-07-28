/*Grasshopper - Terminal Game #1
Detalles
Terminal Game - Create Hero Prototype
In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:
attribute 	value
name 	user argument or 'Hero'
position 	'00'
health 	100
damage 	5
experience 	0*/

function Hero(n,p,h, d, e){

    this.name = n;
    this.position = p;
    this.health = h;
    this.damage = d;
    this.experience = e;
    
    
    this.atributosHero = function(){
    return this.name + ' ' + this.position +' '+this.health +' '+this.damage +' '+
    this.experience;
    }    
}
    
    let heroe = new Hero('Hero','00', '100','5', '0')
    console.log(heroe.atributosHero())