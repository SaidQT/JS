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
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();