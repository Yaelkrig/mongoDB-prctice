const mongoose = require("mongoose");
const key = require("./secret").MONGO_PASS;
const { studentSchema } = require("./models/Student")

async function getCnection() {
    try {
        return await mongoose.connect(
            `mongodb+srv://yael:${key}@cluster0.nk8tx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
        );

    } catch (error) {
        console.log(error);
    }
}

async function create() {
    try {
        const connection = await getCnection();
        const Student = connection.model("Student", studentSchema);
        const student = new Student({ age: 121 });
        console.log(student);
        student
            .save()
            .then(() => connection.disconnect())
            .then(console.log("student saved"));
    } catch (error) {
        console.log(error);
    }
}
create();
