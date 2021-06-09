const mongoose = require("mongoose");

const dailySentenceSchema = new mongoose.Schema({
    sentence: {
        type: String,
        required: true
    },
    meaning: {
        type: String,
        required: true
    }
});

const dailySentenceModel = new mongoose.model("dailySentence", dailySentenceSchema);


module.exports = dailySentenceModel;