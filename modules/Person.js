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