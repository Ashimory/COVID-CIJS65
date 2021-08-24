export default class Vaccine{
    /** Class for vaccine types. Contains info on name, manufacturer and origin country. */ 
    name; manufacturer; origin;
    constructor (name, manufacturer, origin) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.origin = origin;
    }
    toString() {
        return `${this.name}, made by ${this.manufacturer} in ${this.origin}`;
    }
}