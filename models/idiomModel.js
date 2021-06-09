const mongoose = require("mongoose");

const idiomSchema = new mongoose.Schema({
    idiom: {
        type: String,
        required: true
    },
    meaning: {
        type: String,
        required: true
    }
});

const idiomModel = new mongoose.model("idiom", idiomSchema);


module.exports = idiomModel;