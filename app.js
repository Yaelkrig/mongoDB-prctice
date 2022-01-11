const mongoose = require("mongoose");
const key = require("./secret").MONGO_PASS;
const { studentSchema } = require("./models/Student")
const { testsSchema } = require("./models/Tests")


async function getConnection() {
    try {
        return await mongoose.connect(
            `mongodb+srv://yael:${key}@cluster0.nk8tx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
        );

    } catch (error) {
        console.log(error);
    }
}

async function createStudent() {
    try {
        const connection = await getConnection();
        const Student = connection.model("Student", studentSchema);
        const student = new Student({ name: "Yael", age: 20, date: new Date(2001, 01, 16) });
        console.log(student);
        student
            .save()
            .then(() => connection.disconnect())
            .then(console.log("student saved"));
    } catch (error) {
        console.log(error);
    }
}
createStudent();
async function createTest() {
    try {
        const connection = await getConnection();
        const Test = connection.model("Test", testsSchema);
        const test = new Test({ category: "math", score: 95 });
        console.log(test);
        test
            .save()
            .then(() => connection.disconnect())
            .then(console.log("test saved"));
    } catch (error) {
        console.log(error);
    }
}
async function findStudent() {
    try {
        const connection = await getConnection();
        const Student = connection.model("Student", studentSchema);
        const students = await Student.find();
        console.log(students)
        await connection.disconnect();
        console.log("done");

    } catch (error) {
        console.log(error);
    }
}

async function clearStudents() {
    try {
        const connection = await getConnection();
        const Student = connection.model("Student", studentSchema);
        await Student.deleteMany({ name: "Yael" })
        const students = await Student.find();
        await connection.disconnect();
        console.log(students);
        console.log("deleted");

    } catch (error) {
        console.log(error);
    }

}
// clearStudents()