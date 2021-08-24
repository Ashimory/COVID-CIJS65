/**Class cho thông tin cá nhân, có tên, tuổi, giới tính và địa chỉ 
 * @param {string} name tên
 * @param {string} age tuổi
 * @param {string} gender giới tính
 * @param {string} address địa chỉ
 * @constructor
*/
export default class Person {
    name; age; gender;
    constructor (name, age, gender, address) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }
    ageGroup() {
        if (this.age < 18) {
            return "child";
        }
        else if (this.age < 65) {
            return "adult";
        }
        else {
            return "senior";
        }
    }
    toString() {
        return `${this.name}, a ${this.gender}, ${this.age} years old ${this.ageGroup()} at ${this.address}`;
    }
}