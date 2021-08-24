export default class Form{
    person; shots; dates;
    static totalShots = 0;
    constructor(person, shots=[], times=[]) {
        this.person = person;
        this.shots = shots;
        this.times = times;
        Form.totalShots += this.getShots();
    }
    getShots() {
        return this.shots.length;
    }
    static getTotalShots() {
        return Form.totalShots;
    }
    toString() {
        return `${this.person}.\n${this.shots.join("\n")}.\n${this.times.join("\n")}.\n`
    }
}