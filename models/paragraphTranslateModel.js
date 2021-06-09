const mongoose = require("mongoose");

const paragraphTranslateSchema = new mongoose.Schema({
    paragraph: {
        type: String,
        required: true
    },
    translation: {
        type: String,
        required: true
    }
});

const paragraphTranslateModel = new mongoose.model("paragraphTranslate", paragraphTranslateSchema);


module.exports = paragraphTranslateModel;