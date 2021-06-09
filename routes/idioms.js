const express = require("express");
const router = express();
const idiomModel = require("../models/idiomModel");


router.get("/", async (req, res) => {
    try {
        const idioms = await idiomModel.find({});
        res.render("idioms", { idioms });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;


