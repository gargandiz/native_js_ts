import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: "Dimich",
        age: 14,
        isActive: false,
        address: {
            streetTitle: "Botanichniy Sad 5",
            city: {
                title: "Kharkiv",
                countryTitle: "Ukraine"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "React"
            },
        ]
    }
})


test("new tech skill should contains hospital and fire station", () => {
    expect(student.technologies.length).toBe(3);

    addSkill(student, "JS");

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe("JS");
    expect(student.technologies[3].id).toBeDefined();

})


test("student should be active", () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student);

    expect(student.isActive).toBe(true);

})


test("does the student lives in city?", () => {
    expect(student.isActive).toBe(false);

    let result1 = doesStudentLiveIn(student, "Kyiv");
    let result2 = doesStudentLiveIn(student, "Kharkiv");

    expect(result1).toBe(false);
    expect(result2).toBe(true);
})

