const express = require("express");
const router = express();
const paragraphTranslateModel = require("../models/paragraphTranslateModel");


router.get("/", (req, res) => {
    res.render("addParagraph");
});

router.post("/", async (req, res) => {

    const { paragraph, translation } = req.body;
    const newParagraph = new paragraphTranslateModel({
        paragraph,
        translation
    });

    await newParagraph.save();

    res.redirect("/add-paragraph")
});

module.exports = router;


