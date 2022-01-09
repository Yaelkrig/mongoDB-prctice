const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'Yael',
        required: true
    },
    age: {
        type: Number,
        max: 120,
        required: true,

    },
    date: Date
});
module.exports = mongoose.model("Student", studentSchema)