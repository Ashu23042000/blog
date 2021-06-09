const express = require("express");
const router = express();
const idiomModel = require("../models/idiomModel");

router.get("/", (req, res) => {
    res.render("addIdioms", { message: "" });
});

router.post("/", async (req, res) => {

    const { idiom, meaning } = req.body;

    try {
        const getIdiom = await idiomModel.findOne({ idiom: idiom.trim() });
        if (getIdiom) {
            res.render("addIdioms", { message: "This idiom is already exist." })
        } else {
            const newIdiom = new idiomModel({
                idiom: idiom.trim(),
                meaning: meaning.trim()
            });

            await newIdiom.save();

            res.redirect("/add-idioms")
        }
    }
    catch (err) {
        console.log(err);
    }

});

module.exports = router;


