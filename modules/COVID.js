import Form from "./Form.js";
import Person from "./Person.js";
import Vaccine from "./Vaccine.js";
const Astra = new Vaccine("Vaxzevria", "AstraZeneca", "UK");
const Pfizer = new Vaccine("Comirnaty", "Pfizer/BioNTech", "US");
const Moderna = new Vaccine("Spikevax", "Moderna", "US");
const Sinopharm = new Vaccine("Hayat-Vax", "Sinopharm", "China");
const formList = [
    new Form(new Person("Nguyen Duy Minh", 19, "male", "Giai Phong"), [Astra, Pfizer], ["31-07-2021", "30-09-2021"]),
    new Form(new Person("Me Me", 69, "female", "Thien Duong"), [Sinopharm], ["20-04-2021"]),
    new Form(new Person("Nguyen Huy Em", 11, "female", "Thinh Liet")),
    new Form(new Person("Nguyen Nguyen", 65, "male", "Dinh Cong")),
    new Form(new Person("Nguyen Van A", 75, "male", "Truong Dinh"), [Astra, Astra], ["31-07-2021", "15-10-2021"]),
    new Form(new Person("Lê Thị Number One", 100, "female", "Tan Mai")),
    new Form(new Person("Tran Linh Duong", 24, "female", "Giap Nhi"), [Moderna], ["24-08-2021"]),
];

// "Thống kê những người dân đã được tiêm ít nhất 1 loại vắc-xin"
console.log("Those vaccinated at least once:")
for (let form of formList) {
    if (form.getShots()) {
        console.log(form + "\n");
    }
}
//  "Thống kê những người già chưa được tiêm vắc-xin"
console.log("Unvaccinated seniors:")
for (let form of formList) {
    if (form.person.ageGroup() == "senior" && !form.getShots()) {
        console.log(form + "\n");
    }
}
// "Tính tổng số liều vắc-xin đã tiêm"
console.log("Total shots: " + Form.getTotalShots());