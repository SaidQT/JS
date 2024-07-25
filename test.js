class Vehicle {
    constructor(manufacturer, model, color) {
        this.miles = 0;
        this. manufacturer = manufacturer;
        this.model = model;
        this.color = color;
    }

    drive() {
        this.miles += 10;
    }
}
const car= new Vehicle("BMW"," z40", "red");
console.log(car.model);