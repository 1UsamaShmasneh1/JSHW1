//import {Person,Car} from "./mdl1.js";
import MyPerson, {Car as SpecialCaar} from "./mdl1.js";

export class PersonWithCar {
    a = 1;
    b = 2;
    name = MyPerson.name;
    HissCarSupplier = SpecialCaar;
}

var instance = new PersonWithCar();
console.log(instance);