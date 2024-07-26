class Card{
    constructor(name,cost){
        this.name=name
        this.cost=cost
    }

}
class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost)
        this.power=power;
        this.res=res;
    }   
    toString(){
        console.log("Power: "+ this.power)
        console.log("Resilience: "+ this.res)    
    }
    attack(target){
        if( target instanceof Unit ) {
            target.res -= this.power
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}
class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name,cost)
        this.text=text;
        this.stat=stat;
        this.magnitude=magnitude;
    }
    getMagnitude(){
        let sign= this.magnitude.charAt(0)
        let number=parseInt(this.magnitude.slice(1).trim())
        return sign=="+"? number:-number
    }
    play(target){
        if( target instanceof Unit ) {
            this.stat == "power" ? target.power += this.getMagnitude() : target.res += this.getMagnitude()
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}
const red= new Unit("Red Belt Ninja",3,3,4)
const hard= new Effect("Hard Algorithm",2,"increase target's resilience by 3","resilience", "+3")
hard.play(red)
const black= new Unit("Black Belt Ninja", 4,5,4)
const promise= new Effect("Unhandled Promise Rejection",1,"reduce target's resilience by 2","resilience", "-2")
promise.play(red)
const pair= new Effect("Pair Programming",3,"increase target's power by 2","power", "+2")
pair.play(red)
red.attack(black)
