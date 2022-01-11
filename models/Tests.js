const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");

const testsSchema = new mongoose.Schema({
    category: String,
    score: Number,
    date: {
        type: Date,
        default: () => (new Date().getTime())
    },
});
module.exports = mongoose.model("Tests", testsSchema)