import { Car } from "./10-car.js";

export class EVCar extends Car {
 constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
 }

 get range() {
    return this._range;
 }

 cloneCar() {
    // When cloning an EVCar object, return a Car object instead of an EVCar object
    const clone = new Car(this._brand, this._motor, this._color);
    return clone;
 }
}