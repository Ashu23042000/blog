const express = require("express");
const router = express();
const dailySentenceModel = require("../models/dailySentenceModel");


router.get("/", (req, res) => {
    res.render("addDailySentences");
});

router.post("/", async (req, res) => {

    const { sentence, meaning } = req.body;
    const newSentence = new dailySentenceModel({
        sentence,
        meaning
    });

    await newSentence.save();

    res.redirect("/add-daily-sentences")
});

module.exports = router;


