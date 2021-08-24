/**Class cho các loại vaccine, có tên, nhà sản xuất và nơi sản xuất
 * @param {string} name tên
 * @param {string} manufacturer nhà sản xuất
 * @param {string} origin nơi sản xuất
 * @constructor
*/
export default class Vaccine{
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