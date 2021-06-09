const express = require("express");
const router = express();

router.get("/", (req, res) => {
    res.render("paragraphTranslate");
});

module.exports = router;


