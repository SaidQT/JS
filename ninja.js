class Ninja{
    constructor(name){
        this.name=name;
        this.health=90;
        this.speed=3;
        this.strength=3;
    }
    sayName(){
        console.log(`Ninja's name: ${this.name}`);
    }

    showStats(){
        console.log(`Ninja's name: ${this.name}`);
        console.log(`Ninja's health: ${this.health}`);
        console.log(`Ninja's speed: ${this.speed}`);
        console.log(`Ninja's strength: ${this.strength}`);
    }

    drinkSake(){
        this.health+=10
    }
}
class Sensei extends Ninja{
  
    constructor(name){
        super(name);
        this.health=200;
        this.speed=10;
        this.strength=10;
        this.wisdom=10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
