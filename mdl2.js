import {Car} from "./mdl1.js";

class NewCar {
    name = Car.provider;
    date = Car.modelDate;
    model = Car.model;
}

var newCar = new NewCar();
console.log(newCar);