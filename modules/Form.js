/**Class cho phiếu xác nhận, có thông tin người dân, các mũi tiêm và các ngày tiêm (nếu có)
 * @param {Person} person người dân
 * @param {Array.<string>} shots các mũi tiêm
 * @param {Array.<string>} times các ngày tiêm
 * @constructor
*/
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
    static get totalShots() {
        return Form.totalShots;
    }
    toString() {
        return `${this.person}.\n${this.shots.join("\n")}.\n${this.times.join("\n")}.\n`
    }
}